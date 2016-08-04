---
title: Create a Basic Map
description: Learn how to set-up a leaflet web map and a basemap from ArcGIS Online.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

## Create a Skeleton HTML Page

We will start by creating the skeleton structure for an HTML page.    

```HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Leaflet Map with a Basemap</title>  
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
</head>
<body>  
</body>
</html>
```

## Add JavaScript and CSS Files to HTML file

Now that we have a basic HTML page created, we must add the JavaScript and CSS files that will allow us to create a web map using Leaflet and the ESRI Leaflet plugins.

The CSS files will be added in the `<head>` element.  For our examples, the JavaScript files will also be added to the `<head>` element.  However, we can also add these at the bottom of the `<body>` element, right before our code for the map.

```HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Leaflet Map with a Basemap</title>  
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
  
  <!-- Load Leaflet from CDN-->
  <link rel="stylesheet" href="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css" />
  <script src="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.js"></script>
  
  <!-- Load Esri Leaflet from CDN -->
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"><script>
  
</head>
<body>  
</body>
</html>
```
## Create a Container for the Map





