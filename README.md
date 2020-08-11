# Esri Leaflet Documentation Site

> This repository contains the source code for the [Esri Leaflet](https://github.com/Esri/esri-leaflet) API Reference, sample code and tutorials found at <https://esri.github.io/esri-leaflet>.

## Instructions

1. clone this repository
2. `npm install -g grunt-cli`
3. `npm install`
4. `npm start`

In order to update the version of Leaflet, Esri Leaflet or any other plugin displayed in the documentation site:

1. find/update the appropriate `package.json` [devDependency](https://github.com/Esri/esri-leaflet-doc/blob/8aef72d93fe17366e9753894901ec3924e643141/package.json#L11-L34)
2. rerun `npm install`
3. run `npm run integrity` (to generate a corresponding [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) hash).
4. run `npm start` to confirm locally that this achieved the desired effect.
5. send a Pull Request!

### Development Tips

#### Testing/Linting

Before committing, run `npm test`, which will run [ESLint](https://eslint.org/) (enforcing the [Semistandard style](https://github.com/standard/semistandard)) on all our sample code to ensure the samples are consistently formatted.

File changes will be watched and also linted with ESLint if you have run `npm start` prior to editing the samples.

#### VS Code

If you're using [VS Code](https://code.visualstudio.com/) and the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), you can create a new file at `.vscode/settings.json` with the following contents to enable live linting on the HBS files:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "handlebars"
  ]
}
```

#### Local Esri-Leaflet

If you're working on changes to esri-leaflet locally and want to see those changes within the context of the documentation site:

1. Run `npm start` in the `esri-leaflet` project. This will host the built esri-leaflet file at `http://localhost:5000/dist/esri-leaflet-debug.js` or similar.
1. In this repository, in `\data\devSiteData.json`, set the `localSource` property to `true` and set the `localSourceUrl` property to the full url of your `esri-leaflet-debug.js` file if it's not the same as above.
1. Run `npm start` in this project, and the documentation site will be hosted but load the `esri-leaflet` library locally instead of the CDN version.

## Issues

Find a typo or other problem on the website?  Please let us know by submitting an [issue](https://github.com/Esri/esri-leaflet-doc/issues).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/esri-leaflet/blob/master/CONTRIBUTING.md).

## Licensing

Copyright &copy; 2015-2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
