import type { Geometry } from 'geojson';
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
