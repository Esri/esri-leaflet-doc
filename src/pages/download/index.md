---
title: Download
layout: markdown.hbs
class: no-sidebar
---

# Download

All builds of Esri Leaflet are available for download on [GitHub](https://github.com/Esri/esri-leaflet/releases/).

<a href="https://github.com/Esri/esri-leaflet/releases/tag/v{{package.version}}" class="btn">Current Release</a>
<a href="https://github.com/Esri/esri-leaflet/releases/" class="btn">Past Releases</a>

# CDN

#### Esri Leaflet

```xml
<script src="https://cdn.jsdelivr.net/leaflet.esri/{{package.version}}/esri-leaflet.js"></script>
```

#### Other Plugins

```xml
<!-- Clustered Feature Layer -->
<script src="https://cdn.jsdelivr.net/leaflet.esri.clustered-feature-layer/2.0.0-beta.1/esri-leaflet-clustered-feature-layer.js"></script>

<!-- Geocoding Control -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.esri.geocoder/2.1.1/esri-leaflet-geocoder.css">
<script src="https://cdn.jsdelivr.net/leaflet.esri.geocoder/2.1.1/esri-leaflet-geocoder.js"></script>

<!-- Renderers Plugin -->
<script src="https://cdn.jsdelivr.net/leaflet.esri.renderers/2.0.2/esri-leaflet-renderers.js"></script>

<!-- Geoprocessing Plugin -->
<script src="https://cdn.jsdelivr.net/leaflet.esri.gp/2.0.2/esri-leaflet-gp.js"></script>
```
# npm

Esri Leaflet is also [available on npm](https://www.npmjs.org/package/esri-leaflet) and can be installed with the following command.

```bash
npm install esri-leaflet --save
```

# Bower

Esri Leaflet is [available on Bower](http://bower.io/search/?q=esri-leaflet) as well.

```bash
bower install esri-leaflet
```

### Still using Leaflet `0.7.x`?

Version `1.0.4` of esri-leaflet is the one for you.
```xml
<script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>
```

### Older Hosted Versions
Legacy versions of the API prior to `1.0.0-rc.6` can be found on the Amazon Web Server below.
```xml
<!-- 1.0.0-rc.6 and prior -->
<script src="http://cdn-geoweb.s3.amazonaws.com/esri-leaflet/1.0.0-rc.6/esri-leaflet.js"></script>
```
