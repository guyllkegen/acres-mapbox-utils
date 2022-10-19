import booleanContains from '@turf/boolean-contains';
import type { Geometry } from 'geojson';

/**
 * Return if a Geometry completely contains another or not
 * @param containers The container that we are checking if it completely contains the second argument
 * @param check The Geometry that we are checking to see if is completely contained by the first argument
 * @returns True if the container COMPLETELY contains the second argument
 */
export function geoCompletelyContains(
  containers: Geometry[],
  check: Geometry,
): boolean {
  let isInside = false;

  // This will resolve to true if the check is entirely inside
  //    any of the provided container polygons
  containers.forEach((geo) => {
    if (geo.type === 'GeometryCollection' || check.type === 'GeometryCollection') return;
    if (booleanContains(geo, check)) {
      isInside = true;
    }
  });

  return isInside;
}

export default geoCompletelyContains;
