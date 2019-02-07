---
title: L.esri.Vector.Basemap
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Layer`](http://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#layer)

`L.esri.Vector.Basemap` uses an [experimental plugin](https://github.com/Esri/esri-leaflet-vector) to display [`v1`](https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/mapping/whats-new-in-esri-vector-basemaps-december-2017/) Esri hosted vector basemaps and attribute data providers appropriately. The [Terms of Use](https://github.com/esri/esri-leaflet#terms) for Esri hosted services apply to *all* Leaflet applications.

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
            <td><code class="nobr">L.esri.Vector.basemap({{{param 'String' 'key'}}}, , {{{param 'Object' 'options'}}})</code></td>
            <td><code>key</code> refers to the specific basemap you'd like to add.
        </tr>
    </tbody>
</table>


##### Vector Basemaps

Worldwide coverage at a variety of zoom levels.

* `Streets`
* `StreetsNight`
* `StreetsRelief`
* `Navigation`
* `DarkGray`
* `Gray`
* `Topographic`
* `Hybrid`
* `OpenStreetMap` (added in `2.0.0`)
* `Nova`
* `ChartedTerritory` (added in `2.0.2`)
* `ColoredPencil`
* `Newspaper` (added in `1.0.2`)
* `MidCentury` (added in `1.0.2`)
* `Spring` (added in `1.0.2`)
* `HumanGeography`
* `HumanGeographyDetail`
* `DarkHumanGeography`
* `DarkHumanGeographyDetail` (added in `2.0.2`)

### Options

`L.esri.Vector.Basemap` accepts all [`L.Layer`](http://leafletjs.com/reference-1.0.0.html#layer) options.


### Methods

`L.esri.Vector.Basemap` inherits all methods from [`L.Layer`](http://leafletjs.com/reference-1.0.0.html#layer).

### Example
```xml
<script src="./esri-leaflet-vector.js"></script>
```

```js
var map = L.map('map').setView([37.75,-122.45], 12);
L.esri.Vector.basemap("Newspaper").addTo(map);
```
