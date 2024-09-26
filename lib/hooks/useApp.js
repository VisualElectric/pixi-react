'use strict';

var pixi_js = require('pixi.js');
var react = require('react');
var Context = require('../components/Context.js');
var invariant = require('../helpers/invariant.js');

"use strict";
function useApp() {
  const { app } = react.useContext(Context.Context);
  invariant.invariant(
    app instanceof pixi_js.Application,
    "No Context found with `%s`. Make sure to wrap component with `%s`",
    "Application",
    "AppProvider"
  );
  return app;
}

exports.useApp = useApp;
//# sourceMappingURL=useApp.js.map
