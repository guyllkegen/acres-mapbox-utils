import type { AnyLayer, Map } from 'mapbox-gl';

const addLayers = (
  map: Map,
  layers: AnyLayer[],
  label?: string,
  // eslint-disable-next-line no-unused-vars
  moveUpPriorityLayers?: (m: Map) => void,
) => {
  try {
    layers.forEach((layer) => {
      if (map.getLayer(layer.id)) map.removeLayer(layer.id);
      if (map.getSource(layer.id)) map.removeSource(layer.id);

      map.addLayer(layer, label);
    });

    // Always keep the parcel highlight at the top
    if (moveUpPriorityLayers) {
      moveUpPriorityLayers(map);
    }

    return layers;
  } catch (error) {
    return new Error(String(error));
  }
};

export default addLayers;
