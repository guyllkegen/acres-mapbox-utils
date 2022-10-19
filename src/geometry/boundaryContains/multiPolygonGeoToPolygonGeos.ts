import type { MultiPolygon, Polygon } from 'geojson';

/**
 * Converts a multipolygon geometry to an array of polygon geometries
 * @param multipolygon The original multi polygon geometry
 * @returns The array of polygons that made up the multi polygon
 */

export function multiPolygonGeoToPolygonGeos(
  multipolygon: MultiPolygon,
): Polygon[] {
  const polygons: Polygon[] = [];

  multipolygon.coordinates.forEach((coords) => {
    polygons.push({
      coordinates: coords,
      type: 'Polygon',
    });
  });

  return polygons;
}

export default multiPolygonGeoToPolygonGeos;
