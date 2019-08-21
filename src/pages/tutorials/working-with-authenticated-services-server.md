---
title: Working with Authenticated Services in ArcGIS Server
description: How to access secure ArcGIS Enterprise services in Esri Leaflet.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

#### Introduction

In this tutorial, you will learn how to display authenticated services from ArcGIS Server in Leaflet.

Authenticated services published on ArcGIS Server require a username and password to be accessed. During the authentication process, credentials are exchanged for a token.  To add one of these secure services in Leaflet, we'll use `L.esri.post` to ask the server to generate a token. You can find an example of the raw `generateToken` REST operation we'll be calling [here](https://sampleserver6.arcgisonline.com/arcgis/tokens/).  You can learn more about making generic requests with Esri Leaflet by visiting the [documentation site](esri-leaflet/api-reference/request.html).

Here is an outline of the process:

1. Create an empty `html` file and add the Leaflet and Esri Leaflet libraries via CDN
2. Create DOM nodes for the map, and the form that will execute a function to request a token.
3. Create a function that will be tied to the click event of the submit button of the form. This will call the function created in the previous step.

#### Create an `html` file and reference Leaflet and Esri Leaflet Via CDN

```xml
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Esri Leaflet Authenticated Services</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

  <!-- Load Leaflet from CDN-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.css"
  integrity="{{siteData.latest_leaflet_css_integrity}}"
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.js"
  integrity="{{siteData.latest_leaflet_integrity}}"
  crossorigin=""></script>

  <!-- Load Esri Leaflet from CDN -->
  <script src="https://unpkg.com/esri-leaflet@{{siteData.latest_esri_leaflet}}/dist/esri-leaflet.js"
  integrity="{{siteData.latest_esri_leaflet_integrity}}"
  crossorigin=""></script>
</head>
<body>
</body>
</html>
```

#### Add Elements for the Map Container and Form

Next we'll need to create a `<div>` to hold our map and nest a `<form>` element inside.

Within the `<form>`, we'll add text inputs and labels to capture the username and password. We'll also create a submit button that will execute a function to submit the service credentials, and then add a layer to the map.

```xml
<form id="securedServicesForm">
  <div class="form-component">
    <label for="username">User Name</label>
    <!-- this will be the username for the service -->
    <input type="text" id="username" />
  </div>
  <div class="form-component">
    <label for="password">Password</label>
    <!-- this will be the password for the service -->
    <input type="password" id="password">
  </div>
  <!-- a click event handler will be placed on this element to run our function -->
  <button id="formSubmit" type="submit">Add Service</button>
</form>
```

> For most instances of ArcGIS Server, the generate token URL will be **[server domain]/arcgis/tokens/GenerateToken**.  However, depending upon the installation of ArcGIS Server, the URL may be different.

We'll need to define a few rules to control the style of the elements we have created.  Using a .css framework may make this process easier. [Esri Calcite Maps](https://github.com/Esri/calcite-maps) uses Bootstrap and contains samples for Esri Leaflet.  Below is how the form looks on the map.

![screen shot of form to add secured service to map](/esri-leaflet/img/tutorials/ags-secured-services/secured-service-form-screenshot.png "Form to add secured services to map")

```xml
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Esri Leaflet Authenticated Services</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

  <!-- Load Leaflet from CDN-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.css"
  integrity="{{siteData.latest_leaflet_css_integrity}}"
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.js"
  integrity="{{siteData.latest_leaflet_integrity}}"
  crossorigin=""></script>

  <!-- Load Esri Leaflet from CDN -->
  <script src="https://unpkg.com/esri-leaflet@{{siteData.latest_esri_leaflet}}/dist/esri-leaflet.js"
  integrity="{{siteData.latest_esri_leaflet_integrity}}"
  crossorigin=""></script>

  <style>
    html,
    body,
    #map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .form-container {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 25px;
      border: 2px solid #333;
      background: #fff;
      font-size: 1.15em;
      z-index: 1000;
    }

    .form-component {
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <!-- container for map -->
  <section id="map">
    <!-- form to add in secured service -->
    <div class="form-container">
      <form id="securedServicesForm">
        <div class="form-component">
          <label for="username">User Name</label>
          <input type="text" id="username" />
        </div>
        <div class="form-component">
          <label for="password">Password</label>
          <input type="password" id="password">
        </div>
        <button id="formSubmit" type="submit">Add Services</button>
      </form>
    </div>
  </section>
</body>
</html>
```
#### Write JavaScript for Map Object and Function to Add Service to Map

Next we'll create a `<script>` tag and start writing JavaScript to create a map object and choose a basemap:

```js
// create map and set zoom level and center coordinates
const map = L.map('map').setView([34.089, -116.865], 9);

// set basemap to Esri Streets
L.esri.basemapLayer('Streets').addTo(map);
```

Then we will create a function that executes when the **submit** button of the form is clicked.

```js
// function to run when form is submitted
function addServicesFromServer () {}

// submit element of form
const submitBtn = document.getElementById('formSubmit');

// add event listener to form
submitBtn.addEventListener('click', addServicesFromServer);
```

Our function **addServicesFromServer** will need to get the values from the text inputs, make a POST request to the ArcGIS Server to generate the token. Afterward we can add the layer to the map.

```js
function addServicesFromServer (e) {
  // prevent page from refreshing when the form is submitted
  e.preventDefault();

  // get values from form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // call function to handle server request
}
```

We will need to make a POST request to ArcGIS Server. `L.esri.post()` requires the request URL, the parameters to send as the query string and a callback function that runs when the request completes.

```js
function serverAuth (server, username, password, callback) {
  L.esri.post(server, {
    username: username,
    password: password,
    f: 'json',
    expiration: 86400,
    client: 'referer',
    referer: window.location.origin
  }, callback);
}
```

Here is what our `<script>` tag looks like now.

```js
'use strict';

// submit element of form
const submitBtn = document.getElementById('formSubmit');

// add event listener to form
submitBtn.addEventListener('click', addServicesFromServer);

// create map and set zoom level and center coordinates
const map = L.map('map').setView([34.089, -116.865], 9);

// set basemap to Esri Streets
L.esri.basemapLayer('Streets').addTo(map);

const tokenUrl = 'https://sampleserver6.arcgisonline.com/arcgis/tokens/generateToken';

// function to make request to server
function serverAuth (server, username, password, callback) {
  L.esri.post(server, {
    username: username,
    password: password,
    f: 'json',
    expiration: 86400,
    client: 'referer',
    referer: window.location.origin
  }, callback);
}

// function to run when form submitted
function addServicesFromServer (e) {
  // prevent page from refreshing
  e.preventDefault();

  // get values from form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // generate token from server and add service from callback function
  serverAuth(tokenUrl, username, password, function (error, response) {
    if (error) {
      return;
    }
    // add layer to map
    L.esri.dynamicMapLayer({
      url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire_secure_ac/MaServer',
      opacity: 1,
      token: response.token
    }).addTo(map);
  }); // end serverAuth call
} // end addServicesFromServer call
```

Our response from the token generation page includes our access token for the service.  We pass this into the token option for the map service.  The username and password for this service are **user1**.

![screen shot of map with secured services](/esri-leaflet/img/tutorials/ags-secured-services/secured-services-on-map.png "Map with secured services displayed")

We have now built a basic Esri Leaflet web map that retrieves an authenticated service from ArcGIS Server.

```xml
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Esri Leaflet Authenticated Services</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">

  <!-- Load Leaflet from CDN-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.css"
  integrity="{{siteData.latest_leaflet_css_integrity}}"
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@{{siteData.latest_leaflet}}/dist/leaflet.js"
  integrity="{{siteData.latest_leaflet_integrity}}"
  crossorigin=""></script>

  <!-- Load Esri Leaflet from CDN -->
  <script src="https://unpkg.com/esri-leaflet@{{siteData.latest_esri_leaflet}}/dist/esri-leaflet.js"
  integrity="{{siteData.latest_esri_leaflet_integrity}}"
  crossorigin=""></script>

  <style>
    html,
    body,
    #map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .form-container {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 25px;
      border: 2px solid #333;
      background: #fff;
      font-size: 1.15em;
      z-index: 1000;
    }

    .form-component {
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <!-- container for map -->
  <section id="map">
    <!-- form to add in secured service -->
    <section class="form-container">
      <form id="securedServicesForm">
        <div class="form-component">
          <label for="username">User Name</label>
          <input type="text" id="username" />
        </div>
        <div class="form-component">
          <label for="password">Password</label>
          <input type="password" id="password">
        </div>
        <button id="formSubmit" type="submit">Add Services</button>
      </form>
    </section>
  </section>

  <!-- script to create map and load secured services -->
  <script>
    'use strict';

    // submit element of form
    const submitBtn = document.getElementById('formSubmit');

    // add event listener to form
    submitBtn.addEventListener('click', addServicesFromServer);

    // create map and set zoom level and center coordinates
    const map = L.map('map').setView([34.089, -116.865], 9);

    // set basemap to Esri Streets
    L.esri.basemapLayer('Streets').addTo(map);

    const tokenUrl = 'https://sampleserver6.arcgisonline.com/arcgis/tokens/generateToken';

    // function to make request to server
    function serverAuth (server, username, password, callback) {
      L.esri.post(server, {
        username: username,
        password: password,
        f: 'json',
        expiration: 86400,
        client: 'referer',
        referer: window.location.origin
      }, callback);
    }

    // function to run when form submitted
    function addServicesFromServer (e) {
      // prevent page from refreshing
      e.preventDefault();

      // get values from form
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // generate token from server and add service from callback function
      serverAuth(tokenUrl, username, password, function (error, response) {
        if (error) {
          return;
        }
        // add layer to map
        L.esri.dynamicMapLayer({
          url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire_secure_ac/MapServer',
          opacity: 1,
          token: response.token
        }).addTo(map);
      }); // end serverAuth call
    } // end addServicesFromServer call
  </script>
</body>
</html>
```
