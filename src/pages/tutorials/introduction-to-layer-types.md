---
title: Introduction to Layer Types
description: Learn how to differentiate between the layer types that make up the ArcGIS platform.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

> Note: Copyright text from ArcGIS services are added to map attribution automatically. The [Terms of Use](https://github.com/esri/esri-leaflet#terms) for Esri hosted services apply to *all* Leaflet applications.

## Feature Layers
A [Feature Layer](http://esri.github.io/esri-leaflet/api-reference/layers/feature-layer.html) involves requesting feature attributes and geometry from ArcGIS Online or ArcGIS Server to display in your web app. Individual features are exposed to the developer as GeoJSON, whether the service fulfilling the request emits the format natively or not.

Feature Layers are great because they contain all the attribute information, this makes things like creating popups really snappy because the client app already has all the information it needs. 

That said, Feature Layers can potentially transfer large amounts of data from the server to the client. For example you wouldn't want to use a Feature Layer if you were drawing draw tax parcels for the whole of the USA. To address this Esri Leaflet provides a few options. By default we only request features within the current map extent.  This allows you to extract a manageable number of a features from a service with lots of data on the back end.

Esri Leaflet provides other mechanisms to optimize performance as well. You can control which attributes are fetched, generalizing geometry before it is downloaded and filter data using SQL clauses. However even after you've optimized your setup there will always be a limit to the amount of features which it makes sense to try and display clientside, this limit depends on the individual service, and the browser being used.

### How to consume Feature Layers from ArcGIS Server
Feature Layers can be created in Esri Leaflet from both `MapServer` or `FeatureServer` services published by ArcGIS Server. To utilise a `MapServer` service you need to specify a particular layer by appending the layer index, eg "ESRI_Population_World/MapServer*/0*".

So for example both of these are valid uses 
```js
// NOTE - The FeatureServer part of this url
L.esri.featureLayer({
	url: '.../ArcGIS/rest/services/BloomfieldHillsMichigan/LandusePlanning/FeatureServer/0'
})

// Note the MapServer part of this url 
// Remember to append a layer index eg '/0'
L.esri.featureLayer({
	url: '.../ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer/0'
})
```

If you want to edit data in the browser then you will need to be consuming a `FeatureServer` service.

### What does the data look like?
When you request a feature layer from an ArcGIS Server the response will look something like 
```js
{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"EPSG:4326"}},
 "features":[
     {"type":"Feature",
     "id":2,
     "geometry":{"type":"Point","coordinates":[-122.647466,45.543523]},
     "properties":{"FID":2,"GEODB_OID":144,"OBJECTID":144,"TREEID":164,"STATUS":"Heritage","SCIENTIFIC":"Platanus x acerifolia","COMMON_NAM":"London planetree","STATEID":"1N1E26AC  12000","ADDRESS":"1728 NE STANTON ST","HEIGHT":82,"SPREAD":85,"CIRCUMFERE":15.44,"DIAMETER":59,"YEAR":1997,"OWNER":"Private, Front Yard","NOTES":"south side between NE 17th Ave and NE 18th Ave"}
     }
  ]
}
```
You can see in the above sample that we have some location information in the `coordinates` array as well as the feature properties in the `properties` object.

## Dynamic Map Layers
A [Dynamic Map Layer](http://esri.github.io/esri-leaflet/api-reference/layers/dynamic-map-layer.html) involves pulling down a representation of your data from an ArcGIS Server instance to your web app, this means an image such as a jpg or a png. Esri-Leaflet then takes care of placing the image on the correct part of the map for you.

The benefit of a Dynamic Map Layer is that only the final representation of the data is sent to the client in the form of an image, this is hugely beneficial when dealing with large datasets with complex geometries. Rather than sending megabytes of data, an image can be sent instead. Dynamic Map Layers are also handy as images are rendered on the fly by the server, this is beneficial if your dataset is constantly changing. 

The downside of a Dynamic Map Layer is that if you require additional information about a feature (such as attribute information to generate a popup) then you're app will request additional information from the server which can be time-consuming. Esri-Leaflet does cover most of the common use cases for these additional requests (such as [generating popups](http://esri.github.io/esri-leaflet/examples/customizing-popups.html)) however you will notice that popups are not as responsive as with a Feature Layer.

### How to consume Dynamic Map Layers from ArcGIS Server
Dynamic Map Layers can be created in Esri-Leaflet from a `MapServer` service published by ArcGIS Server. 
```js
// NOTE - The url contains 'MapServer'
L.esri.dynamicMapLayer({
	url: 'https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer'
})
```

### What does the data look like?
When you request a Dynamic Map Layer from an ArcGIS Server the response might look something like 
![Map tile](https://services.arcgisonline.com/arcgis/rest/directories/arcgisoutput/Specialty/Soil_Survey_Map_MapServer/_ags_map7ec03f83fc184c65b3e98b240810d139.png)
As you can see, it is simply an image!


## Tiled Map Layers
A [Tiled Map Layer](http://esri.github.io/esri-leaflet/api-reference/layers/tiled-map-layer.html) is similar to a Dynamic Map Layer however it involves pulling down a pre-rendered representation of your data from a tile cache in ArcGIS Server.

The benefit of a Tiled Map Layer is that it can respond more quickly than a Dynamic Map Layer as an image has already been rendered and is available on the server. Tile Map Layers are typically used for basemaps.

The downside of a Tiled Map Layer is that it can take up a lot of space on your server as each tile has to be pre-rendered. Your tiles also only represent the state of your data when the tile was created, they don't automatically update to reflect changes to your data.

### How to consume Tiled Map Layers from ArcGIS Server
Tiled Map Layers can be created in Esri-Leaflet from a `MapServer` service published by ArcGIS Server that contains a `Single Fused Map Cache`, you would create the cache when you publish a layer in ArcGIS Server.

```js
// NOTE - When you visit the url you will see information relating to the tile cache
L.esri.tiledMapLayer({
	url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer'
})
```

### What does the data look like?
You can see an example Tiled Map Layer response from ArcGIS Server below. It is simply an image!

![Map tile](http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyBasemap/MapServer/tile/6/146/267)

