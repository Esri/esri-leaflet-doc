---
title: L.esri.Vector.vectorTileLayer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Layer`](https://leafletjs.com/reference.html#layer)

`L.esri.Vector.vectorTileLayer` uses the [`esri-leaflet-vector` plugin](https://github.com/Esri/esri-leaflet-vector) to display vector tile service layers and their styles published from user data.

> Your vector tile service must be published using the [Web Mercator Auxiliary Sphere tiling scheme (WKID 102100/3857)](https://epsg.io/3857) and the default scale options used by Google Maps, Bing Maps and [ArcGIS Online](https://services.arcgisonline.com/arcgis/rest/services). The `esri-leaflet-vector` plugin will not support any other spatial reference for vector tile layers because it relies directly upon mapbox-gl-js v1.

### Constructor

**Note:** There are two ways to construct this layer with the required `key` parameter, either with an item ID or service URL of a hosted vector tile layer.

<table>
    <thead>
        <tr>
            <th>Constructor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>L.esri.Vector.vectorTileLayer({{{param 'String' 'key'}}}, {{{param 'Object' 'options'}}})</code></td>
            <td><code>key</code> refers to the specific item ID or service URL of a hosted vector tile layer you'd like to add.
        </tr>
    </tbody>
</table>

### Options

`L.esri.Vector.vectorTileLayer` accepts all [`L.Layer`](https://leafletjs.com/reference.html#layer) options.

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>apikey</code></td>
            <td><code>String</code></td>
            <td></td>
            <td>If you pass an <code>apikey</code> in your options it will be included in all requests to the service.</td>
        </tr>
        <tr>
            <td><code>token</code></td>
            <td><code>String</code></td>
            <td></td>
            <td>If you pass a <code>token</code> in your options it will be included in all requests to the service.</td>
        </tr>
        <tr>
            <td><code>portalUrl</code></td>
            <td><code>String</code></td>
            <td><code>'https://www.arcgis.com'</code></td>
            <td>Specify the ArcGIS Enterprise base URL if your layer is not hosted on ArcGIS Online.</td>
        </tr>
        <tr>
            <td><code>style</code></td>
            <td><code>Function</code></td>
            <td></td>
            <td>Function that can be used to customize the style. It gets the default style from the service and returns the new style to be used.
<pre>function (style) {
  // make changes to the style object
  // return your style overrides
  return newStyleObj;
}</pre>
            </td>
        </tr>
    </tbody>
</table>

### Methods

`L.esri.Vector.vectorTileLayer` inherits all methods from [`L.Layer`](https://leafletjs.com/reference.html#layer).

### Example

Live sample [at an ArcGIS Developers tutorial page](https://developers.arcgis.com/esri-leaflet/layers/add-a-vector-tile-layer/).

```xml
<script src="./esri-leaflet-vector.js"></script>
```

```js
var map = L.map('map').setView([34.02,-118.805], 13);

// using an item ID of an hosted ArcGIS Online content item
// https://esri.maps.arcgis.com/home/item.html?id=f40326b0dea54330ae39584012807126
L.esri.Vector.vectorTileLayer("f40326b0dea54330ae39584012807126").addTo(map);

// or, using a service URL instead
L.esri.Vector.vectorTileLayer(
    "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Microsoft_Building_Footprints/VectorTileServer"
).addTo(map);
```
