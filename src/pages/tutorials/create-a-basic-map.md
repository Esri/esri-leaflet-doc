---
title: Create a Basic Map
description: Learn how to set-up a leaflet web map and a basemap from ArcGIS Online.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

## Create a Skeleton HTML Page

We will start by creating the skeleton structure for an HTML page.

*Should we describe the tags?*


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

The CSS files will be added in the `<head>` element.  For our examples, the JavaScript files will also be added to the  `<head>`  element.  However, we can also add these at the bottom of the  `<body>`  element, right before our code for the map.


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

We are now ready to create a container for our map.  This will be a  `<div>`  element within the  `<body>`  element.  We must provide it with an ID attribute.  The ID will be passed into the code that creates the Leaflet map.  We will use an ID of **map**.


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
    <div id="map"></div>
</body>
</html>
```


## Set Height and Width for the Map

For the map to display, we must set the height and width for the  `<div id="map"></div>`  element.  While there are different units for setting these properties, two common are **pixels** and **percentages**.

*Text about when someone may use pixels vs. percentages?*

**Note:** if you use percentage units, make sure the  `<html>`  and  `<body>`  elements have their height and width properties set.

Usually, styles for the page will be in a seperate stylesheet that is added in the `<head>` element.  However, they can also be added in a  `<style>`  element placed within the  `<head>` .  We will use this approach for our example.  Whatever approach you use, make sure your custom styles are the last to load, as this will prevent other stylesheets from overriding your styles.


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


## Construct the Map Object

Now that we have finished setting up the HTML file, we can begin writing the JavaScript code to create our web map.  We will add a  `<script>`  tag at the bottom of the  `<body>`  element.

In our script, we will construct the map object.  Please refer to the official [Leaflet.js documentation](http://leafletjs.com/reference.html#map-usage "Leaflet Map Object") for the map object.

When constructing our map, we must provide the ID of the html element containg the map, latitude and longitude coordinates for the center of the map, and the initial zoom level.  There are other options we can add as well.

*I'll defer to ESRI on what the center coordinates and zoom level is.  I'll use the example from the* [Quickstart page](http://esri.github.io/esri-leaflet/examples/) *for now.*


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


If we save and refresh our page after this step, we should see a gray background for the map container, zoom controls at the top left of the map, and attribution text at the bottom right of the map.


## Adding a Basemap from ArcGIS Online

Now it is time to add a basemap to our web map.  We will use the ArcGIS Online basemaps.  This step will use the  `L.esri.basemapLayer`  class from the ESRI Leaflet plugin.  Please refer to the [API Reference](http://esri.github.io/esri-leaflet/api-reference/layers/basemap-layer.html "ESRI Leaflet Reference") for more information on this class.


Below are the basemaps we can use from ArcGIS Online:

- Streets
- Topographic
- NationalGeographic
- Oceans
- Gray
- DarkGray
- Imagery
- ShadedRelief
- Terrain
- USATopo (added in 2.0.0)

There are also optional label layers that add text labels to the basemaps:

- OceansLabels - Labels to pair with the Oceans basemap
- GrayLabels - Labels to pair with the Gray basemap
- DarkGrayLabels - Labels to pair with the DarkGray basemap
- ImageryLabels - Labels including political boundaries to pair with the Imagery basemap
- ImageryTransportation - Street map labels for pairing with the Imagery basemap
- ShadedReliefLabels - Labels for pairing with the ShadedRelief base map
- TerrainLabels - Labels for pairing with the Terrain base map


To select a basemap, we simply add a key to the constructor: 

```JavaScript
// add Streets basemap
L.esri.basemapLayer('Streets');
```

The last step is to add the layer to the map using Leaflet's  `addTo()`  method.  We can chain this to our code constructing the basemap, or write it on a seperate line.  We will use the method chaining approach in our example.


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


If we save and refresh our map, we should see the Streets basemap in the area of San Francisco, California.


*Do we want a live demo at the bottom of the tutorial?*