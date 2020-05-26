---
title: L.esri.Geocoding.Geosearch
layout: documentation.hbs
---

# {{page.data.title}}

Extends [`L.Control`](https://leafletjs.com/reference-{{siteData.latest_leaflet}}.html#control)

`L.esri.Geocoding.Geosearch` is a control for auto-complete enabled search.  You can find more information and the source code for this plugin [here](https://github.com/Esri/esri-leaflet-geocoder).

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
            <td>
            <code>L.esri.Geocoding.geosearch({{{param 'GeosearchObject' 'options'}}})</code><br><br>
            </td>
            <td>Creates a new Geosearch control</td>
        </tr>
    </tbody>
</table>

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `String` | `'topleft'` | Expects a valid Leaflet [control position](https://leafletjs.com/reference.html#control-position).|
| `zoomToResult` | `Boolean` | `true` | Determines whether or not the map will zoom to the result after geocoding is complete. |
| `useMapBounds` | `Boolean` or `Integer` | `12` | Determines if and when the geocoder should use the bounds of the map to filter search results. If `true` the geocoder will always return results in the current map bounds. If `false` it will always search the world. If an integer (like `11`) is passed, the geocoder will use the bounds of the map for searching only if the map is currently zoomed in far enough. |
| `collapseAfterResult` | `Boolean` | `true` | Determines whether or not the geocoder should collapse after a result is found. |
| `expanded` | `Boolean` | `false` | Determines whether or not the geocoder starts in an expanded state. |
| `allowMultipleResults` | `Boolean` | `true` | If set to `true` and the user submits the form without a suggestion, the control will geocode the current text in the input. |
| `providers` | `Array` | See description | An array of [providers](#Providers) to search. |
| `placeholder` | `String` | 'Search for places or addresses' | Placeholder text for the search input. |
| `title` | `String` | 'Location Search' | Title text for the search input. Shows as a tooltip on hover. |
| `searchBounds` | `L.latLngBounds` | `null` | If set, the geocoder will filter results using the provided static bounding box regardless of the current zoom level of the map, overriding `useMapBounds` entirely.

### Events

| Event | Data | Description |
| --- | --- | --- |
| results | [`<ResultsEvent>`](#results) | Fired when results are returned from the geocoder. |

Events from each provider will match the events fired by [`L.esri.Service`](../services/service.html).

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
            <td><code>clear()</code></td>
            <td><code>this</code></td>
            <td>Clears the current text and collapses the control if `collapseAfterResult` is true.
            </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td><code>disable()</code></td>
            <td></td>
            <td>grays out the input so that addresses cannot be searched.
            </td>
        </tr>
        <tr>
            <td><code>enable()</code></td>
            <td></td>
            <td>ungray the input so that addresses can once again be searched.
            </td>
        </tr>
    </tbody>
</table>

### Styling

For reference here is the internal DOM structure of the geocoder

```xml
<div class="geocoder-control leaflet-control">
  <input class="geocoder-control-input leaflet-bar">
  <ul class="geocoder-control-suggestions leaflet-bar">
    <li class="geocoder-control-suggestion geocoder-control-selected">The Selected Result</li>
    <li class="geocoder-control-suggestion">Another Result</li>
  </ul>
</div>
```
### Providers

The `Geosearch` control can also search for results from a variety of sources including Feature Layers and Map Services. This is done with plain text matching and is not "real" geocoding. But it allows you to mix custom results into a search box.

```xml
<link rel="stylesheet" href="./esri-leaflet-geocoder.css">
<script src="./esri-leaflet-geocoder.js"></script>
```

```js
var arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider();
var gisDay = L.esri.Geocoding.featureLayerProvider({
  url: 'https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/GIS_Day_Final/FeatureServer/0',
  searchFields: ['Name', 'Organization'], // Search these fields for text matches
  label: 'GIS Day Events', // Group suggestions under this header
  formatSuggestion: function (feature) {
    return feature.properties.Name + ' - ' + feature.properties.Organization; // format suggestions like this.
  }
});

L.esri.Geocoding.Controls.geosearch({
  providers: [arcgisOnline, gisDay] // will geocode via ArcGIS Online and search the GIS Day feature service.
}).addTo(map);
```
#### Available Providers
* `L.esri.Geocoding.arcgisOnlineProvider`<br>uses the ArcGIS Online World Geocoding service.

* `L.esri.Geocoding.featureLayerProvider`<br>gets results by querying a Feature Layer for text matches.

* `L.esri.Geocoding.mapServiceProvider`<br>uses the find and query methods of ArcGIS Server Map Services to get text matches.

* `L.esri.Geocoding.geocodeServiceProvider`<br>uses an ArcGIS Server Geocode Service (and supports suggestions from ArcGIS Server 10.3+ enabled endpoints).

All providers share the following options:

Option | Type | Default | Description
--- | --- | --- | --- |
`label` | `String` | `'Provider Type'` | Text that will be used to group suggestions (when more than one provider is used).
`maxResults` | `Integer` | `5` | Maximum number of results to show for the provider.  Hard limit for suggestions from the [ArcGIS World Geocoding Service](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm) is 15.
`attribution` | `string` | `Varies by provider` | Adds attribution to the map to credit the source.
`token` | `String` | `null` | Will use this token to authenticate all calls to the service.

##### arcgisOnlineProvider

Option | Type | Default | Description
--- | --- | --- | ---
`countries` | `String` `[Strings]` | null | Limit results to one or more countries. Any ISO 3166 2 or 3 digit [country code](https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm)  supported by the ArcGIS World Geocode service is allowed. *Note*: using an array of country codes may result in inaccurate results even when a specific suggestion is supplied.
`categories` | `String` `[Strings]` | null | Limit results to one or more categories. See the [list of valid categories](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm#ESRI_SECTION1_502B3FE2028145D7B189C25B1A00E17B) for possible values.
`forStorage` | `Boolean` | false | Indicates whether results will be stored permanently.  More information can be found [here](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-free-vs-paid.htm).


Results from the `arcgisOnlineProvider` will have an additional `properties` key which will correspond with [all available fields](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-service-output.htm#ESRI_SECTION1_42D7D3D0231241E9B656C01438209440) in the World Geocode service

##### geocodeServiceProvider

Option | Type | Default | Description
--- | --- | --- | ---
`url` | `String` | *Required* | The URL for the service that will be searched.
`label` | `String` | `'Geocode Service'` | Text that will be used to group suggestions under when more than one provider is being used.

Results from the `geocodeServiceProvider` will have an additional `properties` key which will correspond with all the available fields in the service.

##### featureLayerProvider

Option | Type | Default | Description
--- | --- | --- | ---
`url` | `String` | *Required* | The URL for the service that will be searched.
`searchFields` | `String` `Array[Strings]` | None | An array of fields to search for text.
`formatSuggestion`| `Function` | See Description | Formatting function for the suggestion text. Receives feature information and returns a string.
`bufferRadius` | `Integer` | 1000 | If a service or layer contains points, buffer points by this radius (in meters) to create bounds.
`searchMode` | `String` | 'contain' | Sets how the search is performed against features.  It essentially changes where wildcards (`%`) are placed within the query.  Options are `contain`, `startWith`, `endWith`, or `strict`.

##### featureLayerProvider Methods

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
            <td><code>orderBy({{{param 'String' 'fieldname'}}}, {{{param 'String' 'order'}}})</code></td>
            <td><code>this</code></td>
            <td>Sort output features using values from an individual field. `"ASC"` (ascending) is the default sort order, but `"DESC"` can be passed as an alternative. This method can be called more than once to apply advanced sorting.
            </td>
        </tr>
    </tbody>
</table>

Results from the `featureLayerProvider` will have an additional `properties` key which will contain all the information for the feature and a `geojson` key that will contain a [GeoJSON](https://tools.ietf.org/html/rfc7946) representation of the feature.

##### mapServiceProvider

Option | Type | Default | Description
--- | --- | --- | ---
`url` | `String` | *Required* | The URL for the service that will be searched.
`searchFields` | `String` `Array[Strings]` | None | An array of fields to search for text.
`layers` | `Integer` `Array[Integers]` | `[0]` | An array of layer identifiers to find text matches on.
`formatSuggestion`| `Function` | See Description | Formatting function for the suggestion text. Receives feature information and returns a string.
`bufferRadius` | `Integer` `Array[Integers]`| Buffer point results by this radius to create bounds.

Results from the `mapServiceProvider` will have an additional `properties` key which will contain all the information for the feature and a `geojson` key that will contain a [GeoJSON](https://tools.ietf.org/html/rfc7946) representation of the feature.

Events from each provider will match the events fired by [`L.esri.Service`](../services/service.html).

#### Results

Property | Type | Description
--- | --- | ---
`bounds` | [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds)| The bounds around this suggestion. Helpful for zooming to results like cities and states.
`latlng` | [`L.LatLng`](https://leafletjs.com/reference.html#latlng)| The center of the results.
`text` | `String` | The entered search text.
`results` | [`[<ResultObject>]`](#result-object) | An array of [result objects](#result-object).

#### Result Object

A single result from a provider. You should not rely on all these properties being present in every result object. Some providers may add additional properties.

Property | Type | Description
--- | --- | ---
`text` | `String` | The text that was passed to the provider.
`bounds` | [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds)| The bounds around this result. Helpful for zooming to results like cities and states.
`latlng` | [`L.LatLng`](https://leafletjs.com/reference.html#latlng)| The center of the result.

The result object will also contain any additional properties from the provider. See the [available providers](#available-providers) for more information.
