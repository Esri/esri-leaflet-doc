---
title: Working with Authenticated Services
description: How to access authenticated services with Esri Leaflet.
layout: tutorials.hbs
---

# {{ page.data.title }}

{{ page.data.description }}

#### Introduction

In this tutorial, you will learn how to use authenticated services from ArcGIS Server with the Leaflet.js web mapping library.  In the future, this tutorial will cover adding authenticated services from ArcGIS Online.

Authenticated services published on ArcGIS Server require a username and password to access the service.  As part of the authentication process, a token is generated.  To add an authenticated service to a Leaflet.js web map, you'll need to use the **L.esri.post** method to submit the username and password to the server to generate the token.  To see a token generation page in a web browser, please visit this [page](https://sampleserver6.arcgisonline.com/arcgis/tokens/GenerateToken).  You can learn more about making requests with Esri Leaflet by visiting the [documentation site](https://esri.github.io/esri-leaflet/api-reference/request.html). 

Here is an outline for the steps in this tutorial:

1. Create an empty **`html`** file and add the Leaflet and Esri Leaflet libraries via CDN
2. Create elements for the map. This includes the container for the map, as well as the form that will execute a function request the authenticated service.  Add basic style rules for these elements.
3. Create a **`<script>`** element, create the map, and add a basemap.
4. Create a function that will make the request to the ArcGIS Server using inputs from the form.
5. Create a function that will be tied to the click event of the submit button of the form. This will call the function created in step #4.
6. Add some logic to handle errors for the request, as well as for the service not loading.

#### Create HTML File and Add Leaflet and Esri Leaflet Via CDN

To start, we'll create a **`html`** file and add Leaflet and Esri Leaflet via CDN.

```xml
<!DOCTYPE html>
<html lang="en">
<head>    
    <meta charset="utf-8">
    <title>Esri Leaflet Authenticated Services</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <!-- Load Leaflet stylesheet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
    integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
    crossorigin=""/>   
</head>
<body>
    <!-- Load Leaflet script from CDN -->
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
    integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
    crossorigin=""></script>
    <!-- Load Esri Leaflet script from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.1.1/dist/esri-leaflet.js"
    integrity="sha512-ECQqaYZke9cSdqlFG08zSkudgrdF6I1d8ViSa7I3VIszJyVqw4ng1G8sehEXlumdMnFYfzY0tMgdQa4WCs9IUw=="
    crossorigin=""></script>
</body>
</html>
```

#### Add Elements for the Map Container and Form

Within the **`<body>`** element, we'll create a **`<section>`** element and provide it with an id of **"map"**.  The web map will be placed within this element after we construct the **L.map** object in our script.

Within the **`<section id="map">`**, we'll add a **`<div class="form-container">`** element to hold our form.  Next, we'll add a **`<form id="securedServicesForm">`** element as a child of **`<div class="form-container">`**.

Within the **form** element, we'll add the text inputs and associated labels to capture the username, password, and token generation URL for the service.  We'll also create a submit button that will be tied to the function to submit the service credentials, and then add it to the map.  Our form will appear the following way:

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
    <div class="form-component">
        <label for="tokenUrl">ArcGIS Server Generate Token URL</label>
        <!-- this will be the url for token generation for the service -->
        <input type="text" id="tokenUrl" />                              
    </div>
    <!-- a click event handler will be placed on this element to run our function -->
    <button id="formSubmit" type="submit">Add Services</button>
</form>     
```

> For most instances of ArcGIS Server, the generate token URL will be **[server domain]/arcgis/tokens/GenerateToken**.  However, depending upon the installation of ArcGIS Server, the URL may be different.

We'll need to update the stylesheet rules for the elements we have created.  Using a CSS framework may make this process easier. The [Esri Calcite Maps](https://github.com/Esri/calcite-maps) project uses Bootstrap and contains samples for Esri Leaflet.  The rules provided in this tutorial are only a starting point.

Now our **`html`** file will appear the following way:

```xml
<!DOCTYPE html>
<html lang="en">
<head>    
    <meta charset="utf-8">
    <title>Esri Leaflet Authenticated Services</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <!-- Load Leaflet stylesheet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
    integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
    crossorigin=""/> 
    
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
                <div class="form-component">
                    <label for="tokenUrl">ArcGIS Server Generate Token URL</label>
                    <input type="text" id="tokenUrl" />                              
                </div>
                <button id="formSubmit" type="submit">Add Services</button>
            </form>               
        </div>
    </section>

    <!-- Load Leaflet script from CDN -->
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
    integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
    crossorigin=""></script>
    <!-- Load Esri Leaflet script from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.1.1/dist/esri-leaflet.js"
    integrity="sha512-ECQqaYZke9cSdqlFG08zSkudgrdF6I1d8ViSa7I3VIszJyVqw4ng1G8sehEXlumdMnFYfzY0tMgdQa4WCs9IUw=="
    crossorigin=""></script>
