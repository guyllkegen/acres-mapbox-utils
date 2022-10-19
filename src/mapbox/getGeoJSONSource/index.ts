import type { GeoJSONSource, Map } from 'mapbox-gl';

/**
 * Gets a source from MapBox (If available), and returns the source as a GeoJSONSource
 * @Notes MapBox does not do a undefined check when getting the source.
 * @param map
 * @param sourceId
 * @returns
 */
function getGeoJSONSource(
  map: Map,
  sourceId: string,
): GeoJSONSource | undefined {
  return map.getSource(sourceId) as GeoJSONSource;
}

export default getGeoJSONSource;
