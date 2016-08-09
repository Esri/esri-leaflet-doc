---
title: Create your first app
description: Learn how to display an ArcGIS Online basemap in Leaflet.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

##### Create a Skeleton HTML Page

Start by copying this skeleton code which outlines the structure of a single page website and save it in your own new `.html` file.

```xml
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

##### Add JavaScript and CSS tags for our app's dependencies

Now that we have a basic `.html` page created, its time to reference some additional code so that we can create our very own mapping app without writing much code.

In order to use helper libraries, we need to ensure that the additional code we depend on is downloaded by the browser each time our own website is viewed.

The easiest option is to point to a CDN where the libraries are already hosted.  Just copy and paste the new `<link>` and `<script>` tags below into your own `.html` file.

```xml
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Leaflet Map with a Basemap</title>  
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

  <!-- lets load Leaflet's .js and .css from CDN-->
  <link rel="stylesheet" href="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css" />
  <script src="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.js"></script>

  <!-- Load Esri Leaflet from CDN.  it has no .css stylesheet of its own, only .js -->
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>
</head>
<body>  
</body>
</html>
```

##### Create a Container for the Map

We are now ready to create a container for our map.  This will be a  `<div>`  element within the  `<body>`  element.  We must provide it with an `id` attribute.  The `id` will be passed into the code that creates the Leaflet map.  We will use an `id` of **map**.

For our map to display, we must set the height and width for this element.  Since we want it to fill the whole page, we'll make sure to remove all margins and padding too.

```xml
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
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>

  <style>
    html,
    body,
    #map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
    <div id="map"></div>
</body>
</html>
```

##### Construct the Map Object

Now its time to write some JavaScript!  This belongs inside a `<script>` tag inside the `<body>`.

Our first step is to create a map object. In our constructor we must provide the `id` of the element containing the map.  In order to set the initial location, we'll specify the latitude and longitude coordinates for the center of the map and the zoom level.

> Its helpful to cross reference help documents to double-check syntax and learn more about what is possible.  Check out the [Leaflet.js documentation](http://leafletjs.com/reference.html#map-usage "Leaflet Map Object") for more information about additional map constructor options.

```xml
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
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>

  <style>

    html,
    body,
    #map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

  </style>

</head>
<body>
    <div id="map"></div>
    <script>
        var map = L.map('map', {
          center: [37.75, -122.23],
          zoom: 10
        });
    </script>
</body>
</html>
```

If we save and refresh our page after this step, we should see a gray background for the map, zoom controls in the top-left and attribution text in the bottom-right.

##### Adding a Basemap from ArcGIS Online

Now it is time to add an ArcGIS Online basemap to our map.  For this we will use the  `L.esri.basemapLayer`  class from the Esri Leaflet plugin.  Please refer to the [API Reference](http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html "ESRI Leaflet Reference") for more information on this class.

Below are a few different basemaps we can use from ArcGIS Online:

- Streets
- Topographic
- Gray
- DarkGray

To select a basemap, we simply pass the corresponding string in the object constructor:

```js
// load Esri's World Streetmap tiles
L.esri.basemapLayer('Streets');
```

In order to display our new layer, we need to add it to our map using Leaflet's `addTo()` method.  We can chain this method directly to the object constructor, or call it in a separate line.  In our sample, we'll use the chaining approach.

```xml
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
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>

  <style>
    html,
    body,
    #map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  </style>

</head>
<body>
    <div id="map"></div>
    <script>
        var map = L.map('map', {
          center: [37.75, -122.23],
          zoom: 10
        });
        var esriStreets = L.esri.basemapLayer('Streets').addTo(map);    
    </script>
</body>
</html>
```

If we save and refresh our map, we should see our basemap load near San Francisco, California.  As you pan and zoom, notice that the API automatically updates the attribution to give credit to individual data providers in different areas.
