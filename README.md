# Acres Mapbox Utils
Acres Mapbox Utils is a typescript library for dealing with mapbox-gl and geojson

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install) to install acres-mapbox-utils.

```bash
npm i acres-mapbox-utils
```

```bash
yarn add acres-mapbox-utils
```
<br/>

# Usage

## General Geojson Functions
### geoCompletelyContains
 Return if a Geometry completely contains another or not. Takes two params; `containers`: The container that we are checking if it completely contains the second argument and `check`: The Geometry that we are checking to see if is completely contained by the first argument and returns `True` if the container COMPLETELY contains the second argument.
 

```javascript
import { geoCompletelyContains } from 'acres-mapbox-utils'

const containers: Geometry[] = [
    ...
] 

const check: Geometry = {
    ...
}

// returns boolean
const result = geoCompletelyContains(containers, check)
```
</br>

### geoCompletelyContainsMany
 Return if a Geometry completely contains another or not. Takes two params; `containers`: The container that we are checking if it completely contains the second argument and `check`: The Geometry that we are checking to see if is completely contained by the first argument and returns `True` if the container COMPLETELY contains EVERY geometry in the second argument.
 

```javascript
import { geoCompletelyContainsMany } from 'acres-mapbox-utils'

const containers: Geometry[] = [
    ...
] 

const check: Geometry[] = {
    ...
}

// returns boolean
const result = geoCompletelyContainsMany(containers, check)
```
</br>

### multiPolygonGeoToPolygonGeos
Converts a multipolygon geometry to an array of polygon geometries and returns The array of polygons that made up the multi polygon.

 

```javascript
import { multiPolygonGeoToPolygonGeos } from 'acres-mapbox-utils'

const multiPolygon: Geometry = [
    type: 'MultiPolygon',
    ...
] 

// returns Geometry[]
const result = multiPolygonGeoToPolygonGeos(multiPolygon)
```
</br>

### Centroid
Returns the centroid of the polygon (May appear outside polygon)
```javascript
import { centroid } from 'acres-mapbox-utils'

const geometry: Geometry = {
    ...
}

//returns point geometry
const result = centroid(geometry)
```
<br/>

### convertPolygon
Converts a polygon into a multi-polygon. Or an array of features into an array of multi-polygons

```javascript
import { convertPolygon } from 'acres-mapbox-utils'

const feature: Feature = {
    ...
}

// returns feature with multi-polygon
const result = convertPolygon(feature)
```
</br>

### polyLabel
based off this [package](https://www.npmjs.com/package/polylabel);
A fast algorithm for finding polygon pole of inaccessibility,
the most distant internal point from the polygon outline (not to be confused with centroid),
implemented as a JavaScript library. Useful for optimal placement of a text label on a polygon.
```javascript
import { findPolylabel } from 'acres-mapbox-utils'

const feature: Feature = {
    ...
}

//returns pole of inaccessibility coordinate in [x, y] format.
const result = findPolylabel(feature)

```
<br/>


### getAcres
returns acres of a feature

```javascript
import { getAcres } from 'acres-mapbox-utils'

const feature: Feature = {
    ...
}

// returns acres as number
const result = getAcres(feature)
```
<br/>

### getTotalAcres
returns acreage of all the features

```javascript
import { getTotalAcres } from 'acres-mapbox-utils'

const features: Feature[] = [
  {
    ...
  }
]

// returns acres as number
const result = getTotalAcres(features)
```
<br/>

### multiUnion
Combines an array of features into a single feature (If possible) Will need to keep an eye on [@turf/union](https://www.npmjs.com/package/@turf/union) as they are changing union into a feature collection instead of two polygons
```javascript
import { multiUnion } from 'acres-mapbox-utils'

const feature1: Feature = {
    ...
}

const feature2: Feature = {
    ...
}

// returns single feature
const result = multiUnion([feature1, feature2])
```
</br>

## General [Mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/) Functions
all mapbox functions takes a mapbox object [look here](https://docs.mapbox.com/mapbox-gl-js/api/map/)
### addLayers
Takes a mapbox object and an Array of [AnyLayer](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/), loops through each layer and if the layer/layer's source already exists it will remove it and add the layers again.
Able to pass a priorityLayers function to move layers to desired position.
```javascript
import { addLayers } from 'acres-mapbox-utils'

function moveUpPriorityLayers(map: Map) {
  priorityLayers.forEach((layer) => {
    if (map.getLayer(layer)) {
      map.moveLayer(layer);
    }
  });
}

const layer: AnyLayer = {
    ...
}

addLayer(map, [layer], undefined, moveUpPriorityLayers)
```
</br>

### flyToLocation
Takes a mapbox object and cords in [x,y] format; Optional duration and zoom level
```javascript
import { flyToLocation } from 'acres-mapbox-utils'

flyToLocation(map, [0, 0])
```
</br>

### getGeoJSONSource
Gets a source from MapBox (If available), and returns the source as a GeoJSONSource
```javascript
import { getGeoJSONSource } from 'acres-mapbox-utils'

const source = getGeoJSONSource(map, 'random-source')
```
</br>

### getUniqueFeatures
Given an array of MapboxGeoJSONFeature it will return a unique array of features
```javascript
import { getUniqueFeatures } from 'acres-mapbox-utils'

const features[] = [
 {
   id: 1,
   ...
 }, 
 {
  id: 1,
  ...
 }
]

// returns unique feature
const result = getUniqueFeatures(features)
```
</br>

### isLayerActive
returns boolean if layer with given ID exists
```javascript
import { isLayerActive } from 'acres-mapbox-utils'

// returns boolean
const result = isLayerActive(map, layerId)
```
</br>

### removeLayers
given an array of AnyLayers it will loop through and remove layer
```javascript
import { removeLayers } from 'acres-mapbox-utils'

const layers: AnyLayers[] = [
    {
      ...  
    }
]

removeLayers(map, layers)
```

### toggleVisibility
given an array of AnyLayers or Layer Ids and active boolean the layer will toggle between visible and not
```javascript
import { toggleVisibility } from 'acres-mapbox-utils'

const layers: AnyLayers[] = [
    {
      ...  
    }
]

toggleVisibility(map, layers, true)
```

### zoomToBounds
Zooms to bounding box of the geometry
```javascript
import { zoomToBounds } from 'acres-mapbox-utils'

const geometry: Geometry = {
    ...
}

zoomToBounds(map, geometry, padding)

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)