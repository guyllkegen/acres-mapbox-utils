import type { Map } from 'mapbox-gl';

const flyToLocation = (
  map: Map,
  location: [number, number],
  zoom: number,
  duration: number | undefined = undefined,
) => {
  if (location) {
    if (duration) {
      map.flyTo({ center: location, duration, zoom });
    } else {
      map.flyTo({ center: location, zoom });
    }
  }
};

export default flyToLocation;
