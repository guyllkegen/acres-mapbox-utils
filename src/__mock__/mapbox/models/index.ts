import type { Feature, Geometry } from 'geojson';
import type { MapboxGeoJSONFeature } from 'mapbox-gl';

export const testGeometry: Geometry = { coordinates: [0, 0], type: 'Point' };

export const testGeoJSONFeature: MapboxGeoJSONFeature = {
  geometry: testGeometry,
  id: 1,
  layer: { id: '', type: '' },
  properties: { id: '1' },
  source: '',
  sourceLayer: '',
  state: {},
  type: 'Feature',
};

export const testGeoJSONFeatures: MapboxGeoJSONFeature[] = [
  {
    geometry: { coordinates: [0, 0], type: 'Point' },
    id: 1,
    layer: { id: '', type: '' },
    properties: { id: '1' },
    source: '',
    sourceLayer: '',
    state: {},
    type: 'Feature',
  },
  {
    geometry: { coordinates: [0, 0], type: 'Point' },
    id: 1,
    layer: { id: '', type: '' },
    properties: { id: '1' },
    source: '',
    sourceLayer: '',
    state: {},
    type: 'Feature',
  },
  {
    geometry: { coordinates: [0, 0], type: 'Point' },
    id: 2,
    layer: { id: '', type: '' },
    properties: { id: '2' },
    source: '',
    sourceLayer: '',
    state: {},
    type: 'Feature',
  },
  {
    geometry: { coordinates: [0, 0], type: 'Point' },
    id: 2,
    layer: { id: '', type: '' },
    properties: null,
    source: '',
    sourceLayer: '',
    state: {},
    type: 'Feature',
  },
];

const testPositions = [
  [-91.39846622943878, 36.01192904452819],
  [-91.39894902706146, 36.01164916248548],
  [-91.39940232038498, 36.01141484187151],
  [-91.40025526285172, 36.0110937347137],
  [-91.40132278203964, 36.01064678608692],
  [-91.40180557966232, 36.01039076582909],
  [-91.4019826054573, 36.01081168005004],
  [-91.40291333198547, 36.01095921646153],
  [-91.40293478965759, 36.0097984445878],
  [-91.40693664550781, 36.0098309898265],
  [-91.40693664550781, 36.01348031069996],
  [-91.3984689116478, 36.013434749471344],
  [-91.39846622943878, 36.01192904452819],
];

export const testParcelFeature: Feature = {
  geometry: {
    coordinates: [[testPositions[1], testPositions[2], testPositions[7]]],
    type: 'Polygon',
  },
  id: 1,
  properties: {
    apn: '',
    mail_city: '',
    mail_nbr: '',
    mail_state: '',
    mail_str: '',
    mail_zip: '',
    own1_frst: 'Barbara',
    own1_last: 'Lorin',
    own2_frst: '',
    own2_last: '',
    parcel_id: '1',
  },
  type: 'Feature',
};

export const testStateCountyFeature: Feature = {
  geometry: {
    coordinates: [[testPositions[1], testPositions[2], testPositions[7]]],
    type: 'Polygon',
  },
  id: '1',
  properties: {
    AFFGEOID: '',
    ALAND: 0,
    AWATER: 0,
    GEOID: '',
    LSAD: '',
    NAME: '',
    STATEFP: '',
    STATENS: '',
    STUSPS: '',
  },
  type: 'Feature',
};

export const testParcelFeatures: Feature[] = [
  {
    geometry: {
      coordinates: [[[testPositions[4], testPositions[5], testPositions[9]]]],
      type: 'MultiPolygon',
    },
    id: 1,
    properties: {
      apn: '',
      mail_city: '',
      mail_nbr: '',
      mail_state: '',
      mail_str: '',
      mail_zip: '',
      own1_frst: 'Andi',
      own1_last: 'Frankie',
      own2_frst: '',
      own2_last: '',
      parcel_id: '1',
    },
    type: 'Feature',
  },
  {
    geometry: {
      coordinates: [[testPositions[2], testPositions[3], testPositions[5]]],
      type: 'Polygon',
    },
    id: 2,
    properties: {
      apn: '',
      mail_city: '',
      mail_nbr: '',
      mail_state: '',
      mail_str: '',
      mail_zip: '',
      own1_frst: 'Tom',
      own1_last: 'Gil',
      own2_frst: '',
      own2_last: '',
      parcel_id: '2',
    },
    type: 'Feature',
  },
  {
    geometry: {
      coordinates: [[testPositions[6], testPositions[1], testPositions[5]]],
      type: 'Polygon',
    },
    id: 3,
    properties: {
      apn: '',
      mail_city: '',
      mail_nbr: '',
      mail_state: '',
      mail_str: '',
      mail_zip: '',
      own1_frst: 'Victor',
      own1_last: 'Hines',
      own2_frst: '',
      own2_last: '',
      parcel_id: '3',
    },
    type: 'Feature',
  },
];

