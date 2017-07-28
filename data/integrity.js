var ssri = require('ssri');
var fs   = require('fs');

const leafletIntegrity = ssri.fromData(fs.readFileSync('node_modules/leaflet/dist/leaflet.js'));
const leafletCssIntegrity = ssri.fromData(fs.readFileSync('node_modules/leaflet/dist/leaflet.css'));

const esriLeafletIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet/dist/esri-leaflet.js'));

const geocoderIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js'));
const geocoderCssIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css'));

const vectorIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-vector/dist/esri-leaflet-vector.js'));

const gpIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-gp/dist/esri-leaflet-gp.js'));

const renderersIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-renderers/dist/esri-leaflet-renderers.js'));

const clusterIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-cluster/dist/esri-leaflet-cluster.js'));

const heatmapIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-heatmap/dist/esri-leaflet-heatmap.js'));

// console.log('Integrity hashes:');
// console.log('esri-leaflet-debug.js: ', integrity.toString());

var docConfig = fs.readFileSync('data/siteData.json').toString();

docConfig = docConfig.
  replace(/"latest_leaflet_integrity":.*/, '"latest_leaflet_integrity": "' + leafletIntegrity.toString() + '",').
  replace(/"latest_leaflet_css_integrity":.*/, '"latest_leaflet_css_integrity": "' + leafletCssIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_integrity":.*/, '"latest_esri_leaflet_integrity": "' + esriLeafletIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_geocoder_integrity":.*/, '"latest_esri_leaflet_geocoder_integrity": "' + geocoderIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_geocoder_css_integrity":.*/, '"latest_esri_leaflet_geocoder_css_integrity": "' + geocoderCssIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_vector_integrity":.*/, '"latest_esri_leaflet_vector_integrity": "' + vectorIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_gp_integrity":.*/, '"latest_esri_leaflet_gp_integrity": "' + gpIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_renderers_integrity":.*/, '"latest_esri_leaflet_renderers_integrity": "' + renderersIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_cluster_integrity":.*/, '"latest_esri_leaflet_cluster_integrity": "' + renderersIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_heatmap_integrity":.*/, '"latest_esri_leaflet_heatmap_integrity": "' + renderersIntegrity.toString() + '"');

// console.log('New doc variables: \n', docConfig);

fs.writeFileSync('data/siteData.json', docConfig);