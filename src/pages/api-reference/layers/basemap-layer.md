---
title: L.esri.BasemapLayer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.TileLayer`](http://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#tilelayer)

`L.esri.basemapLayer` is used to display Esri hosted basemaps and attributes data providers appropriately. The [Terms of Use](https://github.com/esri/esri-leaflet#terms) for Esri hosted services apply to *all* Leaflet applications.

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
            <td><code class="nobr">L.esri.basemapLayer({{{param 'String' 'key'}}}, {{{param 'Object' 'options'}}})</code></td>
            <td><code>key</code> refers to the specific basemap you'd like to add. The <code>options</code> parameter can accept the same [options](http://leafletjs.com/reference.html#tilelayer) as `L.TileLayer`.</td>
        </tr>
    </tbody>
</table>


##### Basemaps

These maps have worldwide coverage at a variety of zoom levels.

* `Streets`
* `Topographic`
* `NationalGeographic`
* `Oceans`
* `Gray`
* `DarkGray`
* `Imagery`
* `ImageryClarity` (added in 2.1.3)
* `ShadedRelief`
* `Terrain`
* `USATopo` (added in 2.0.0)

##### Optional Labels

These are optional layers that add extra text labels to the basemaps.

* `OceansLabels` - Labels to pair with the `Oceans` basemap
* `GrayLabels` - Labels to pair with the `Gray` basemap
* `DarkGrayLabels` - Labels to pair with the `DarkGray` basemap
* `ImageryLabels` - Labels including political boundaries to pair with the `Imagery` basemap
* `ImageryTransportation` - Street map labels for pairing with the `Imagery` basemap
* `ShadedReliefLabels` - Labels for pairing with the `ShadedRelief` base map
* `TerrainLabels` - Labels for pairing with the `Terrain` base map

### Options

`L.esri.basemapLayer` also accepts all [`L.TileLayer`](http://leafletjs.com/reference.html#tilelayer-options) options.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `token` | `String` | `null` | Will use this token to authenticate all calls to the service. |

### Methods

`L.esri.BasemapLayer` inherits all methods from [`L.TileLayer`](http://leafletjs.com/reference.html#tilelayer).

### Events

`L.esri.TiledMapLayer` fires all  [`L.TileLayer`](http://leafletjs.com/reference.html#tilelayer) events.

### Example

```js
var map = L.map('map').setView([37.75,-122.45], 12);

L.esri.basemapLayer("Topographic").addTo(map);
```
