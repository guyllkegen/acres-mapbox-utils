import type { Map } from 'mapbox-gl';

async function layerHasQueryableSource(
  map: Map,
  layerId: string,
  sourceLayer: string,
): Promise<boolean> {
  const timeInterval = 10;
  const timeout = 100;
  return new Promise((resolve) => {
    let counter = 0;

    const interval = setInterval(() => {
      if (counter > timeout) {
        resolve(false);
        clearInterval(interval);
      }

      counter += timeInterval;

      const features = map.querySourceFeatures(layerId, {
        sourceLayer,
      });
      if (features.length > 0) {
        resolve(true);
        clearInterval(interval);
      }
    }, timeInterval);
  });
}

export default layerHasQueryableSource;
