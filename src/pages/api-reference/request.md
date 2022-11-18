---
redirect: https://developers.arcgis.com/esri-leaflet/api-reference/request/
title: request
layout: documentation.hbs
---

# L.esri.request

Generic methods to make GET and POST requests to ArcGIS Online and ArcGIS Enterprise. These methods will handle serializing the input parameters and parsing of the response, making them available in a callback function via a response and error property similar to Node.js.

GET requests will be made with `XMLHttpRequest` (via CORS) if the browser supports it and will fallback to JSONP. POST requests will always be made with `XMLHttpRequest` (via CORS). The [ArcGIS Resource Proxy](https://github.com/Esri/resource-proxy) or something similar must be configured to support cross domain requests via [`L.esri.Service`]({{assets}}api-reference/services/service.html) if CORS cannot be leveraged.

If you are using a version of ArcGIS Server older than 10.1, CORS is not enabled by default but can be configured using the documentation available at https://enable-cors.org/. If you cannot enable CORS, the following line of code will force all requests to be made using JSONP instead.

```js
L.esri.Support.cors = false;
```

### L.esri.request(url, params, callback);

Executes a GET or POST via `XMLHttpRequest` or JSONP request depending on the capabilities of the browser and the length of the request. GET is used when the browser supports CORS and the request url is less then 2000 characters. POST is used when the browser supports CORS and the request exceeds 2000 characters. JSONP is used when the request is less then 2000 characters and the browser does not support CORS.

#### Params (L.esri.request)

| Param | Value | Description |
| --- | --- | --- |
| `url` | `String`| The URL to request. |
| `params` | `Object` | The parameters to send as a query string. |
| `callback` | `Function` | Function to run when the request completes, will be passed an `error` and `response`. |
| `context` | `Object` | Optional function context for the callback. |

#### Example (L.esri.request)

```js
L.esri.request('https://www.portlandmaps.com/arcgis/rest/services/Public/Parks_Misc/MapServer/21/', {}, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.name);
  }
});
```

### L.esri.get(url, params, callback)

Execute a GET request via `XMLHttpRequest' (via CORS) or JSON depending on what is available in the browser.

**Note**: ArcGIS Server before 10.1 does not have CORS support enabled by default. You can either enable CORS on your server or tell Esri Leaflet to always make JSONP requests with `L.esri.get = L.esri.Request.get.JSONP;` After you load Esri leaflet, but before calling your own scripts.

#### Params (L.esri.get)

| Param | Value | Description |
| --- | --- | --- |
| `url` | `String`| The URL to request. |
| `params` | `Object` | The parameters to send as a query string. |
| `callback` | `Function` | Function to run when the request completes, will be passed `error` and `response`. |
| `context` | `Object` | Optional function context for the callback. |

#### Example (L.esri.get)

```js
L.esri.get('https://www.portlandmaps.com/arcgis/rest/services/Public/Parks_Misc/MapServer/21/', {}, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.name);
  }
});
```

### L.esri.post(url, params, callback)

Execute a POST request via `XMLHttpRequest' (via CORS).

This request is made via `XMLHttpRequest` which cannot make cross domain requests in IE 8 and 9. Esri Leaflet supports both the [ArcGIS API for JavaScript proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html) and the [ArcGIS Resource Proxy](https://github.com/Esri/resource-proxy) which can be hosted on your server and used with the [`L.esri.Service`]({{assets}}api-reference/services/service.html) classes to work around this issue.

#### Params (L.esri.post)

| Param | Value | Description |
| --- | --- | --- |
| `url` | `String`| The URL to request. |
| `params` | `Object` | The parameters to send as a query string. |
| `callback` | `Function` | Function to run when the request completes, will be passed `error` and `response`. |
| `context` | `Object` | Optional function context for the callback. |

#### Example (L.esri.post)

```js
L.esri.post('https://www.portlandmaps.com/arcgis/rest/services/Public/Parks_Misc/MapServer/21/', {}, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response.name);
  }
});
```
