---
title: L.esri.RasterLayer
layout: documentation.hbs
---

# {{page.data.title}}

Extends [L.ImageOverlay](http://leafletjs.com/reference-{{siteData.latest_leaflet}}/.html#imageoverlay)

A generic class representing an image layer. This class can be extended to provide support for making export requests from ArcGIS REST services.

### Options

Option | Type | Default | Description
--- | --- | --- | ---
`f` | `String` | `'image'` |  Server response content type.
`opacity` | `Number` | `1` | Opacity of the layer. Should be a value between 0 and 1.
`position` | `String` | `'front'` | Position of the layer relative to other overlays.
`maxZoom` | `Number` | | Closest zoom level the layer will be displayed on the map.
`minZoom` | `Number` | | Furthest zoom level the layer will be displayed on the map.
`to` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) |  | Used to filter what is drawn from the service based on a time range.
`from` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) |  | Used to filter what is drawn from the service based on a time range.

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
            <td><code>bringToBack()</code></td>
            <td><code>this</code></td>
            <td>Redraws this layer below all other overlay layers.</td>
        </tr>
        <tr>
            <td><code>bringToFront()</code></td>
            <td><code>this</code></td>
            <td>Redraws this layer above all other overlay layers.</td>
        </tr>
        <tr>
            <td><code>getOpacity()</code></td>
            <td><code>Float</code></td>
            <td>Returns the current opacity of the layer.</td>
        </tr>
        <tr>
            <td><code>setOpacity({{{param 'Float' 'opacity'}}})</code></td>
            <td><code>this</code></td>
            <td>Sets the opacity of the layer.</td>
        </tr>
        <tr>
            <td><code>getTimeRange()</code></td>
            <td><code>Array</code></td>
            <td>Returns the current time range being used for rendering.</td>
        </tr>
        <tr>
            <td><code>setTimeRange({{{param 'Date' 'from'}}}, {{{param 'Date' 'to'}}})</code></td>
            <td><code>this</code></td>
            <td>Redraws the layer with he passed time range.</td>
        </tr>
        <tr>
            <td><code>metadata({{{param 'Function' 'callback'}}}, {{{param 'Object' 'context'}}})</code></td>
            <td><code>this</code></td>
            <td>
                Requests metadata about this Feature Layer. Callback will be called with `error` and `metadata`.
<pre class="js"><code>featureLayer.metadata(function(error, metadata){
  console.log(metadata);
});</code></pre>
            </td>
        </tr>
        <tr>
            <td><code>authenticate({{{param 'String' 'token'}}})</code></td>
            <td><code>this</code></td>
            <td>Authenticates this service with a new token and runs any pending requests that required a token.</td>
        </tr>
        <tr>
            <td><code>redraw()</code></td>
            <td></td>
            <td>Used to make a fresh request to the service and draw the response.</td>
        </tr>
    </tbody>
</table>

### Events

| Event | Data | Description |
| --- | --- | --- |
| `loading` | [<`LoadingEvent`>]({{assets}}api-reference/events.html#loading-event) | Fires when new features start loading. |
| `load` | [<`LoadEvent`>]({{assets}}api-reference/events.html#load-event) | Fires when all features in the current bounds of the map have loaded. |
| `error` | <`Event`> | Fires when an image fails to load and ensures that the offending ImageOverlay is removed by the API. |