---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/services/image-service/
title: L.esri.ImageService
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.esri.Service`]({{assets}}api-reference/services/service.html)

`L.esri.ImageService` is an abstraction for interacting with Image Services running on ArcGIS Online and ArcGIS Server that allows you to make requests to the API, as well as query and identify features on the service.

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
            <td><code class="nobr">L.esri.imageService({{{param 'Object' 'options'}}})</code></td>
            <td><code>Options</code> for configuring the ArcGIS Server or ArcGIS Online image service you would like to consume. <code>Options</code>includes a <code>url</code> parameter which refers to the ArcGIS Server or ArcGIS Online service you would like to consume.</td>
        </tr>
    </tbody>
</table>

### Options

`L.esri.ImageService` accepts all [`L.esri.Service`]({{assets}}api-reference/services/service.html) options.

### Events

`L.esri.ImageService` fires all  [`L.esri.service`]({{assets}}api-reference/services/service.html) events.

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
<pre class="js"><code>imageService.query()
            .within(latlngbounds)
            .run(function(error, featureCollection, response){
              console.log(featureCollection);
            });</code></pre>
            </td>
        </tr>
    </tbody>
</table>

### Example

No examples.
