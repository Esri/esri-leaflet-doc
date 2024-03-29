---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/layers/tiled-map-layer/
title: L.esri.TiledMapLayer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.TileLayer`](https://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#tilelayer)

Access tiles from ArcGIS Online and ArcGIS Server to visualize and identify features. Copyright text from the service is added to map attribution automatically.

If you have published a Feature Service in ArcGIS Online, it can be used to create a static set of tiles as well. You can find details about that process in the [ArcGIS Online Help](https://doc.arcgis.com/en/arcgis-online/manage-data/publish-tiles.htm).

> Your map service must be published using the [Web Mercator Auxiliary Sphere tiling scheme (WKID 102100/3857)](https://epsg.io/3857) and the default scale options used by Google Maps, Bing Maps and [ArcGIS Online](https://services.arcgisonline.com/arcgis/rest/services). Esri Leaflet will not support any other spatial reference for tile layers.

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
            <td><code class="nobr">L.esri.tiledMapLayer({{{param 'Object' 'options'}}})</code></td>
            <td>The <code>options</code> parameter can accept the same options as <a href="https://leafletjs.com/reference.html#tilelayer"><code>L.tileLayer</code></a>. The only required parameter is <code>url</code>.</td>
        </tr>
    </tbody>
</table>

### Options

`L.esri.TiledMapLayer` also accepts all [`L.TileLayer`](https://leafletjs.com/reference.html#tilelayer-options) options.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
|`url` | `String` | | *Required*: URL of the [Map Service](https://developers.arcgis.com/rest/services-reference/map-service.htm) with a tile cache.
| `zoomOffsetAllowance` | `Number` | `0.1` | If `correctZoomLevels` is enabled this controls the amount of tolerance for the difference at each scale level for remapping tile levels.
| `proxy` | `String` | `false` | URL of an [ArcGIS API for JavaScript proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html) or [ArcGIS Resource Proxy](https://github.com/Esri/resource-proxy) to use for proxying requests. |
| `useCors` | `Boolean` | `true` | Dictates if the service should use CORS when making GET requests. |
| `token` | `String` | `null` | Will use this token to authenticate all calls to the service.

### Methods

`L.esri.TiledMapLayer` inherits all methods from [`L.TileLayer`](https://leafletjs.com/reference.html#tilelayer).

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
            <td><code>authenticate(&lt;String&gt; token)</code></td>
            <td><code>this</code></td>
            <td>Authenticates this service with a new token and runs any pending requests that required a token.</td>
        </tr>
        <tr>
            <td><code>metadata(&lt;Function&gt; callback, &lt;Object&gt; context)</code></td>
            <td><code>this</code></td>
            <td>
                Requests metadata about this Feature Layer. Callback will be called with `error` and `metadata`.
<pre class="js"><code>featureLayer.metadata(function(error, metadata){
  console.log(metadata);
});</code></pre>
            </td>
        </tr>
        <tr>
            <td><code>identify()</code></td>
            <td><code>this</code></td>
            <td>
                Returns a new <a href="{{assets}}api-reference/tasks/identify-features.html"><code>L.esri.services.IdentifyFeatures</code></a> object that can be used to identify features on this layer. Your callback function will be passed a GeoJSON FeatureCollection with the results or an error.
<pre class="js"><code>featureLayer.identify()
  .at(latlng, latlngbounds, 5)
  .run(function(error, featureCollection){
    console.log(featureCollection);
  });</code></pre>
            </td>
        </tr>
    </tbody>
</table>

### Events

`L.esri.TiledMapLayer` fires all  [`L.TileLayer`](https://leafletjs.com/reference.html#tilelayer) events.

### Example

```js
var map = L.map('map').setView([37.7614, -122.3911], 12);

L.esri.tiledMapLayer({
  url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
  maxZoom: 15
}).addTo(map);
```