</body>
</html>
```
#### Write JavaScript for Map Object and Function to Add Service to Map

Now that our **`html`** file is set-up, we are ready to start writing JavaScript.  At the end of the **`html`** file, before the closing **`</body>`** tag, create a **`<script>`** tag.  Our JavaScript will be placed here.

> You can optionally write your JavaScript in a seperate file and add it to the **`html`** file.

We'll start by creating the map object and setting a basemap:

```javascript
// create map and set zoom level and center coordinates
var map = L.map('map').setView([34.089, -116.865], 9);

// set basemap to Esri Streets
var esriStreets = L.esri.basemapLayer('Streets').addTo(map);
```

We will want to create a function that executes when the **submit** button of the form is clicked.  We'll also need to add an event listener to this element.

```javascript
// function to run when form is submitted
function addServicesFromServer() {}

// submit element of form
var submitBtn = document.getElementById('formSubmit');

// add event listener to form
submitBtn.addEventListener('click', addServicesFromServer); 
```

Our function **addServicesFromServer** will need to get the values from the text inputs, make a POST request to the ArcGIS Server to generate the token, and then add the map/feature service (layer) to the map.  We will create a function to handle the server request.

```javascript
// function to run when form submitted
function addServicesFromServer(e) {
    // prevent page from refreshing when form is submitted
    e.preventDefault();
                        
    // get values from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var tokenUrl = document.getElementById('tokenUrl').value;
    
    // call function to handle server request
}
```

Let's now create our function to make the request to the server.  There are a few methods in Esri Leaflet to make requests.  Please see the [documentation](https://esri.github.io/esri-leaflet/api-reference/request.html) for more information.  We will be making a POST request to ArcGIS Server.  The **L.esri.post** requires the request URL, an object containing the parameters to send as the query string, a callback function that runs when the request completes, and an optional function context for the callback function.

We will be making the POST request to the token generation page.  You can see this page in a web browser [here](https://sampleserver6.arcgisonline.com/arcgis/tokens/GenerateToken).  Below is the function we'll use to make the request, along with some code to help with one of thee query parameters for older versions of Internet Explorer.

```javascript
// workaround for old ie
if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
 }
        
