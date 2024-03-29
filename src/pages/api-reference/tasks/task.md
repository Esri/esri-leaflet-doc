---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/tasks/task/
title: L.esri.Task
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Class`](https://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#class)

`L.esri.Task` is a generic class that provides the foundation for calling operations on ArcGIS Online and ArcGIS Server Services like query, find and identify.

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
            <td><code>L.esri.task({{{param 'Object' 'options'}}})</code><br><br>
            <code>L.esri.task({{{param 'Service' 'endpoint' '../../api-reference/services/service.html'}}})</code></td>
            <td>Options includes a <code>url</code> parameter which refers to the ArcGIS Server or ArcGIS Online service you would like to consume.</td>
        </tr>
   </tbody>
</table>

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `url` | `String` | `''` | URL of the ArcGIS Server or ArcGIS Online service you would like to consume. |
| `proxy` | `String` | `false` | URL of an [ArcGIS API for JavaScript proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html) or [ArcGIS Resource Proxy](https://github.com/Esri/resource-proxy) to use for proxying POST requests. |
| `useCors` | `Boolean` | `true` | If this task should use CORS when making GET requests. |
| `requestParams` | `Object` | `null` | Used to pass through arbitrary request parameters to services. |

### Methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <td>Returns</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>request(<span>&lt;String&gt;</span> <code>url</code>, <span>&lt;Object&gt;</span> <code>params</code>, <span>&lt;Function&gt;</span> <code>callback</code>, <span>&lt;Object&gt;</span> <code>context</code>)</code></td>
            <td><code>this</code></td>
            <td>Makes a request to the associated service. The service's URL will be combined with the <code>path</code> option and parameters will be serialized. Accepts an optional function context for the callback.</td>
        </tr>
        <tr>
            <td><code>apikey(<span>&lt;String&gt;</span> <code>apikey</code>)</code></td>
            <td><code>this</code></td>
            <td>Adds an api key to this request if the service requires authentication. Will be added automatically if used with a service.</td>
        </tr>
        <tr>
            <td><code>token(<span>&lt;String&gt;</span> <code>token</code>)</code></td>
            <td><code>this</code></td>
            <td>Adds a token to this request if the service requires authentication. Will be added automatically if used with a service.</td>
        </tr>
    </tbody>
</table>
