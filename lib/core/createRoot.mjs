import { Application } from 'pixi.js';
import { createElement } from 'react';
import { ConcurrentRoot } from 'react-reconciler/constants.js';
import { ContextProvider } from '../components/Context.mjs';
import { isReadOnlyProperty } from '../helpers/isReadOnlyProperty.mjs';
import { log } from '../helpers/log.mjs';
import { prepareInstance } from '../helpers/prepareInstance.mjs';
import { reconciler } from './reconciler.mjs';
import { roots } from './roots.mjs';

"use strict";
function createRoot(target, options = {}, onInit) {
  let root = roots.get(target);
  let applicationState = root?.applicationState ?? {
    isInitialised: false,
    isInitialising: false
  };
  const internalState = root?.internalState ?? {};
  if (root) {
    log("warn", "createRoot should only be called once!");
  } else {
    applicationState.app = new Application();
    internalState.rootContainer = prepareInstance(applicationState.app.stage);
  }
  const fiber = root?.fiber ?? reconciler.createContainer(
    internalState.rootContainer,
    ConcurrentRoot,
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
        if (isReadOnlyProperty(
          applicationOptions,
          typedKey
        )) {
          return;
        }
        applicationState.app[typedKey] = value;
      });
      reconciler.updateContainer(
        createElement(ContextProvider, { value: applicationState }, children),
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
    console.log("[pixi-react] createRoot", root);
    console.log("[pixi-react] createRoot canvas", canvas);
    roots.set(canvas, root);
  }
  console.log("[pixi-react] createRoot roots.size", roots.size);
  return root;
}

export { createRoot };
//# sourceMappingURL=createRoot.mjs.map
