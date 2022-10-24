import convertPolygon from '.';
import {
  MultiPolygon, MultiPolygonArray, Polygon, PolygonArray,
} from '../../__mock__/geometry/models/index.mock';

describe('convertPolygon', () => {
  it('should return MultiPolygon from Polygon input', () => {
    const test = convertPolygon(Polygon as any);

    expect(test).toEqual(MultiPolygon);
  });

  it('should return MultiPolygonArray from PolygonArray input', () => {
    const test = convertPolygon(PolygonArray as any);

    expect(test).toEqual(MultiPolygonArray);
  });

  it('should return and unchanged object', () => {
    const test = convertPolygon(MultiPolygon as any);

    expect(test).toEqual(MultiPolygon);
  });

  it('should return and unchanged array', () => {
    const test = convertPolygon(MultiPolygonArray as any);

    expect(test).toEqual(MultiPolygonArray);
  });
});
