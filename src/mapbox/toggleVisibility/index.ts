import isLayerActive from '../isLayerActive';
import type { Map, AnyLayer } from 'mapbox-gl';

const toggleVisibility = (
  map: Map,
  layers: (AnyLayer | string)[],
  active: boolean,
) => {
  layers.forEach(async (layer) => {
    let id;
    if (typeof layer === 'string') {
      id = layer;
    } else {
      id = layer.id;
    }

    if (isLayerActive(map, id)) { map.setLayoutProperty(id, 'visibility', `${active ? 'visible' : 'none'}`); }
  });
};

export default toggleVisibility;
