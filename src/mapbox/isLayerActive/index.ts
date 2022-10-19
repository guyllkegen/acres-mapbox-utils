import type { Map } from 'mapbox-gl';

const isLayerActive = (map: Map, layerId: string) => {
  if (!map) return false;

  try {
    if (map.getLayer(layerId)) return true;
  } catch (err) {
    return new Error(String(err));
  }

  return false;
};

export default isLayerActive;
