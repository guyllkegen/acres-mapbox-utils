import fakeCentroid from '@turf/centroid';
import { Feature, GeoJsonProperties, Geometry } from 'geojson';

function getCentroid(
  geometry: Geometry,
  id?: string | number,
  properties?: GeoJsonProperties,
) {
  if (geometry.type === 'GeometryCollection') {
    const feature = fakeCentroid(
      {
        ...geometry,
        coordinates: [0, 0],
      },
      { properties },
    );

    return { ...feature, id };
  }

  const feature = fakeCentroid(geometry, { properties });

  return { ...feature, id };
}

/**
 * Returns the centroid of the polygon (May appear outside polygon)
 * @param item Either a Geometry or Feature
 * @param properties Properties assigned to the centroid feature
 * @returns
 */
const centroid = (
  item: Geometry | Feature,
  id?: string | number,
  properties?: GeoJsonProperties,
) => {
  if (item.type === 'Feature') {
    return getCentroid(
      item.geometry,
      id,
      properties ?? item.properties ?? undefined,
    );
  }

  // Is a geometry
  return getCentroid(item, id, properties);
};

export default centroid;
