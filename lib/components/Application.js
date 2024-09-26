'use strict';

var pixi_js = require('pixi.js');
var react = require('react');
var createRoot = require('../core/createRoot.js');
var roots = require('../core/roots.js');
var processUnmountQueue = require('../helpers/processUnmountQueue.js');
var queueForUnmount = require('../helpers/queueForUnmount.js');
var unqueueForUnmount = require('../helpers/unqueueForUnmount.js');
var useIsomorphicLayoutEffect = require('../hooks/useIsomorphicLayoutEffect.js');

"use strict";
const originalDefaultTextStyle = { ...pixi_js.TextStyle.defaultTextStyle };
const ApplicationFunction = (props, forwardedRef) => {
  const {
    attachToDevTools,
    children,
    className,
    defaultTextStyle,
    extensions,
    onInit,
    resizeTo,
    ...applicationProps
  } = props;
  const applicationRef = react.useRef(null);
  const canvasRef = react.useRef(null);
  const extensionsRef = react.useRef(/* @__PURE__ */ new Set());
  const updateResizeTo = react.useCallback(() => {
    const application = applicationRef.current;
    if (application) {
      if (resizeTo) {
        if ("current" in resizeTo) {
          if (resizeTo.current instanceof HTMLElement) {
            application.resizeTo = resizeTo.current;
          }
        } else {
        }
      } else {
        application.resizeTo = void 0;
      }
    }
  }, [resizeTo]);
  const handleInit = react.useCallback((application) => {
    processUnmountQueue.processUnmountQueue();
    if (forwardedRef && "current" in forwardedRef) {
      forwardedRef.current = application;
    }
    applicationRef.current = application;
    updateResizeTo();
    onInit?.(application);
    if (attachToDevTools) {
      const globalScope = globalThis;
      globalScope.__PIXI_APP__ = application;
      import('pixi.js').then((pixi) => {
        globalScope.__PIXI_DEVTOOLS__ = {
          app: application,
          pixi,
          renderer: application.renderer,
          stage: application.stage
        };
      });
    }
  }, [onInit]);
  useIsomorphicLayoutEffect.useIsomorphicLayoutEffect(() => {
    if (extensions) {
      const extensionsToHandle = [...extensions];
      const extensionsState = extensionsRef.current;
      for (const extension of extensionsState.values()) {
        const extensionIndex = extensionsToHandle.indexOf(extension);
        if (extensionIndex === -1) {
          pixi_js.extensions.remove(extension);
          extensionsState.delete(extension);
        }
        extensionsToHandle.splice(extensionIndex, 1);
      }
      for (const extension in extensionsToHandle) {
        pixi_js.extensions.add(extension);
        extensionsState.add(extension);
      }
    }
  }, [extensions]);
  useIsomorphicLayoutEffect.useIsomorphicLayoutEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      let root = roots.roots.get(canvasElement);
      if (!root) {
        root = createRoot.createRoot(canvasElement, {}, handleInit);
      }
      root.render(children, applicationProps);
    }
  }, [
    applicationProps,
    children,
    handleInit,
    resizeTo
  ]);
  useIsomorphicLayoutEffect.useIsomorphicLayoutEffect(() => {
    updateResizeTo();
  }, [resizeTo]);
  useIsomorphicLayoutEffect.useIsomorphicLayoutEffect(() => {
    if (defaultTextStyle) {
      Object.assign(pixi_js.TextStyle.defaultTextStyle, defaultTextStyle);
    } else {
      Object.assign(pixi_js.TextStyle.defaultTextStyle, originalDefaultTextStyle);
    }
  }, [defaultTextStyle]);
  react.useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      unqueueForUnmount.unqueueForUnmount(canvasElement);
      return () => {
        queueForUnmount.queueForUnmount(canvasElement);
      };
    }
  }, []);
  return react.createElement("canvas", {
    className,
    ref: canvasRef
  });
};
ApplicationFunction.displayName = "Application";
const Application = react.forwardRef(ApplicationFunction);

exports.Application = Application;
exports.ApplicationFunction = ApplicationFunction;
//# sourceMappingURL=Application.js.map
