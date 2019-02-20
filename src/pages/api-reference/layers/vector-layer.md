---
title: L.esri.Vector.Layer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Layer`](http://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#layer)

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


##### Custom Vector Tile Services

Whether you've made a small tweak to one of Esri's hosted vector basemaps or published your own vector tile service from scratch you can draw the layer in Esri Leaflet by referencing the item's [`id`](http://www.arcgis.com/home/item.html?id=bd505ce3efff479bb4e87b182f180159).

> See this blog for more information: https://blogs.esri.com/esri/arcgis/2015/11/19/how-to-customize-esri-vector-basemaps/

### Options

`L.esri.Vector.Layer` accepts all [`L.Layer`](http://leafletjs.com/reference-1.0.0.html#layer) options.

### Methods

`L.esri.Vector.Layer` inherits all methods from [`L.Layer`](http://leafletjs.com/reference-1.0.0.html#layer).

### Example

```xml
<script src="./esri-leaflet-vector.js"></script>
```

```js
var map = L.map('map').setView([37.75,-122.45], 12);
L.esri.Vector.layer('bd505ce3efff479bb4e87b182f180159').addTo(map);
```
