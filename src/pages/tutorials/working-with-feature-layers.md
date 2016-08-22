---
title: Working with feature layers
description: Learn how to [the content] in Leaflet.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

This tutorial assumes you know how to create a basic Leaflet map.  To learn how to do this, please visit the [Create your first app](http://esri.github.io/esri-leaflet/tutorials/create-your-first-app.html "Create your first app") tutorial.

##### Copy Starter HTML Page

Start by copying this skeleton code which outlines the structure of a single page website and save it in your own new `.html` file.  The code includes a `<script>` that constructs the Leaflet map object and adds a basemap from ArcGIS Online.

```xml
<!doctype html>
<html lang="en">
<head>  
  <meta charset="utf-8">
  <title>Leaflet Map with a Feature Layer</title>  
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
          center: [45.526, -122.667],
          zoom: 13
        });
        
        var esriStreets = L.esri.basemapLayer('Streets').addTo(map);    
    </script>    
</body>
</html>
```

##### Add a Feature Layer to the Map

We will add a REST service using the `L.esri.featureLayer` class from the Esri Leaflet plugin.  This can be either a **Map Service** or **Feature Service**.  You must provide the url for the service.  Below is an example for creating a Feature Layer using both types of services:

```JavaScript
var portlandHeritageTrees = L.esri.featureLayer({url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'});

var someService =  L.esri.featureLayer({url: 'https://subdomain.domain.com/arcgis/rest/services/Name-of-Service/MapServer/0'});
```

> Feel free to pick an actual service for the Map Server.

> Do we want to include a link to the REST API or ArcGIS for Server docs for the service types?

In order to display our new layer, we need to add it to our map using Leaflet's `addTo()` method.  We can chain this method directly to the object constructor, or call it in a separate line.  In our sample, we'll use the chaining approach.

```JavaScript
var portlandHeritageTrees = L.esri.featureLayer({url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'}).addTo(map);
```

If we save and refresh our map, we should see many blue markers on the map, which are the features from the service.  Leaflet is applying a default style to the features.

> Its helpful to cross reference help documents to double-check syntax and learn more about what is possible.  Check out the [Esri Leaflet documentation](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html "Esri Feature Layer") for more information about additional feature layer constructor options.

##### Add Esri Leaflet Renderers Plugin

If we want to use the symbology set when a service was published, we'll need to add the [Esri Leaflet Renderers](https://github.com/Esri/esri-leaflet-renderers "Esri Leaflet Renderers") helper library.  We'll add a `<script>` for this plugin in the `<head>` element on the page.

```xml
<!-- Load Esri Leaflet Renderers from CDN -->
<script src="https://cdn.jsdelivr.net/leaflet.esri.renderers/1.0.1/esri-leaflet-renderers.js"></script>  
```  

If we save and refresh our map, we'll now see the trees displayed as red circles.  It is also possible to define a custom symbology for the features.

> Do we want to provide links to the examples for custom styling?

> http://esri.github.io/esri-leaflet/examples/styling-feature-layer-points.html

> http://esri.github.io/esri-leaflet/examples/styling-feature-layer-polylines.html

> http://esri.github.io/esri-leaflet/examples/styling-feature-layer-polygons.html


##### Add a Popup to Feature Layer

Now we will add a popup to our feature layer.  The popup can contain both static text and dynamic text from the fields in the service.  We'll use the `onEachFeature` method to create the popup.

First, we will create a variable for the popup content, using Leaflet's [Utility Template](http://leafletjs.com/reference.html#util-template 'Leaflet Utility Template').  We place the name of fields from the service in  curly brackets **{ }**, and add `feature.properties` at the end of the `L.Util.template` to access the fields.  Second, we will bind the popup to the feature layer.

```JavaScript
 var portlandHeritageTrees = L.esri.featureLayer({
    url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0',
    onEachFeature: function(feature,layer) {
        var popupContent = L.Util.template('<h3>{COMMON_NAM}</h3><hr /><p>This tree is located at {ADDRESS} and its scientific name is {SCIENTIFIC}.', feature.properties);
        
        layer.bindPopup(popupContent);        
    }
}).addTo(map);
```

If we save and refresh our map, we are able to click on the features and a popup will open.

##### Final HTML File

Here is what the final `html` file should look like for this tutorial:

```xml
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Leaflet Map with a Feature Layer</title>  
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />

  <!-- Load Leaflet from CDN-->
  <link rel="stylesheet" href="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.css" />
  <script src="https://npmcdn.com/leaflet@0.7.7/dist/leaflet.js"></script>

  <!-- Load Esri Leaflet from CDN -->
  <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.4/esri-leaflet.js"></script>
  
  <!-- Load Esri Leaflet Renderers from CDN -->
  <script src="https://cdn.jsdelivr.net/leaflet.esri.renderers/1.0.1/esri-leaflet-renderers.js"></script>  

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
          center: [45.526, -122.667],
          zoom: 13
        });
        
        var esriStreets = L.esri.basemapLayer('Streets').addTo(map);
        
        var portlandHeritageTrees = L.esri.featureLayer({
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0',
            onEachFeature: function(feature,layer) {
                var popupContent = L.Util.template('<h3>{COMMON_NAM}</h3><hr /><p>This tree is located at {ADDRESS} and its scientific name is {SCIENTIFIC}.', feature.properties);
                
                layer.bindPopup(popupContent);        
            }
        }).addTo(map);
    </script>    
</body>
</html>
```

##### Topics left to cover

> remind that services are supported whether you can fetch `f=geojson` or not
> describe gridded queries