---
title: Download
layout: markdown.hbs
class: no-sidebar
---

# Download

All builds of Esri Leaflet are available for download on [GitHub](https://github.com/Esri/esri-leaflet/releases/).

<a href="https://github.com/Esri/esri-leaflet/releases/tag/v{{siteData.latest_esri_leaflet}}" class="btn">Current Release</a>
<a href="https://github.com/Esri/esri-leaflet/releases/" class="btn">Past Releases</a>

# CDN

#### Esri Leaflet

```xml
<script src="https://unpkg.com/esri-leaflet@{{siteData.latest_esri_leaflet}}/dist/esri-leaflet.js"
    integrity="{{siteData.latest_esri_leaflet_integrity}}"
    crossorigin=""></script>
```

#### Other Plugins

```xml
<!-- Geocoding Control -->
<link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@{{siteData.latest_esri_leaflet_geocoder}}/dist/esri-leaflet-geocoder.css"
    integrity="{{siteData.latest_esri_leaflet_geocoder_css_integrity}}"
    crossorigin="">
<script src="https://unpkg.com/esri-leaflet-geocoder@{{siteData.latest_esri_leaflet_geocoder}}/dist/esri-leaflet-geocoder.js"
    integrity="{{siteData.latest_esri_leaflet_geocoder_integrity}}"
    crossorigin=""></script>

<!-- Vector Tiles -->
<script src="https://unpkg.com/esri-leaflet-vector@{{siteData.latest_esri_leaflet_vector}}/dist/esri-leaflet-vector.js"
    integrity="{{siteData.latest_esri_leaflet_vector_integrity}}"
    crossorigin=""></script>

<!-- Clustered Feature Layer -->
<script src="https://unpkg.com/esri-leaflet-cluster@{{siteData.latest_esri_leaflet_cluster}}/dist/esri-leaflet-cluster.js"
    integrity="{{siteData.latest_esri_leaflet_cluster_integrity}}"
    crossorigin=""></script>

<!-- Heatmap Feature Layer -->
<script src="https://unpkg.com/esri-leaflet-heatmap@{{siteData.latest_esri_leaflet_heatmap}}/dist/esri-leaflet-heatmap.js"
    integrity="{{siteData.latest_esri_leaflet_heatmap_integrity}}"
    crossorigin=""></script>

<!-- Renderers Plugin -->
<script src="https://unpkg.com/esri-leaflet-renderers@{{siteData.latest_esri_leaflet_renderers}}/dist/esri-leaflet-renderers.js"
    integrity="{{siteData.latest_esri_leaflet_renderers_integrity}}"
    crossorigin=""></script>

<!-- Geoprocessing Plugin -->
<script src="https://unpkg.com/esri-leaflet-gp@{{siteData.latest_esri_leaflet_gp}}/dist/esri-leaflet-gp.js"
    integrity="{{siteData.latest_esri_leaflet_gp_integrity}}"
    crossorigin=""></script>
```
# npm

Esri Leaflet is available on [npm](https://www.npmjs.org/package/esri-leaflet) and can be installed with the following command.

```bash
npm install esri-leaflet --save
```

# Bower

Esri Leaflet is available from [Bower](https://bower.io/search/?q=esri-leaflet) as well.

```bash
bower install esri-leaflet
```

### Still using Leaflet `0.7`?

Version `1.0.5` of esri-leaflet is the one for you.
```xml
<script src="https://unpkg.com/esri-leaflet@1.0.5"></script>
```

### Older Hosted Versions
Legacy versions of the API prior to `1.0.0-rc.6` can be found on the Amazon Web Server below.
```xml
<!-- 1.0.0-rc.6 and prior -->
<script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet/1.0.0-rc.6/esri-leaflet.js"></script>
```
