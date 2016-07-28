var elTopo = L.esri.basemapLayer('Imagery');

var bgmap = L.map('background-map', {
    center: [37.739, -117.986],
    zoom: 10,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    zoomControl: false,
    tap: false,
    attributionControl: false,
    layers: [elTopo]
});

if (map) {
  map.scrollWheelZoom.disable();
  map.once("click", accidentalScroll, map);
}

function accidentalScroll() {
  map.scrollWheelZoom.enable();
}
