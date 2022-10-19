import type { Map } from 'mapbox-gl';

const getMapZoom = (map: Map | undefined) => {
  if (map) {
    return map.getZoom();
  }

  return 0;
};

export default getMapZoom;
