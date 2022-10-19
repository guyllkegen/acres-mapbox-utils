import union from '@turf/union';
import {
  Feature,
  GeoJsonProperties,
  Geometry,
  MultiPolygon,
  Polygon,
} from 'geojson';

/**
 * Filters out any shape that is not a polygon or multi-polygon
 * @param features
 * @returns array of polygons and multi-polygons
 */
function getPolygonsAndMultiPolygons<T extends GeoJsonProperties>(
  features: Feature<Geometry, T>[],
): Feature<Polygon | MultiPolygon, T>[] {
  const shapes = features.filter((feature) => {
    const { type } = feature.geometry;

    if (type === 'Polygon' || type === 'MultiPolygon') {
      return true;
    }

    if (type === 'Point') {
      return false;
    }

    throw Error(`This feature is not a polygon or multi-polygon, ${feature}`);
  }) as Feature<Polygon | MultiPolygon, T>[];

  return shapes;
}

/**
 * Combines an array of features into a single feature (If possible)
 * Will need to keep an eye on @turf/union as they are changing union into a feature collection instead of two polygons
 * @param features
 * @param parcelSelection I have no idea what this is
 * @returns a single polygon/multi-polygon if possible to combine the array of features, otherwise null
 */
function multiUnion<T extends GeoJsonProperties>(
  features: Feature<Geometry, T>[] | null,
  parcelSelection?: number,
  properties?: T,
  id?: string | number,
): Feature<Polygon | MultiPolygon, T> | null {
  if (!features) return null;

  const validFeatures = getPolygonsAndMultiPolygons<T>(features);

  if (validFeatures.length === 0) return null;

  if (typeof parcelSelection === 'number') {
    if (parcelSelection < 1) {
      return null;
    }

    return validFeatures[parcelSelection - 1] ?? null;
  }

  const [first] = validFeatures;

  if (!first) return null;

  let combined = first;

  validFeatures.forEach((feature) => {
    // The order of the params matters lol. wtf?
    const res = union(feature.geometry, combined.geometry, { properties });

    if (res) {
      combined = res;
    } else {
      // I do not know how to throw this error
      throw new Error(`There was an error combining this feature, ${feature}`);
    }
  });

  return {
    ...combined,
    id,
  };
}

export default multiUnion;
