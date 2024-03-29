---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/services/feature-layer-service/
title: L.esri.FeatureLayerService
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.esri.Service`]({{assets}}api-reference/services/service.html)

`L.esri.FeatureLayerService` is an abstraction for interacting with Feature Layers running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query, add, update and remove features from the service.

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
            <td><code class="nobr">L.esri.featureLayerService({{{param 'Object' 'options'}}})</code></td>
            <td><code>options</code> for configuring the ArcGIS Server or ArcGIS Online feature layer you would like to consume. <code>Options</code> include a `url` parameter which refers to the ArcGIS Server or ArcGIS Online service you would like to consume.</td>
        </tr>
    </tbody>
</table>

### Options

`L.esri.FeatureLayerService` accepts all [`L.esri.Service`]({{assets}}api-reference/services/service.html) options.

### Events

`L.esri.FeatureLayerService` fires all  [`L.esri.service`]({{assets}}api-reference/services/service.html) events.

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
                Returns a new <a href="{{assets}}api-reference/tasks/query.html"><code>L.esri.Query</code></a> object that can be used to query this layer.<pre class="js"><code>featureLayer.query()
  .within(latlngbounds)
  .where("Direction = 'WEST'")
  .run(function (error, featureCollection, response) {
    console.log(featureCollection);
  });
</code></pre>
            </td>
        </tr>
        <tr>
            <td><code>addFeature({{{param 'GeoJSON Feature' 'feature' 'https://tools.ietf.org/html/rfc7946#section-3.2'}}}, {{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>
                Adds a new feature to the feature layer. this also adds the feature to the map if creation is successful.
                <ul>
                    <li>Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.</li>
                    <li>Requires the <code>Create</code> capability be enabled on the service. You can check if creation exists by checking the metadata of your service under capabilities.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>updateFeature({{{param 'GeoJSON Feature' 'feature' 'https://tools.ietf.org/html/rfc7946#section-3.2'}}}, {{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>
                Update the provided feature on the Feature Layer. This also updates the feature on the map.
                <ul>
                    <li>Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.</li>
                    <li>Requires the <code>Update</code> capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>deleteFeature({{{param 'String or Integer' 'id'}}}, {{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>
                Remove the feature with the provided id from the feature layer. This will also remove the feature from the map if it exists.
                <ul>
                    <li>Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.</li>
                    <li>Requires the <code>Delete</code> capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>deleteFeatures({{{param 'Array of String or Integers' 'ids'}}}, {{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>
                Removes an array of features with the provided ids from the feature layer. This will also remove the features from the map if they exist.
                <ul>
                    <li>Requires authentication as a user who has permission to edit the service in ArcGIS Online or the user who created the service.</li>
                    <li>Requires the <code>Delete</code> capability be enabled on the service. You can check if this operation exists by checking the metadata of your service under capabilities.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Examples

**Note**: These examples use a public feature service on ArcGIS Online that does not require authentication.

##### Adding Features
```js
var service = L.esri.featureLayerService({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Pubic_Feature_Service/FeatureServer/0'
});

var feature = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [-122, 45]
  },
  properties: {
    name: 'Hello World'
  }
};

service.addFeature(feature, function (error, response) {
  if (error) {
    console.log('error creating feature' + error.message);
  } else {
    console.log('Successfully created feature with id ' + response.objectId);
  }
});
```

##### Updating Features

```js
var service = L.esri.featureLayerService({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Pubic_Feature_Service/FeatureServer/0'
});

var feature = {
  type: 'Feature',
  id: 2,
  geometry: {
    type: 'Point',
    coordinates: [-122, 45]
  },
  properties: {
    name: 'Hi I\'m Feature 2'
  }
};

service.updateFeature(feature, function (error, response) {
  if (error) {
    console.log('error updating feature' + error.message);
  } else {
    console.log('Successfully updated feature ' + feature.id);
  }
});
```

##### Deleting Features

```js
var service = L.esri.featureLayerService({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Pubic_Feature_Service/FeatureServer/0'
});

service.deleteFeature(2, function (error, response) {
  if (error) {
    console.log('error deleting feature' + error.message);
  } else {
    console.log('Successfully deleted feature ' + response.objectId);
  }
});
```

##### Querying Features

```js
var service = L.esri.featureLayerService({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Pubic_Feature_Service/FeatureServer/0'
});

service.query().where("name='Hello World'").run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(featureCollection.features[0].properties.name);
});
```
