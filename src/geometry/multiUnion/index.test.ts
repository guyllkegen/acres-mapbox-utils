import multiUnion from '.';
import { Feature } from 'geojson';

describe('multi union', () => {
  it('unions 1 feature', () => {
    const feature: Feature = {
      geometry: {
        coordinates: [
          [
            [-91.306471824646, 35.027747294870636],
            [-91.30207300186157, 35.027685795880004],
            [-91.30212664604187, 35.02406605950166],
            [-91.3065254688263, 35.024136347170796],
            [-91.306471824646, 35.027747294870636],
          ],
        ],
        type: 'Polygon',
      },
      properties: {},
      type: 'Feature',
    };
    const expected: Feature = {
      geometry: {
        coordinates: [
          [
            [-91.3065254688263, 35.024136347170796],
            [-91.30212664604187, 35.02406605950166],
            [-91.30207300186157, 35.027685795880004],
            [-91.306471824646, 35.027747294870636],
            [-91.3065254688263, 35.024136347170796],
          ],
        ],
        type: 'Polygon',
      },
      properties: {},
      type: 'Feature',
    };
    const res = multiUnion([feature]);

    expect(res).toEqual(expected);
  });

  it('converts a multi-polygon into a valid polygon', () => {
    const feature: Feature = {
      geometry: {
        coordinates: [
          [
            [
              [-91.306471824646, 35.027747294870636],
              [-91.30207300186157, 35.027685795880004],
              [-91.30212664604187, 35.02406605950166],
              [-91.3065254688263, 35.024136347170796],
              [-91.306471824646, 35.027747294870636],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      properties: {},
      type: 'Feature',
    };
    const expected: Feature = {
      geometry: {
        coordinates: [
          [
            [-91.3065254688263, 35.024136347170796],
            [-91.30212664604187, 35.02406605950166],
            [-91.30207300186157, 35.027685795880004],
            [-91.306471824646, 35.027747294870636],
            [-91.3065254688263, 35.024136347170796],
          ],
        ],
        type: 'Polygon',
      },
      properties: {},
      type: 'Feature',
    };

    const res = multiUnion([feature]);
    expect(res).toEqual(expected);
  });

  it('unions multiple features', () => {
    const boundarySet: Feature[] = [
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.306471824646, 35.027747294870636],
                [-91.30207300186157, 35.027685795880004],
                [-91.30212664604187, 35.02406605950166],
                [-91.3065254688263, 35.024136347170796],
                [-91.306471824646, 35.027747294870636],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4972,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.30207300186157, 35.027685795880004],
                [-91.29767417907715, 35.02761551126264],
                [-91.29772782325745, 35.02399577177208],
                [-91.30212664604187, 35.02406605950166],
                [-91.30207300186157, 35.027685795880004],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4973,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.29767417907715, 35.02761551126264],
                [-91.29327535629272, 35.02754522658482],
                [-91.29332900047302, 35.02392548398208],
                [-91.29772782325745, 35.02399577177208],
                [-91.29767417907715, 35.02761551126264],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4974,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.30212664604187, 35.02406605950166],
                [-91.29332900047302, 35.02392548398208],
                [-91.29339337348938, 35.0203143674708],
                [-91.30218029022217, 35.02045494919942],
                [-91.30212664604187, 35.02406605950166],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4975,
        properties: {},
        type: 'Feature',
      },
    ];

    const expected: Feature = {
      geometry: {
        coordinates: [
          [
            [
              [-91.3065254688263, 35.024136347170796],
              [-91.30212664604187, 35.02406605950166],
              [-91.29772782325745, 35.02399577177208],
              [-91.29332900047302, 35.02392548398208],
              [-91.29327535629272, 35.02754522658482],
              [-91.29767417907715, 35.02761551126264],
              [-91.30207300186157, 35.027685795880004],
              [-91.306471824646, 35.027747294870636],
              [-91.3065254688263, 35.024136347170796],
            ],
          ],
          [
            [
              [-91.30218029022217, 35.02045494919942],
              [-91.29339337348938, 35.0203143674708],
              [-91.29332900047302, 35.02392548398208],
              [-91.30212664604187, 35.02406605950166],
              [-91.30218029022217, 35.02045494919942],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      properties: {},
      type: 'Feature',
    };

    const res = multiUnion(boundarySet);

    expect(res).toEqual(expected);
  });

  it('handles parcelSelection', () => {
    const boundarySet: Feature[] = [
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.306471824646, 35.027747294870636],
                [-91.30207300186157, 35.027685795880004],
                [-91.30212664604187, 35.02406605950166],
                [-91.3065254688263, 35.024136347170796],
                [-91.306471824646, 35.027747294870636],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4972,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.30207300186157, 35.027685795880004],
                [-91.29767417907715, 35.02761551126264],
                [-91.29772782325745, 35.02399577177208],
                [-91.30212664604187, 35.02406605950166],
                [-91.30207300186157, 35.027685795880004],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4973,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.29767417907715, 35.02761551126264],
                [-91.29327535629272, 35.02754522658482],
                [-91.29332900047302, 35.02392548398208],
                [-91.29772782325745, 35.02399577177208],
                [-91.29767417907715, 35.02761551126264],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4974,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.30212664604187, 35.02406605950166],
                [-91.29332900047302, 35.02392548398208],
                [-91.29339337348938, 35.0203143674708],
                [-91.30218029022217, 35.02045494919942],
                [-91.30212664604187, 35.02406605950166],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4975,
        properties: {},
        type: 'Feature',
      },
    ];

    const expected1: Feature = {
      geometry: {
        coordinates: [
          [
            [
              [-91.30207300186157, 35.027685795880004],
              [-91.29767417907715, 35.02761551126264],
              [-91.29772782325745, 35.02399577177208],
              [-91.30212664604187, 35.02406605950166],
              [-91.30207300186157, 35.027685795880004],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      id: 4973,
      properties: {},
      type: 'Feature',
    };

    const expected2: Feature = {
      geometry: {
        coordinates: [
          [
            [
              [-91.306471824646, 35.027747294870636],
              [-91.30207300186157, 35.027685795880004],
              [-91.30212664604187, 35.02406605950166],
              [-91.3065254688263, 35.024136347170796],
              [-91.306471824646, 35.027747294870636],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      id: 4972,
      properties: {},
      type: 'Feature',
    };

    const res1 = multiUnion(boundarySet, -1);
    expect(res1).toEqual(null);

    const res2 = multiUnion(boundarySet, 0);
    expect(res2).toEqual(null);

    const res3 = multiUnion(boundarySet, 1);
    expect(res3).toEqual(expected2);

    const res4 = multiUnion(boundarySet, 2);
    expect(res4).toEqual(expected1);
  });

  it('unions a polygon and multi-polygon', () => {
    const features: Feature[] = [
      {
        geometry: {
          coordinates: [
            [
              [
                [-91.30212664604187, 35.02406605950166],
                [-91.29332900047302, 35.02392548398208],
                [-91.29339337348938, 35.0203143674708],
                [-91.30218029022217, 35.02045494919942],
                [-91.30212664604187, 35.02406605950166],
              ],
            ],
          ],
          type: 'MultiPolygon',
        },
        id: 4975,
        properties: {},
        type: 'Feature',
      },
      {
        geometry: {
          coordinates: [
            [
              [-91.306471824646, 35.027747294870636],
              [-91.30207300186157, 35.027685795880004],
              [-91.30212664604187, 35.02406605950166],
              [-91.3065254688263, 35.024136347170796],
              [-91.306471824646, 35.027747294870636],
            ],
          ],
          type: 'Polygon',
        },
        properties: {},
        type: 'Feature',
      },
    ];

    const expected: Feature = {
      geometry: {
        coordinates: [
          [
            [
              [-91.3065254688263, 35.024136347170796],
              [-91.30212664604187, 35.02406605950166],
              [-91.30207300186157, 35.027685795880004],
              [-91.306471824646, 35.027747294870636],
              [-91.3065254688263, 35.024136347170796],
            ],
          ],
          [
            [
              [-91.30218029022217, 35.02045494919942],
              [-91.29339337348938, 35.0203143674708],
              [-91.29332900047302, 35.02392548398208],
              [-91.30212664604187, 35.02406605950166],
              [-91.30218029022217, 35.02045494919942],
            ],
          ],
        ],
        type: 'MultiPolygon',
      },
      properties: {},
      type: 'Feature',
    };

    const res1 = multiUnion(features);
    const res2 = multiUnion(features.reverse());

    expect(res1).toEqual(expected);
    expect(res2).toEqual(expected);
  });

  it('handles empty features', () => {
    const res = multiUnion([]);

    expect(res).toEqual(null);
  });

  it('handles null', () => {
    const res = multiUnion(null);

    expect(res).toEqual(null);
  });

  it('handles point geometry', () => {
    const feature: Feature = {
      geometry: {
        coordinates: [-91.30212664604187, 35.02406605950166],
        type: 'Point',
      },
      id: 4975,
      properties: {},
      type: 'Feature',
    };

    const res = multiUnion([feature]);
    expect(res).toEqual(null);
  });
});
