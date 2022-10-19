import centroid from '.';
import { Feature, Geometry } from 'geojson';

const testGeometry: Geometry = {
  coordinates: [
    [
      [-453.91422271728516, 35.76406489758856],
      [-453.84212493896484, 35.76406489758856],
      [-453.84212493896484, 35.822545719249895],
      [-453.91422271728516, 35.822545719249895],
      [-453.91422271728516, 35.76406489758856],
    ],
  ],
  type: 'Polygon',
};

const centerGeometry: Geometry = {
  coordinates: [-453.878173828125, 35.79330530841923],
  type: 'Point',
};

const geometryCollection: Geometry = {
  geometries: [testGeometry],
  type: 'GeometryCollection',
};

const feature: Feature = {
  geometry: testGeometry,
  properties: {},
  type: 'Feature',
};

describe('Test Centroid works', () => {
  it('should returns the correct centroid', () => {
    const result = centroid(testGeometry);
    expect(result.geometry).toEqual(centerGeometry);
  });
  it('should return a dummy centroid', () => {
    const result = centroid(geometryCollection);
    expect(result.geometry.coordinates).toEqual([
      -453.878173828125, 35.79330530841923,
    ]);
  });
  it('should return centroid from feature', () => {
    const result = centroid(feature);
    expect(result.geometry).toEqual(centerGeometry);
  });
});
