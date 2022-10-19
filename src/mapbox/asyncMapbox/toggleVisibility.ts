import layerHasQueryableSource from './layerHasQueryableSource';
import toggleVisibility from '../toggleVisibility';
import type { AnyLayer, Map } from 'mapbox-gl';

/**
 * Makes toggling visibility of a layer async, it takes some time for the source to be set when enabling a layer
 * NOTE: This will only work for layers with a source (Only been tested for Vector layers so far)
 * @param map The map
 * @param layers The layers that you want to toggle
 * @param active Wether it should be active or not
 */
export const toggleVisibilityAsync = async (
  map: Map,
  layer: AnyLayer | string,
  sourceLayer: string,
  active: boolean,
) => {
  toggleVisibility(map, [layer], active);

  const layerId = typeof layer === 'string' ? layer : layer.id;
  if (active) {
    await layerHasQueryableSource(map, layerId, sourceLayer);
  }
};

export default toggleVisibilityAsync;
