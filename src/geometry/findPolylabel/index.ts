import { getArea } from '../getAcres';
import polylabel from 'polylabel';
import type { Feature, Position } from 'geojson';

function findPolylabel(feature: Feature) {
  let output: number[] = [];

  if (feature.geometry.type === 'Polygon') {
    output = polylabel(feature.geometry.coordinates);
  } else if (feature.geometry.type === 'MultiPolygon') {
    let maxArea = 0;
    let maxPolygon: Position[][] = [[]];

    for (let i = 0, l = feature.geometry.coordinates.length; i < l; i += 1) {
      const p = feature.geometry.coordinates[i];
      const area = getArea({ coordinates: p, type: 'Polygon' });
      if (area > maxArea) {
        maxPolygon = p;
        maxArea = area;
      }
    }
    output = polylabel(maxPolygon);
  }

  return output;
}

export default findPolylabel;
