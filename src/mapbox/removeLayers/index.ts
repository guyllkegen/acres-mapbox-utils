import isLayerActive from '../isLayerActive';
import type { AnyLayer, Map } from 'mapbox-gl';

const removeLayers = (map: Map, layers: AnyLayer[]) => {
  try {
    if (!map) throw new Error('map is undefined');

    layers.forEach((layer) => {
      if (map.getLayer(layer.id) && isLayerActive(map, layer.id)) {
        map.removeLayer(layer.id);
      }
    });

    return layers;
  } catch (err) {
    return new Error(String(err));
  }
};

export default removeLayers;
