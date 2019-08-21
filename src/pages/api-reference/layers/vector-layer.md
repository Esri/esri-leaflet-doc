---
title: L.esri.Vector.Layer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Layer`](https://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#layer)

`L.esri.Vector.Layer` uses an [experimental plugin](https://github.com/Esri/esri-leaflet-vector) to display vector tile services and attribute data providers appropriately. The [Terms of Use](https://github.com/esri/esri-leaflet#terms) for Esri hosted services apply to *all* Leaflet applications.

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
            <td><code class="nobr">L.esri.Vector.layer({{{param 'String' 'id'}}}, , {{{param 'Object' 'options'}}})</code></td>
            <td><code>key</code> refers to the specific vector tile layer you'd like to add.
        </tr>
    </tbody>
</table>


##### Hosted Vector Basemaps

Esri has designed and shared many vector basemaps in [ArcGIS Online](https://www.arcgis.com/home/group.html?id=30de8da907d240a0bccd5ad3ff25ef4a&view=list&start=1&focus=layers#content). Basemaps with "Local Language" in the name provide support for local languages at large scales.

> Disclaimer: In Esri Leaflet, only [one vector tile source](https://github.com/esri/esri-leaflet-vector#disclaimer) can be drawn at a time.

##### Custom Vector Tiles

The [ArcGIS Vector Tile Style Editor](https://developers.arcgis.com/vector-tile-style-editor/) can be used to customize any of Esri's hosted vector basemaps without duplicating the data behind it. Whether you've made a [small tweak](https://www.esri.com/arcgis-blog/products/developers/mapping/design-custom-basemaps-with-the-new-arcgis-vector-tile-style-editor/) to a hosted vector basemap or used ArcGIS Pro to publish a vector tile service with your own data from scratch, you can draw the layer in Esri Leaflet by referencing the item's [`id`](https://www.arcgis.com/home/item.html?id=bd505ce3efff479bb4e87b182f180159).

### Options

`L.esri.Vector.Layer` accepts all [`L.Layer`](https://leafletjs.com/reference-1.0.0.html#layer) options.

### Methods

`L.esri.Vector.Layer` inherits all methods from [`L.Layer`](https://leafletjs.com/reference-1.0.0.html#layer).

### Example

```xml
<script src="./esri-leaflet-vector.js"></script>
```

```js
var map = L.map('map').setView([37.75, -122.45], 12);

L.esri.Vector.layer('bd505ce3efff479bb4e87b182f180159').addTo(map);

// World Navigation Map (Local Language)
// https://www.arcgis.com/home/item.html?id=72be31d1fa6a42fc895d9a3c0fd8aeef
L.esri.Vector.layer('72be31d1fa6a42fc895d9a3c0fd8aeef').addTo(map);
```
