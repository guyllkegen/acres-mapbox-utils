import { TIME_INCREMENT, TIME_LIMIT } from '../constants';
import type { Map } from 'mapbox-gl';

async function isLayerLoaded(
  map: Map,
  layerId: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    let counter = 0;

    const interval = setInterval(() => {
      if (counter > TIME_LIMIT) {
        resolve(false);
        clearInterval(interval);
      }

      counter += TIME_INCREMENT;
      try {
        if (map.getLayer(layerId)) {
          clearInterval(interval);

          resolve(true);
        }
      } catch (err) {
        resolve(false);
      }
    }, TIME_INCREMENT);
  });
}

export default isLayerLoaded;
