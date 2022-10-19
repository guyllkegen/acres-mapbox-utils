/* eslint-disable no-param-reassign */
import { Feature } from 'geojson';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepClone = require('lodash.clonedeep');

/**
 * Converts a polygon into a multi-polygon. Or an array of features into an array of multi-polygons
 * @param data Feature
 * @returns
 */
const convertPolygon = (
  data: Feature | Feature[],
): Feature | Feature[] => {
  if (Array.isArray(data)) {
    return data.map((value) => {
      const newValue = deepClone(value);

      if (newValue.geometry.type === 'Polygon') {
        (newValue.geometry.type as any) = 'MultiPolygon';
        newValue.geometry.coordinates = [newValue.geometry.coordinates as any];

        if (newValue.id) {
          delete newValue.id;
        }
      }

      return newValue;
    });
  }

  if (data.geometry.type === 'Polygon') {
    (data.geometry.type as any) = 'MultiPolygon';
    data.geometry.coordinates = [data.geometry.coordinates as any];

    if (data.id) {
      delete data.id;
    }
  }

  return data;
};

export default convertPolygon;
