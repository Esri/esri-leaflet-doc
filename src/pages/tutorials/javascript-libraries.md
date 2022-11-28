---
title: JavaScript Libraries
description: How to use Esri Leaflet with modern JavaScript libraries and frameworks.
layout: tutorials.hbs
redirect: https://developers.arcgis.com/esri-leaflet/
---

# {{ page.data.title }}

{{ page.data.description }}

#### Introduction

Leaflet and Esri Leaflet can be used with all the modern JavaScript libraries like React, Svelte, Vue, and Angular. In general, you'll use the functionality in your framework to get a reference to a DOM Node. For example, [`refs` in React](https://reactjs.org/docs/refs-and-the-dom.html) or [the `use:` directive in Svelte](https://svelte.dev/docs#use_action). Then you can import Leaflet and Esri Leaflet using modern ES6 style imports:

```js
import { Map as LeafletMap, Icon, Marker } from "leaflet";
import { FeatureLayer } from "esri-leaflet";
```

... and use these just as you normally would.

#### Resources

There are a variety of helper libraries and examples helping you to use Esri Leaflet with the latest JavaScript libraries and frameworks:

- [react-esri-leaflet](https://github.com/slutske22/react-esri-leaflet)
- [React Demo](https://github.com/gavinr/esri-leaflet-react-demo)
- [Svelte Demo](https://github.com/gavinr/esri-leaflet-svelte-demo)
