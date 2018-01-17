/*
steps:
when you'd like to bump one (or more) plugin versions used on the doc site
1. update the version number in the devDependency section of the project's package.json manually
2. run `npm run integrity`
3. new version numbers and SSRI integrity SHAs will be calculated and updated throughout the doc site.
*/

var ssri = require('ssri');
var fs   = require('fs');

const leafletIntegrity = ssri.fromData(fs.readFileSync('node_modules/leaflet/dist/leaflet.js'));
const leafletCssIntegrity = ssri.fromData(fs.readFileSync('node_modules/leaflet/dist/leaflet.css'));

const dependencyVersions = JSON.parse(fs.readFileSync('package.json'))

const esriLeafletIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet/dist/esri-leaflet.js'));

const geocoderIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js'));
const geocoderCssIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css'));

const vectorIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-vector/dist/esri-leaflet-vector.js'));

const gpIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-gp/dist/esri-leaflet-gp.js'));

const renderersIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-renderers/dist/esri-leaflet-renderers.js'));

const clusterIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-cluster/dist/esri-leaflet-cluster.js'));

const heatmapIntegrity = ssri.fromData(fs.readFileSync('node_modules/esri-leaflet-heatmap/dist/esri-leaflet-heatmap.js'));

var docConfig = fs.readFileSync('data/siteData.json').toString();

docConfig = docConfig.
  replace(/"latest_leaflet":.*/, '"latest_leaflet": "' + dependencyVersions.devDependencies.leaflet + '",').
  replace(/"latest_leaflet_integrity":.*/, '"latest_leaflet_integrity": "' + leafletIntegrity.toString() + '",').
  replace(/"latest_leaflet_css_integrity":.*/, '"latest_leaflet_css_integrity": "' + leafletCssIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet":.*/, '"latest_esri_leaflet": "' + dependencyVersions.devDependencies['esri-leaflet'] + '",').
  replace(/"latest_esri_leaflet_integrity":.*/, '"latest_esri_leaflet_integrity": "' + esriLeafletIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_geocoder":.*/, '"latest_esri_leaflet_geocoder": "' + dependencyVersions.devDependencies['esri-leaflet-geocoder'] + '",').
  replace(/"latest_esri_leaflet_geocoder_integrity":.*/, '"latest_esri_leaflet_geocoder_integrity": "' + geocoderIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_geocoder_css_integrity":.*/, '"latest_esri_leaflet_geocoder_css_integrity": "' + geocoderCssIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_vector":.*/, '"latest_esri_leaflet_vector": "' + dependencyVersions.devDependencies['esri-leaflet-vector'] + '",').
  replace(/"latest_esri_leaflet_vector_integrity":.*/, '"latest_esri_leaflet_vector_integrity": "' + vectorIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_gp":.*/, '"latest_esri_leaflet_gp": "' + dependencyVersions.devDependencies['esri-leaflet-gp'] + '",').
  replace(/"latest_esri_leaflet_gp_integrity":.*/, '"latest_esri_leaflet_gp_integrity": "' + gpIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_renderers":.*/, '"latest_esri_leaflet_renderers": "' + dependencyVersions.devDependencies['esri-leaflet-renderers'] + '",').
  replace(/"latest_esri_leaflet_renderers_integrity":.*/, '"latest_esri_leaflet_renderers_integrity": "' + renderersIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_cluster":.*/, '"latest_esri_leaflet_cluster": "' + dependencyVersions.devDependencies['esri-leaflet-cluster'] + '",').
  replace(/"latest_esri_leaflet_cluster_integrity":.*/, '"latest_esri_leaflet_cluster_integrity": "' + renderersIntegrity.toString() + '",').
  replace(/"latest_esri_leaflet_heatmap":.*/, '"latest_esri_leaflet_heatmap": "' + dependencyVersions.devDependencies['esri-leaflet-heatmap'] + '",').
  replace(/"latest_esri_leaflet_heatmap_integrity":.*/, '"latest_esri_leaflet_heatmap_integrity": "' + renderersIntegrity.toString() + '"');

fs.writeFileSync('data/siteData.json', docConfig);