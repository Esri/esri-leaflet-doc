# Esri Leaflet Documentation Site

> This repository contains the source code for the [Esri Leaflet](https://github.com/Esri/esri-leaflet) API Reference, sample code and tutorials found at http://esri.github.io/esri-leaflet.

### Instructions

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

#### Development Tips

Before committing, run `npm test`, which will run [ESLint](https://eslint.org/) (enforcing the [Semistandard style](https://github.com/standard/semistandard)) on all our sample code to ensure the samples are consistently formatted.

If you're using [VS Code](https://code.visualstudio.com/) and the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), you can create a new file at `.vscode/settings.json` with the following contents to enable live linting on the HBS files:

```
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "handlebars"
  ]
}
```

### Issues

Find a typo or other problem on the website?  Please let us know by submitting an [issue](https://github.com/Esri/esri-leaflet-doc/issues).

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/esri-leaflet/blob/master/CONTRIBUTING.md).

### Licensing

Copyright &copy; 2015-2018 Esri

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
