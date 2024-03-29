---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/tasks/identify-features/
title: L.esri.IdentifyFeatures
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.esri.Task`]({{assets}}api-reference/tasks/task.html)

`L.esri.IdentifyFeatures` is an abstraction for the Identify API found in Map Services. It provides a chainable API for building request parameters and executing the request.

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
            <code>L.esri.identifyFeatures({{{param 'MapService' 'endpoint' '../../api-reference/services/map-service.html'}}})</code><br><br>
            <code>L.esri.identifyFeatures({{{param 'Object' 'options'}}})</code><br></td>
            <td>Accepts either an `options` object or an instance of <a href="{{assets}}/api-reference/services/image-service.html"></a>.</td>
        </tr>
    </tbody>
</table>

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | `String` | `''` | URL of the ArcGIS service you would like to consume. |
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
            <td><code>on({{{param 'Map' 'map' 'https://leafletjs.com/reference.html#map'}}})</code></td>
            <td><code>this</code></td>
            <td>The map to identify features on.</td>
        </tr>
        <tr>
            <td><code>at({{{param 'Geometry' 'geometry'}}})</code></td>
            <td><code>this</code></td>
            <td>Identifies features at a given [LatLng](https://leafletjs.com/reference.html#latlng). `geometry` can also be an instance of [`L.Marker`](https://leafletjs.com/reference.html#marker), [`L.Polygon`](https://leafletjs.com/reference.html#polygon), [`L.Polyline`](https://leafletjs.com/reference.html#polyline), [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds), [`L.GeoJSON`](https://leafletjs.com/reference.html#geojson) or a valid [GeoJSON](https://tools.ietf.org/html/rfc7946) object literal.</td>
        </tr>
        <tr>
            <td><code>layerDef({{{param 'Integer' 'id'}}}, {{{param 'String' 'where'}}})</code></td>
            <td><code>this</code></td>
            <td>Add a layer definition to the query.</td>
        </tr>
        <tr>
            <td><code>between({{{param 'Date' 'from'}}}, {{{param 'Date' 'to'}}})</code></td>
            <td><code>this</code></td>
            <td>Identifies features within a given time range.</td>
        </tr>
        <tr>
            <td><code>layers({{{param 'String' 'layers'}}})</code></td>
            <td><code>this</code></td>
            <td>
              By default, all features will be identified, but it is possible to specify both an alternative strategy and array of individual layers.  See the REST API [documentation](https://developers.arcgis.com/rest/services-reference/identify-map-service-.htm) for more information about valid combinations.<br>
              ex: `.layers('all:0')`.
            </td>
        </tr>
        <tr>
            <td><code>precision({{{param 'Integer' 'precision'}}})</code></td>
            <td><code>this</code></td>
            <td>Used to cap the number of decimal points included in output geometries.</td>
        </tr>
        <tr>
            <td><code>tolerance({{{param 'Integer' 'precision'}}})</code></td>
            <td><code>this</code></td>
            <td>Buffer the identify area by a given number of screen pixels.</td>
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
            <td><code>format({{{param 'Boolean' 'formatResponse'}}})</code></td>
            <td><code>this</code></td>
            <td>Use <code>false</code> to ensure that the server returns unformatted feature attributes.<br><small>Only available for ArcGIS Server 10.5+.</small></td>
        </tr>
        <tr>
            <td><code>token({{{param 'String' 'token'}}})</code></td>
            <td><code>this</code></td>
            <td>Adds a token to this request if the service requires authentication. Will be added automatically if used with a service.</td>
        </tr>
        <tr>
            <td><code>run({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>Executes the identify request with the current parameters, identified features will be passed to <code>callback</code> as a <a href="https://tools.ietf.org/html/rfc7946#section-3.3">GeoJSON FeatureCollection</a>. Accepts an optional function context</td>
        </tr>
    </tbody>
</table>

### Example

```js
var map = new L.Map('map').setView([45.543, -122.621], 5);

L.esri.identifyFeatures({
  url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer'
})
  .on(map)
  .at([45.543, -122.621])
  .layers('visible:1')
  .run(function (error, featureCollection, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('UTC Offset: ' + featureCollection.features[0].properties.ZONE);
  });
```
