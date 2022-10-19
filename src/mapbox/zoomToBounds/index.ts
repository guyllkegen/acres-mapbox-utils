import flyToLocation from '../flyToLocation';
import bbox from '@turf/bbox';
import centroid from '@turf/centroid';
import dist from '@turf/distance';
import transformScale from '@turf/transform-scale';
import transformTranslate from '@turf/transform-translate';
import { Feature, Geometry } from 'geojson';
import { LngLat, LngLatBounds } from 'mapbox-gl';

import type { Map } from 'mapbox-gl';

type Padding =
  | number
  | {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };

/**
 * Returns a bounding box that chooses the largest dimension from the centroid and uses that for every dimension
 * Shouldn't return a bounding box that can't show the whole feature on the screen at once
 * @param feature The feature you want a bounding box for
 * @param scale The Scale factor
 * @returns  The boudning box of the feature scaled up via factor of "scale"
 */
export function getMaximizedBoundingBox(
  feature: Feature<any, any>,
  mapWidth: number,
  mapHeight: number,
  scale = 1,
) {
  const scaled = transformScale(feature, scale);

  const aspectRatio = mapWidth / mapHeight;

  const center = centroid(feature);
  const centerX = center.geometry.coordinates[0];
  const centerY = center.geometry.coordinates[1];

  const [minX, minY, maxX, maxY] = bbox(scaled);
  const xDistance = Math.max(
    dist([minX, centerY], center, { units: 'meters' }),
    dist([maxX, centerY], center, { units: 'meters' }),
  );

  const yDistance = Math.max(
    dist([centerX, minY], center, { units: 'meters' }),
    dist([centerX, maxY], center, { units: 'meters' }),
  );

  // Get the largest dimension from the center of the geometry and use that to draw the bounding box
  const maxDistanceMeters = Math.max(xDistance, yDistance); // IN METERS

  const w = transformTranslate(center, maxDistanceMeters * aspectRatio, 270, {
    units: 'meters',
  });
  const s = transformTranslate(center, maxDistanceMeters, 180, {
    units: 'meters',
  });
  const e = transformTranslate(center, maxDistanceMeters * aspectRatio, 90, {
    units: 'meters',
  });
  const n = transformTranslate(center, maxDistanceMeters, 0, {
    units: 'meters',
  });

  const sw = new LngLat(
    w.geometry.coordinates[0], // Lng from most west
    s.geometry.coordinates[1], // Lat from most south
  );
  const ne = new LngLat(
    e.geometry.coordinates[0], // Lng from most east
    n.geometry.coordinates[1], // Lat from most north
  );

  const bounds = new LngLatBounds(sw, ne);

  return bounds;
}

// Only pass the type of Geometry to this function, we don't need anything else but the geometry to zoom in on it.
function zoomToBounds(
  map: Map,
  geometry: Geometry,
  isPanelOpen = true,
  padding: Padding = {
    bottom: 200,
    left: isPanelOpen ? 400 : 200,
    right: 200,
    top: 200,
  },
  disableAnimation = false,
) {
  if (map) {
    if (geometry.type === 'Point') {
      flyToLocation(map, geometry.coordinates as [number, number], 13.5);
    } else if (
      geometry.type === 'Polygon'
      || geometry.type === 'MultiPolygon'
    ) {
      const [minX, minY, maxX, maxY] = bbox(geometry);
      const nw = new LngLat(minX, minY);
      const se = new LngLat(maxX, maxY);

      const bounds = new LngLatBounds(nw, se);

      map.fitBounds(bounds, {
        padding,
        ...(disableAnimation && { duration: 0 }),
      });
    }
  }
}

export default zoomToBounds;
