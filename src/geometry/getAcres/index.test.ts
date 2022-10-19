import getAcres, { getTotalAcres, getArea } from '.';
import { testParcelFeature, testParcelFeatures } from '../../__mock__/models';

describe('getTotalAcres', () => {
  it('gets the aggregate sum of acres of the features', () => {
    const features1 = testParcelFeatures;
    const result1 = getTotalAcres(features1);
    const result2 = getTotalAcres([]);
    const expectedResult1 = 3.1767280971073473;
    const expectedResult2 = 0;

    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
  });

  it('returns 0', () => {
    const features1 = undefined;
    const result = getTotalAcres(features1);
    const expectedResult1 = 0;

    expect(result).toEqual(expectedResult1);
  });
});

describe('getAcres', () => {
  it('handles default params', () => {
    const features1 = undefined;
    const result1 = getAcres(features1);
    const expectedResult1 = 0;

    expect(result1).toEqual(expectedResult1);
  });

  it('gets the aggregate sum of acres of the features', () => {
    const features1 = testParcelFeature;
    const result1 = getAcres(features1);
    const expectedResult1 = 0.7615658049387426;

    expect(result1).toEqual(expectedResult1);
  });
});

describe('getArea', () => {
  it('throws an error', () => {
    const testGeometry = {
      coordinates: [[[]]],
      type: 'Polyhedron',
    } as any;
    expect(() => getArea(testGeometry)).toThrowError('needs to be a Polygon');
  });
});
