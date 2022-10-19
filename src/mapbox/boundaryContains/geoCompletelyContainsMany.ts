import geoCompletelyContains from './geoCompletelyContains';
import { Geometry } from 'geojson';

/**
 * Return false if any of the geometries are not contained by one of the containing geometries, otherwise true
 * @param containers The containers that we are checking if it completely contains the second argument
 * @param checks The Geometries that we are checking to see if is completely contained by the first argument
 * @returns True if the container COMPLETELY contains EVERY geometry in the second argument
 */
function geoCompletelyContainsMany(
  containers: Geometry[],
  checks: Geometry[],
): boolean {
  let allAreContained = true;

  checks.forEach((check) => {
    const isContained = geoCompletelyContains(containers, check);
    if (!isContained) {
      allAreContained = false;
    }
  });

  return allAreContained;
}

export default geoCompletelyContainsMany;