// function to make request to server
function serverAuth(server, username, password, callback) {
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

We will call **serverAuth** within **addServicesFromServer**.  Here is what our **`<script>`** now looks like.

```javascript
'use strict';
        
// submit element of form
var submitBtn = document.getElementById('formSubmit');

// add event listener to form
submitBtn.addEventListener('click', addServicesFromServer);        
        
// create map and set zoom level and center coordinates
var map = L.map('map').setView([34.089, -116.865], 9);

// set basemap to Esri Streets
var esriStreets = L.esri.basemapLayer('Streets').addTo(map);
        
// workaround for old ie
if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
        
// function to make request to server
function serverAuth(server, username, password, callback) {
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
function addServicesFromServer(e) {
    // prevent page from refreshing
    e.preventDefault();
                        
    // get values from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var tokenUrl = document.getElementById('tokenUrl').value;
            
    // generate token from server and add service from callback function
    serverAuth(tokenUrl,username,password,function(error, response) {
        // add layer to map
        var dl = L.esri.dynamicMapLayer({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire_secure_ac/MapServer',
            opacity: 1,
            token:  response.token
        }).addTo(map);        
     }); // end serverAuth call
} // end addServicesFromServer call   
```

Our response from the token generation page includes our access token for the service.  We pass this into the token option for the map service.  The username and password for this service are **user1**, and the token generation URL is https://sampleserver6.arcgisonline.com/arcgis/tokens/generateToken.  If you test this in your browser, you should see layers added to the map.

#### Handling Errors With Requests

But we are not finished yet.  When making requests, it is important to handle errors.  Maybe the URL for the service has changed, or the service is down, or the username or password were entered incorrectly.  It is up to you how to handle these errors, but let's look at some sample code.

In the **L.esri.post** method, there is an error object that can be returned.  We can use a conditional statement to trap the error and log the message to the console.  If there is no error with the request, we can execute the code to add the service to the map.

```javascript
serverAuth(tokenUrl,username,password,function(error, response) {
    // if an error occured while sending POST request, log the error
    if (error) {
        console.log(error);
    } else { // if no error occured
        // exectue code to add layer to map            
    }
}
```

There are also some ways to handle errors from the **`L.esri.Service`** class.  You can read the [documentation](https://esri.github.io/esri-leaflet/api-reference/services/service.html) for more information.  We can utilize the **authenticationrequired** event, which is fired when a request to the service fails and requires authentication.  Within this event, we can call the **authenticate** method, which authenticates the service with a new token and runs any pending requests that required a token.

There is also the **requesterror** event, which is fired when a request to the service responsed with an error.  This will probably be due to the service being down, or the URL for the service being invalid.  We can access the error object and add a message to the map or the console.  Using **dl** as the variable for the service we are requesting, the following code can be used to handle these events.

```javascript
// this event fires when a request to the service fails and requires authentication 
dl.on('authenticationrequired', function (e) {
    serverAuth(function(error, response) {
        e.authenticate(response.token);
    });
});                    

// This event fires when a request to the service responds with an error
dl.on('requesterror', function(e) {
    console.log('There was an error adding ' + e.url + 'to the map');
    console.log('Error code:' + e.code + '; Message: ' + e.message);
});                   
```

We have now built a basic Esri Leaflet web map that retrieves an authenticated service from ArcGIS Server, and handles errors with both the POST request to generate the token, as well as accessing the service.  Below is the completed code.  In the future, this tutorial (or a seperate?) will cover accessing authenticated content from ArcGIS Online.  Try experimenting with the wrong username/password and service URL to test the error trapping logic.

```xml
<!DOCTYPE html>
<html lang="en">
<head>    
    <meta charset="utf-8">
    <title>Esri Leaflet Authenticated Services</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <!-- Load Leaflet stylesheet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
    integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
    crossorigin=""/>
    
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
                <div class="form-component">
                    <label for="tokenUrl">ArcGIS Server Generate Token URL</label>
                    <input type="text" id="tokenUrl" />                              
                </div>
                <button id="formSubmit" type="submit">Add Services</button>
            </form>               
        </section>
    </section>
    
    <!-- Load Leaflet script from CDN -->
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
    integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
    crossorigin=""></script>
    <!-- Load Esri Leaflet script from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.1.1/dist/esri-leaflet.js"
    integrity="sha512-ECQqaYZke9cSdqlFG08zSkudgrdF6I1d8ViSa7I3VIszJyVqw4ng1G8sehEXlumdMnFYfzY0tMgdQa4WCs9IUw=="
    crossorigin=""></script>
    
    <!-- script to create map and load secured services -->
    <script>
        'use strict';
        
        // submit element of form
        var submitBtn = document.getElementById('formSubmit');
        // add event listener to form
        submitBtn.addEventListener('click', addServicesFromServer);        
        
        // create map and set zoom level and center coordinates
        var map = L.map('map').setView([34.089, -116.865], 9);
        // set basemap to Esri Streets
        var esriStreets = L.esri.basemapLayer('Streets').addTo(map);
        
        // workaround for old ie
        if (!window.location.origin) {
              window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
        
        // function to make request to server
        function serverAuth(server, username, password, callback) {
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
        function addServicesFromServer(e) {
            // prevent page from refreshing
            e.preventDefault();
                        
            // get values from form
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var tokenUrl = document.getElementById('tokenUrl').value;
            
            // generate token from server and add service from callback function
            serverAuth(tokenUrl,username,password,function(error, response) {
                // if an error occured while sending POST request, log the error
                if (error) {
                    console.log(error);
                } else { // if no error occured, add the layer to the map 
                    // add layer to map
                    var dl = L.esri.dynamicMapLayer({
                        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire_secure_ac/MapServer',                       
                        opacity: 1,
                        token:  response.token
                    }).addTo(map);

                    // this event fires when a request to the service fails and requires authentication    
                    dl.on('authenticationrequired', function (e) {
                        serverAuth(function(error, response) {
                            e.authenticate(response.token);
                        });
                    });                    

                    // This event fires when a request to the service responds with an error
                    dl.on('requesterror', function(e) {
                        console.log('There was an error adding ' + e.url + 'to the map');
                        console.log('Error code:' + e.code + '; Message: ' + e.message);
                    });                   
                } // end if/else                
            }); // end serverAuth call
        } // end addServicesFromServer call   
    </script>
</body>
</html>
```