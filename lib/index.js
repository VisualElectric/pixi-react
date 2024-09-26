'use strict';

var Application = require('./components/Application.js');
var UseAssetsStatus = require('./constants/UseAssetsStatus.js');
var createRoot = require('./core/createRoot.js');
require('./global.js');
var extend = require('./helpers/extend.js');
var useApp = require('./hooks/useApp.js');
var useApplication = require('./hooks/useApplication.js');
var useAsset = require('./hooks/useAsset.js');
var useAssets = require('./hooks/useAssets.js');
var useExtend = require('./hooks/useExtend.js');
var useSuspenseAssets = require('./hooks/useSuspenseAssets.js');
var useTick = require('./hooks/useTick.js');

"use strict";
console.warn(`
Be aware that you are using a beta version of Pixi React.
- Things may be broken.
- Things may (but shouldn't) change.
- All functionality that's deprecated in the beta version WILL BE REMOVED for the production release.
`);

exports.Application = Application.Application;
exports.UseAssetsStatus = UseAssetsStatus.UseAssetsStatus;
exports.createRoot = createRoot.createRoot;
exports.extend = extend.extend;
exports.useApp = useApp.useApp;
exports.useApplication = useApplication.useApplication;
exports.useAsset = useAsset.useAsset;
exports.useAssets = useAssets.useAssets;
exports.useExtend = useExtend.useExtend;
exports.useSuspenseAssets = useSuspenseAssets.useSuspenseAssets;
exports.useTick = useTick.useTick;
//# sourceMappingURL=index.js.map
