import type { MapboxGeoJSONFeature, Map } from 'mapbox-gl';

async function getQueriedRenderedFeatures(
  map: Map,
  layerIds: string[],
): Promise<MapboxGeoJSONFeature[]> {
  const timeInterval = 1;
  const timeout = 100;
  return new Promise((resolve) => {
    let counter = 0;

    const interval = setInterval(() => {
      if (counter > timeout) {
        resolve([]);
        clearInterval(interval);
      }

      counter += timeInterval;

      const features = map.queryRenderedFeatures(undefined, {
        layers: layerIds,
      });

      if (features.length) {
        clearInterval(interval);

        resolve(features);
      }
    }, timeInterval);
  });
}

export default getQueriedRenderedFeatures;
