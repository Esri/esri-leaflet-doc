---
title: L.esri.Vector.vectorBasemapLayer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Layer`](https://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#layer)

`L.esri.Vector.vectorBasemapLayer` uses the [`esri-leaflet-vector` plugin](https://github.com/Esri/esri-leaflet-vector) to display Esri hosted vector basemaps—using the Esri Basemap Layer Service API—and attribute data providers appropriately.

### Constructor

**Note:** There are two ways to construct this layer with the required `key` parameter, either with a basemap style enum or an item ID of a custom basemap style.

<table>
    <thead>
        <tr>
            <th>Constructor</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>L.esri.Vector.vectorBasemapLayer({{{param 'String' 'key'}}}, {{{param 'Object' 'options'}}})</code></td>
            <td><code>key</code> refers to either with a basemap style enum or an item ID of a custom basemap style that you'd like to add.
        </tr>
    </tbody>
</table>

##### Vector Basemaps

1. Basemap style enums are formatted with two or three parts and can be used for the `key` constructor parameter:

    * `{Provider}:{Style name}`
    * `{Provider}:{Style name}:{Component}`

  **Please refer to the [complete list of default basemap styles](https://developers.arcgis.com/documentation/mapping-apis-and-location-services/maps/services/basemap-layer-service/#default-basemap-styles).**
  
  Some examples include:

    * `ArcGIS:DarkGray`
    * `ArcGIS:Imagery:Standard`
    * `OSM:Standard`

2. Otherwise, if displaying a custom basemap style, the [item ID of that custom basemap style](https://developers.arcgis.com/documentation/mapping-apis-and-location-services/maps/services/basemap-layer-service/#custom-basemap-styles) is used for the `key` constructor parameter.

### Options

`L.esri.Vector.vectorBasemapLayer` also accepts all [`L.Layer`](https://leafletjs.com/reference.html#layer) options.

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>apikey</code></td>
            <td><code>String</code></td>
            <td>If you pass an <code>apikey</code> in your options it will be included in all requests to the service.</td>
        </tr>
        <tr>
            <td><code>token</code></td>
            <td><code>String</code></td>
            <td>If you pass a <code>token</code> in your options it will be included in all requests to the service.</td>
        </tr>
    </tbody>
</table>

### Methods

`L.esri.Vector.vectorBasemapLayer` inherits all methods from [`L.Layer`](https://leafletjs.com/reference.html#layer).

### Example

Live sample [here](https://esri.github.io/esri-leaflet/examples/vector-basemap.html).

```xml
<script src="./esri-leaflet-vector.js"></script>
```

```js
var map = L.map("map").setView([40.706, -73.926], 14);

L.esri.Vector.vectorBasemapLayer("ArcGIS:Streets", {
    // provide either apikey or token
    apikey: "YOUR-API-KEY"
}).addTo(map);
```