export const PolygonArray = [
  {
    geometry: {
      coordinates: [
        [
          [-98.42845022678375, 35.69627518850598],
          [-98.43743026256561, 35.696244692587086],
          [-98.43737125396729, 35.703454474552785],
          [-98.42844486236572, 35.703493680044076],
          [-98.42845022678375, 35.69627518850598],
        ],
      ],
      type: 'Polygon',
    },
  },
  {
    geometry: {
      coordinates: [
        [
          [-98.42845022678375, 35.69627518850598],
          [-98.43743026256561, 35.696244692587086],
          [-98.43737125396729, 35.703454474552785],
          [-98.42844486236572, 35.703493680044076],
          [-98.42845022678375, 35.69627518850598],
        ],
      ],
      type: 'Polygon',
    },
  },
];

export const Polygon = {
  geometry: {
    coordinates: [
      [
        [-98.42845022678375, 35.69627518850598],
        [-98.43743026256561, 35.696244692587086],
        [-98.43737125396729, 35.703454474552785],
        [-98.42844486236572, 35.703493680044076],
        [-98.42845022678375, 35.69627518850598],
      ],
    ],
    type: 'Polygon',
  },
};

export const MultiPolygon = {
  geometry: {
    coordinates: [
      [
        [
          [-98.42845022678375, 35.69627518850598],
          [-98.43743026256561, 35.696244692587086],
          [-98.43737125396729, 35.703454474552785],
          [-98.42844486236572, 35.703493680044076],
          [-98.42845022678375, 35.69627518850598],
        ],
      ],
    ],
    type: 'MultiPolygon',
  },
};

export const MultiPolygonArray = [
  {
    geometry: {
      coordinates: [
        [
          [
            [-98.42845022678375, 35.69627518850598],
            [-98.43743026256561, 35.696244692587086],
            [-98.43737125396729, 35.703454474552785],
            [-98.42844486236572, 35.703493680044076],
            [-98.42845022678375, 35.69627518850598],
          ],
        ],
      ],
      type: 'MultiPolygon',
    },
  },
  {
    geometry: {
      coordinates: [
        [
          [
            [-98.42845022678375, 35.69627518850598],
            [-98.43743026256561, 35.696244692587086],
            [-98.43737125396729, 35.703454474552785],
            [-98.42844486236572, 35.703493680044076],
            [-98.42845022678375, 35.69627518850598],
          ],
        ],
      ],
      type: 'MultiPolygon',
    },
  },
];

export const parcelFeature: Feature = {
  geometry: {
    coordinates: [
      [
        [-92.48615026473999, 39.53436523636276],
        [-92.48501300811768, 39.53437351090125],
        [-92.48060345649719, 39.53429904001922],
        [-92.48062491416931, 39.533215065914476],
        [-92.47994899749756, 39.53308267097083],
        [-92.47676253318787, 39.533057846890785],
        [-92.47666597366333, 39.53793974517629],
        [-92.47659087181091, 39.54143133300428],
        [-92.48587131500244, 39.54158025938494],
        [-92.48600006103516, 39.54005788576376],
        [-92.48607516288757, 39.5393628780086],
        [-92.48612880706787, 39.53910638529325],
        [-92.48612880706787, 39.53793974517629],
        [-92.48613953590393, 39.5372778129867],
        [-92.4861327806275, 39.5372778129867],
        [-92.48615026473999, 39.53436523636276],
      ],
    ],
    type: 'Polygon',
  },
  id: '1377800638',
  properties: {
    apn: '02-8.0-28.0-0.0-000-001.000',
    mail_city: 'CAIRO',
    mail_nbr: '8993',
    mail_state: 'MO',
    mail_str: 'HIGHWAY Z',
    mail_zip: '652392353',
    own1_frst: 'ROY D',
    own1_last: 'DALE',
    own2_frst: 'CORENE',
    own2_last: 'DALE',
    parcel_id: '1377800637',
  },
  type: 'Feature',
};

export const parcelFeature2: Feature = {
  geometry: {
    coordinates: [
      [
        [-92.48615026473999, 39.53436523636276],
        [-92.48501300811768, 39.53437351090125],
        [-92.48060345649719, 39.53429904001922],
        [-92.48062491416931, 39.533215065914476],
        [-92.47994899749756, 39.53308267097083],
        [-92.47676253318787, 39.533057846890785],
        [-92.47666597366333, 39.53793974517629],
        [-92.47659087181091, 39.54143133300428],
        [-92.48587131500244, 39.54158025938494],
        [-92.48600006103516, 39.54005788576376],
        [-92.48607516288757, 39.5393628780086],
        [-92.48612880706787, 39.53910638529325],
        [-92.48612880706787, 39.53793974517629],
        [-92.48613953590393, 39.5372778129867],
        [-92.4861327806275, 39.5372778129867],
        [-92.48615026473999, 39.53436523636276],
      ],
    ],
    type: 'Polygon',
  },
  id: '1377800637',
  properties: {
    apn: '02-8.0-28.0-0.0-000-001.000',
    mail_city: 'CAIRO',
    mail_nbr: '8993',
    mail_state: 'MO',
    mail_str: 'HIGHWAY Z',
    mail_zip: '652392353',
    own1_frst: 'ROY D',
    own1_last: 'DALE',
    own2_frst: 'CORENE',
    own2_last: 'DALE',
    parcel_id: '1377800637',
  },
  type: 'Feature',
};
