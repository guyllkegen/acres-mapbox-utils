import type { Feature } from 'geojson';
import type { MapboxGeoJSONFeature } from 'mapbox-gl';

function getUniqueFeatures(
  features: MapboxGeoJSONFeature[],
) {
  const uniqueIds = new Set();
  const uniqueFeatures = [] as Feature[];

  features.forEach((feature) => {
    if (feature.properties) {
      const { id } = feature;
      if (!uniqueIds.has(id)) {
        uniqueIds.add(id);
        uniqueFeatures.push(feature);
      }
    }
  });

  return uniqueFeatures;
}

export default getUniqueFeatures;
