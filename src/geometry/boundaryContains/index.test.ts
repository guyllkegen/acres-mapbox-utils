import geoCompletelyContains from './geoCompletelyContains';
import geoCompletelyContainsMany from './geoCompletelyContainsMany';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Geometries } from '@turf/helpers';

const containers: Geometries[] = [
  {
    coordinates: [
      [
        [-94.54825401306152, 36.20051215333818],
        [-94.53606605529785, 36.20051215333818],
        [-94.53606605529785, 36.21041592212695],
        [-94.54825401306152, 36.21041592212695],
        [-94.54825401306152, 36.20051215333818],
      ],
    ],
    type: 'Polygon',
  },
  {
    coordinates: [
      [
        [-94.53505754470825, 36.200581414813584],
        [-94.52877044677734, 36.200581414813584],
        [-94.52877044677734, 36.21038129574799],
        [-94.53505754470825, 36.21038129574799],
        [-94.53505754470825, 36.200581414813584],
      ],
    ],
    type: 'Polygon',
  },
];

const isInside: Geometries = {
  coordinates: [
    [
      [-94.54409122467041, 36.20307478711538],
      [-94.54007863998413, 36.20307478711538],
      [-94.54007863998413, 36.205966306920644],
      [-94.54409122467041, 36.205966306920644],
      [-94.54409122467041, 36.20307478711538],
    ],
  ],
  type: 'Polygon',
};

const isPartiallyInside: Geometries = {
  coordinates: [
    [
      [-94.5376968383789, 36.20420024165264],
      [-94.53409194946289, 36.20420024165264],
      [-94.53409194946289, 36.2083729395534],
      [-94.5376968383789, 36.2083729395534],
      [-94.5376968383789, 36.20420024165264],
    ],
  ],
  type: 'Polygon',
};

const isOutside: Geometries = {
  coordinates: [
    [
      [-94.53520774841309, 36.20477162007056],
      [-94.53243970870972, 36.20477162007056],
      [-94.53243970870972, 36.20825174399616],
      [-94.53520774841309, 36.20825174399616],
      [-94.53520774841309, 36.20477162007056],
    ],
  ],
  type: 'Polygon',
};

const isInsideBothAndOutside: Geometries = {
  coordinates: [
    [
      [-94.53945636749268, 36.203195990689196],
      [-94.53207492828369, 36.203195990689196],
      [-94.53207492828369, 36.20769770477292],
      [-94.53945636749268, 36.20769770477292],
      [-94.53945636749268, 36.203195990689196],
    ],
  ],
  type: 'Polygon',
};

describe('Test geoCompletelyContains works', () => {
  it('Returns true for a completely contained geometry', () => {
    const result = geoCompletelyContains(containers, isInside);

    expect(result).toEqual(true);
  });
  it('Returns false for a partially contained geometry', () => {
    const result = geoCompletelyContains(containers, isPartiallyInside);

    expect(result).toEqual(false);
  });
  it('Returns false for a not-at-all contained geometry', () => {
    const result = geoCompletelyContains(containers, isOutside);

    expect(result).toEqual(false);
  });
  it('Returns false for a geometry that is inside both but also partially outside', () => {
    const result = geoCompletelyContains(containers, isInsideBothAndOutside);

    expect(result).toEqual(false);
  });
});

describe('Test geoCompletelyContainsMany works', () => {
  it('Returns true for many completely contained geometrires', () => {
    const result = geoCompletelyContainsMany(containers, [
      isInside,
      isInside,
      isInside,
      isInside,
    ]);

    expect(result).toEqual(true);
  });
  it('Returns false for one partially contained geometry and one contained one', () => {
    const result = geoCompletelyContainsMany(containers, [
      isPartiallyInside,
      isInside,
    ]);

    expect(result).toEqual(false);
  });
  it('Returns false for one not-at-all contained geometry and one contained one', () => {
    const result = geoCompletelyContainsMany(containers, [isOutside, isInside]);

    expect(result).toEqual(false);
  });
  it('Returns false for a geometry that is inside both but also partially outside', () => {
    const result = geoCompletelyContainsMany(containers, [
      isInsideBothAndOutside,
      isInside,
    ]);

    expect(result).toEqual(false);
  });
});
