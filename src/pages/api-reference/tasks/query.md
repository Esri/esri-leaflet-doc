---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/tasks/query/
title: L.esri.Query
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.esri.Task`]({{assets}}api-reference/tasks/task.html)

`L.esri.Query` is an abstraction for the query API included in Feature Layers and Image Services. It provides a chainable API for building request parameters and executing queries.

**Note** Depending on the type of service you are querying (Feature Layer, Map Service, Image Service) and the version of ArcGIS Server that hosts the service some of these options may not be available.

### Constructor

<table>
    <thead>
        <tr>
            <th>Constructor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
            <code>L.esri.query({{{param 'Object' 'options'}}})</code><br><br>
            <code>L.esri.query({{{param 'FeatureLayerService' 'endpoint' '../../api-reference/services/feature-layer-service.html'}}})</code><br><br>
            <code>L.esri.query({{{param 'MapService' 'endpoint' '../../api-reference/services/map-service.html'}}})</code><br><br>
            <code>L.esri.query({{{param 'ImageService' 'endpoint' '../../api-reference/services/image-service.html'}}})</code>
            </td>
            <td>Accepts either an `options` object or an instance of <a href="{{assets}}/api-reference/services/map-service.html">MapService</a>, <a href="{{assets}}/api-reference/services/feature-layer-service.html">FeatureLayerService</a> or <a href="{{assets}}/api-reference/services/image-service.html">ImageService</a>.</td>
        </tr>
    </tbody>
</table>

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | `String` | `''` | URL of the ArcGIS Server or ArcGIS Online service you would like to consume. |
| `proxy` | `String` | `false` | URL of an [ArcGIS API for JavaScript proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html) or [ArcGIS Resource Proxy](https://github.com/Esri/resource-proxy) to use for proxying POST requests. |
| `useCors` | `Boolean` | `true` | If this task should use CORS when making GET requests. |

### Methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Returns</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>within({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features from the service within (fully contained by) the passed geometry object. `geometry` can be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLng`](https://leafletjs.com/reference.html#latlng), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) and [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson). It can also accept valid GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2), [Polyline](https://tools.ietf.org/html/rfc7946#section-3.1.4), [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) objects and GeoJSON [Feature objects](https://tools.ietf.org/html/rfc7946#section-3.2) containing Point, Polyline, Polygon.</td>
        </tr>
        <tr>
            <td><code>contains({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features from the service that fully contain the passed geometry object. `geometry` can be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLng`](https://leafletjs.com/reference.html#latlng), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) and [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson). It can also accept valid GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2), [Polyline](https://tools.ietf.org/html/rfc7946#section-3.1.4), [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) objects and GeoJSON [Feature objects](https://tools.ietf.org/html/rfc7946#section-3.2) containing Point, Polyline, Polygon.</td>
        </tr>
        <tr>
            <td><code>intersects({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features from the service that intersect (touch anywhere) the passed geometry object. `geometry` can be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLng`](https://leafletjs.com/reference.html#latlng), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) and [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson). It can also accept valid GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2), [Polyline](https://tools.ietf.org/html/rfc7946#section-3.1.4), [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) objects and GeoJSON [Feature objects](https://tools.ietf.org/html/rfc7946#section-3.2) containing Point, Polyline, Polygon.</td>
        </tr>
        <tr>
            <td><code>bboxIntersects({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features from the service that have a bounding box that intersects the bounding box of the passed geometry object. `geometry` can be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLng`](https://leafletjs.com/reference.html#latlng), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) and [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson). It can also accept valid GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2), [Polyline](https://tools.ietf.org/html/rfc7946#section-3.1.4), [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) objects and GeoJSON [Feature objects](https://tools.ietf.org/html/rfc7946#section-3.2) containing Point, Polyline, Polygon.</td>
        </tr>
        <tr>
            <td><code>overlaps({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features from the service that overlap (touch but are not fully contained by) the passed geometry object. `geometry` can be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLng`](https://leafletjs.com/reference.html#latlng), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) and [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson). It can also accept valid GeoJSON [Point](https://tools.ietf.org/html/rfc7946#section-3.1.2), [Polyline](https://tools.ietf.org/html/rfc7946#section-3.1.4), [Polygon](https://tools.ietf.org/html/rfc7946#section-3.1.6) objects and GeoJSON [Feature objects](https://tools.ietf.org/html/rfc7946#section-3.2) containing Point, Polyline, Polygon.</td>
        </tr>
        <tr>
            <td><code>nearby({{{param 'LatLng' 'latlng' 'https://leafletjs.com/reference.html#latlng'}}}, {{{param 'Integer' 'distance'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features a given distance in meters around a <a href="https://leafletjs.com/reference.html#latlng">LatLng</a>. <br><small>Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3+ that include the capability <code>supportsQueryWithDistance</code>.</small></td>
        </tr>
        <tr>
            <td><code>where({{{param 'String' 'where'}}})</code></td>
            <td><code>this</code></td>
            <td>Adds a `where` clause to the query.  String values should be denoted using single quotes ie: `query.where("FIELDNAME = 'field value'");` More info about valid SQL can be found <a href="https://desktop.arcgis.com/en/arcmap/latest/map/working-with-layers/sql-reference-for-query-expressions-used-in-arcgis.htm">here</a>.</td>
        </tr>
        <tr>
            <td><code>offset({{{param 'Integer' 'offset'}}})</code></td>
            <td><code>this</code></td>
            <td>Define the offset of the results, when combined with `limit` can be used for paging. <br><small>Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3+.</small></td>
        </tr>
        <tr>
            <td><code>limit({{{param 'Integer' 'limit'}}})</code></td>
            <td><code>this</code></td>
            <td>Limit the number of results returned by this query, when combined with `offset` can be used for paging. <br><small>Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.</small></td>
        </tr>
        <tr>
            <td><code>between({{{param 'Date' 'from'}}}, {{{param 'Date' 'to'}}})</code></td>
            <td><code>this</code></td>
            <td>Queries features within a given time range. <small>Only available for Layers/Services with `timeInfo` in their metadata.</small></td>
        </tr>
        <tr>
            <td><code>fields({{{param 'Array' 'fields'}}} or {{{param 'String' 'fields'}}})</code></td>
            <td><code>this</code></td>
            <td>An array of associated fields to request for each feature.</td>
        </tr>
        <tr>
            <td><code>returnGeometry({{{param 'Boolean' 'returnGeometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Return geometry with results. Default is `true`.</td>
        </tr>
        <tr>
            <td><code>simplify({{{param 'Map' 'map' 'https://leafletjs.com/reference.html#map'}}},  {{{param 'Number' 'factor'}}})</code></td>
            <td><code>this</code></td>
            <td>Simplify the geometries of the output features for the current map view. the <code>factor</code> parameter controls the amount of simplification between 0 (no simplification) and 1 (the most basic shape possible).</td>
        </tr>
        <tr>
            <td><code>orderBy({{{param 'String' 'fieldName'}}}, {{{param 'String' 'order'}}})</code></td>
            <td><code>this</code></td>
            <td>Sort output features using values from an individual field. `"ASC"` (ascending) is the default sort order, but `"DESC"` can be passed as an alternative.  This method can be called more than once to apply advanced sorting.</td>
        </tr>
        <tr>
            <td><code>featureIds({{{param 'Array' 'ids'}}})</code></td>
            <td><code>this</code></td>
            <td>Return only specific feature IDs if they match other query parameters.</td>
        </tr>
        <tr>
            <td><code>precision({{{param 'Integer' 'precision'}}})</code></td>
            <td><code>this</code></td>
            <td>Return only this many decimal points of precision in the output geometries.</td>
        </tr>
        <tr>
            <td><code>token({{{param 'String' 'token'}}})</code></td>
            <td><code>this</code></td>
            <td>Adds a token to this request if the service requires authentication. Will be added automatically if used with a service.</td>
        </tr>
        <tr>
            <td><code>layer({{{param 'String or Integer' 'layer'}}})</code></td>
            <td><code>this</code></td>
            <td>Used to select which layer inside a Map Service to perform the query on. <br><small>Only available for Map Services.</small></td>
        </tr>
        <tr>
            <td><code>pixelSize({{{param 'Point' 'point' 'https://leafletjs.com/reference.html#point'}}})</code></td>
            <td><code>this</code></td>
            <td>Override the default pixelSize when querying an Image Service. <br><small>Only available for Image Services.</small></td>
        </tr>
        <tr>
            <td><code>transform({{{param 'Number' 'Number'}}})</code></td>
            <td><code>this</code></td>
            <td>The WKID of a [datum transformation](https://developers.arcgis.com/rest/services-reference/datum-transformations.htm) for the server to apply when reprojecting output features.<br><small>Only available for ArcGIS Server 10.5+.</small></td>
        </tr>
        <tr>
            <td><code>distinct()</code></td>
            <td><code>this</code></td>
            <td>Ensures that no geometry or duplicate field values will be returned in the subsequent request.</td>
        </tr>
        <tr>
            <td><code>returnM({{{param 'Boolean' 'returnM'}}})</code></td>
            <td><code>this</code></td>
            <td>Return geometry with four dimensional measure values in results.</td>
        </tr>
        <tr>
            <td><code>run({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>Executes the query request with the current parameters, features will be passed to <code>callback</code> as a <a href="https://tools.ietf.org/html/rfc7946#section-3.3">GeoJSON FeatureCollection</a>. Accepts an optional function context.</td>
        </tr>
        <tr>
            <td><code>count({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>Executes the query request with the current parameters, passing only the number of features matching the query to callback as an <code>Integer</code>. Accepts an optional function context.</td>
        </tr>
        <tr>
            <td><code>ids({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>Executes the query request with the current parameters, passing only an array of the feature ids matching the query to callback<code>callback</code>. Accepts an optional function context.</td>
        </tr>
        <tr>
            <td><code>bounds({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>Executes the query request with the current parameters, passing only the <a href="https://leafletjs.com/reference.html#latlngbounds"><code>LatLngBounds</code></a> of all features matching the query in the <code>callback</code>. Accepts an optional function context.  <small>Only available for Feature Layers hosted on ArcGIS Online or ArcGIS Server 10.3.1.</small></td>
        </tr>
    </tbody>
</table>

### Examples

##### Finding features with map bounds

```js
var southWest = L.latLng(45.51, -122.70);
var northEast = L.latLng(45.52, -122.64);
var bounds = L.latLngBounds(southWest, northEast);

var query = L.esri.query({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0'
});

query.within(bounds);

query.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Found ' + featureCollection.features.length + ' features');
});
```

##### Finding the bounds of all features

```js
var map = L.map('map').setView([41.64, -53.70], 3);
L.esri.basemapLayer('Gray').addTo(map);

var query = L.esri.query({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0'
});

query.bounds(function (error, latLngBounds, response) {
  if (error) {
    console.log(error);
    return;
  }
  map.fitBounds(latLngBounds);
});
```

##### Querying features near a latlng

```js
var latlng = L.latLng(45.51, -122.70);

var query = L.esri.query({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0'
});

query.nearby(latlng, 500);

query.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Found ' + featureCollection.features.length + ' features');
});
```

##### Combining multiple options

```js
var latlng = L.latLng(45.51, -122.70);

var query = L.esri.query({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0'
});

query.nearby(latlng, 2000).where("direction='East'").orderBy('stop_id', 'ASC');

query.count(function (error, count, response) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Found ' + count + ' features');
});

query.ids(function (error, ids, response) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(ids.join(', ') + 'match the provided parameters');
});
```

##### Getting the bounds of the query result

```js
var map = L.map('map').setView([41.64, -53.70], 3);
L.esri.basemapLayer('Gray').addTo(map);

var query = L.esri.query({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0'
});

query.where("zone_id='B'").bounds(function (error, latLngBounds, response) {
  if (error) {
    console.log(error);
    return;
  }
  map.fitBounds(latLngBounds);
});
```
