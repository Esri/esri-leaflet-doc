---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/options/
title: options
layout: documentation.hbs
---

# L.esri.options

This namespace provides a location for application configuration settings that are peculiar to Esri Leaflet.

#### Properties

| Property | Value | Default | Description |
| --- | --- | --- | --- |
| `attributionWidthOffset` | `Number`| `55` | This plugin automatically truncates text in [Leaflet.Control.Attribution](https://leafletjs.com/reference-1.0.0.html#control-attribution) so that it doesn't overflow into multiple lines.  This value dicates how much horizontal space (in pixels) will be set aside for other controls.

#### Example

```js
// pass in a larger value to make space for a scale bar too
L.esri.options.attributionWidthOffset = 200;

L.map('map').setView([37.79, -122.45], 13);
```
