---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/services/map-service/
title: L.esri.MapService
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.esri.Service`]({{assets}}api-reference/services/service.html)

`L.esri.MapService` is an abstraction for interacting with Map Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify published features.

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
            <td><code class="nobr">L.esri.mapService({{{param 'Object' 'options'}}})</code></td>
            <td><code>options</code> for configuring the ArcGIS Server or ArcGIS Online map service you would like to consume. <code>Options</code> includes a <code>url</code> parameter which refers to the ArcGIS Server or ArcGIS Online service you would like to consume.</td>
        </tr>
    </tbody>
</table>

### Options

`L.esri.MapService` accepts all [`L.esri.Service`]({{assets}}api-reference/services/service.html) options.

### Events

`L.esri.MapService` fires all  [`L.esri.service`]({{assets}}api-reference/services/service.html) events.

### Methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Returns</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>query()</code></td>
            <td><code>this</code></td>
            <td>
                Returns a new <a href="{{assets}}api-reference/tasks/query.html"><code>L.esri.Query</code></a> object that can be used to query this service.
<pre class="js"><code>mapService.query()
        .layer(0)
        .within(latlngbounds)
        .run(function (error, featureCollection, response) {
          console.log(featureCollection);
        });</code></pre>
            </td>
        </tr>
        <tr>
            <td><code>identify()</code></td>
            <td><code>this</code></td>
            <td>
                Returns a new <a href="{{assets}}api-reference/tasks/identify-features.html"><code>L.esri.IdentifyFeatures</code></a> object that can be used to identify features contained within this service.
<pre class="js"><code>mapService.identify()
        .on(map)
        .at(latlng)
        .run(function (error, featureCollection, response) {
            console.log(featureCollection)
        });</code></pre>
            </td>
        </tr>
        <tr>
            <td><code>find()</code></td>
            <td><code>this</code></td>
            <td>
                Returns a new <a href="{{assets}}api-reference/tasks/find.html"><code>L.esri.Find</code></a> object that can be used to find features by text.
<pre class="js"><code>mapService.find()
        .layers('18')
        .text('Colorado')
        .fields('name')
        .run(function (error, featureCollection, response) {
            console.log(featureCollection)
        });</code></pre>
            </td>
        </tr>

    </tbody>
</table>

### Example

#### Identify task
```js
var map = new L.Map('map').setView([45.543, -122.621], 5);

var service = L.esri.mapService({
  url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/WorldTimeZones/MapServer'
});

service.identify()
  .on(map)
  .at([45.543, -122.621])
  .layers('visible:1')
  .run(function (error, featureCollection, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('UTC Offset: ' + featureCollection.features[0].properties.ZONE);
  });
```

#### Find task

```js
var service = L.esri.mapService({
  url: 'https://services.nationalmap.gov/arcgis/rest/services/govunits/MapServer'
});

service.find()
  .layers('18')
  .text('Colorado')
  .searchFields('GNIS_NAME')
  .run(function (error, featureCollection, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Found GNIS ID: ' + featureCollection.features[0].properties.GNIS_ID + ' for the state of ' + featureCollection.features[0].properties.STATE_NAME);
  });
```
