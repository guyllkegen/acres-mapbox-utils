import { sum } from 'd3-array';
import { polygonArea } from 'd3-polygon';
import { Feature, Geometry, Position } from 'geojson';
import * as proj4 from 'proj4';

const AC_M2 = 4046.86;

function getTM([longitude, latitude]: [number, number]) {
  return `+proj=tmerc +lat_0=${latitude} +lon_0=${longitude} +units=m +no_defs`;
}

export function getRingArea(coords: any[] | undefined) {
  if (!coords || !coords.length) return 0;

  const TM = getTM(coords[0]);

  const projected = coords.map((p) => proj4('EPSG:4326', TM, [...p].splice(0, 2))) as [number, number][];

  return Math.abs(polygonArea(projected)) / AC_M2;
}

export function getPolyArea(rings: Position[][]) {
  if (!rings.length) return 0;

  return getRingArea(rings[0]) - sum(rings.slice(1), getRingArea);
}

export function getArea(geometry?: Geometry) {
  const err = new Error('needs to be a Polygon');

  if (!geometry) {
    return 0;
  }

  if (geometry.type === 'MultiPolygon') {
    return sum(geometry.coordinates, (c) => getPolyArea(c));
  }

  if (geometry.type === 'Polygon') {
    return getPolyArea(geometry.coordinates);
  }

  if (geometry.type === 'Point') {
    return 0;
  }

  throw err;
}

/**
 * Get acreage of a feature
 * @param feature
 * @returns
 */
export function getAcres(feature?: Feature): number {
  if (!feature) return 0;

  const totalAcresEst = getArea(feature.geometry);

  return totalAcresEst;
}

/**
 * Get acreage of all the features
 * @param features
 * @returns
 */
export function getTotalAcres(features?: Feature[]) {
  if (!features) return 0;

  const totalAcresEst = sum(features, (f:Feature) => getArea(f.geometry));

  return totalAcresEst;
}

export default getAcres;
