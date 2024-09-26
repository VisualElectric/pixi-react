'use strict';

var pixi_js = require('pixi.js');
var react = require('react');
var constants_js = require('react-reconciler/constants.js');
var Context = require('../components/Context.js');
var isReadOnlyProperty = require('../helpers/isReadOnlyProperty.js');
var log = require('../helpers/log.js');
var prepareInstance = require('../helpers/prepareInstance.js');
var reconciler = require('./reconciler.js');
var roots = require('./roots.js');

"use strict";
function createRoot(target, options = {}, onInit) {
  let root = roots.roots.get(target);
  let applicationState = root?.applicationState ?? {
    isInitialised: false,
    isInitialising: false
  };
  const internalState = root?.internalState ?? {};
  if (root) {
    log.log("warn", "createRoot should only be called once!");
  } else {
    applicationState.app = new pixi_js.Application();
    internalState.rootContainer = prepareInstance.prepareInstance(applicationState.app.stage);
  }
  const fiber = root?.fiber ?? reconciler.reconciler.createContainer(
    internalState.rootContainer,
    constants_js.ConcurrentRoot,
    null,
    false,
    null,
    "",
    console.error,
    null
  );
  if (!root) {
    let canvas;
    if (target instanceof HTMLCanvasElement) {
      canvas = target;
    }
    if (!canvas) {
      canvas = document.createElement("canvas");
      target.innerHTML = "";
      target.appendChild(canvas);
    }
    internalState.canvas = canvas;
    const render = async (children, applicationOptions) => {
      if (!applicationState.app.renderer && !applicationState.isInitialised && !applicationState.isInitialising) {
        applicationState.isInitialising = true;
        await applicationState.app.init({
          ...applicationOptions,
          canvas
        });
        applicationState.isInitialising = false;
        applicationState.isInitialised = true;
        applicationState = { ...applicationState };
        (options.onInit ?? onInit)?.(applicationState.app);
      }
      Object.entries(applicationOptions).forEach(([key, value]) => {
        const typedKey = (
          /** @type {keyof ApplicationOptions} */
          key
        );
        if (isReadOnlyProperty.isReadOnlyProperty(
          applicationOptions,
          typedKey
        )) {
          return;
        }
        applicationState.app[typedKey] = value;
      });
      reconciler.reconciler.updateContainer(
        react.createElement(Context.ContextProvider, { value: applicationState }, children),
        fiber,
        null,
        () => void 0
      );
      return applicationState.app;
    };
    root = {
      applicationState,
      fiber,
      internalState,
      render
    };
    roots.roots.set(canvas, root);
  }
  return root;
}

exports.createRoot = createRoot;
//# sourceMappingURL=createRoot.js.map
