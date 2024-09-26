import { TextStyle, extensions } from 'pixi.js';
import { useRef, useCallback, useEffect, createElement, forwardRef } from 'react';
import { createRoot } from '../core/createRoot.mjs';
import { roots } from '../core/roots.mjs';
import { processUnmountQueue } from '../helpers/processUnmountQueue.mjs';
import { queueForUnmount } from '../helpers/queueForUnmount.mjs';
import { unqueueForUnmount } from '../helpers/unqueueForUnmount.mjs';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect.mjs';

"use strict";
const originalDefaultTextStyle = { ...TextStyle.defaultTextStyle };
const ApplicationFunction = (props, forwardedRef) => {
  const {
    attachToDevTools,
    children,
    className,
    defaultTextStyle,
    extensions: extensions$1,
    onInit,
    resizeTo,
    ...applicationProps
  } = props;
  const applicationRef = useRef(null);
  const canvasRef = useRef(null);
  const extensionsRef = useRef(/* @__PURE__ */ new Set());
  const updateResizeTo = useCallback(() => {
    const application = applicationRef.current;
    if (application) {
      if (resizeTo) {
        if ("current" in resizeTo) {
          if (resizeTo.current instanceof HTMLElement) {
            application.resizeTo = resizeTo.current;
          }
        } else {
          application.resizeTo = resizeTo;
        }
      } else {
        application.resizeTo = void 0;
      }
    }
  }, [resizeTo]);
  const handleInit = useCallback((application) => {
    processUnmountQueue();
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
  useIsomorphicLayoutEffect(() => {
    if (extensions$1) {
      const extensionsToHandle = [...extensions$1];
      const extensionsState = extensionsRef.current;
      for (const extension of extensionsState.values()) {
        const extensionIndex = extensionsToHandle.indexOf(extension);
        if (extensionIndex === -1) {
          extensions.remove(extension);
          extensionsState.delete(extension);
        }
        extensionsToHandle.splice(extensionIndex, 1);
      }
      for (const extension in extensionsToHandle) {
        extensions.add(extension);
        extensionsState.add(extension);
      }
    }
  }, [extensions$1]);
  useIsomorphicLayoutEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      let root = roots.get(canvasElement);
      if (!root) {
        root = createRoot(canvasElement, {}, handleInit);
      }
      root.render(children, applicationProps);
    }
  }, [
    applicationProps,
    children,
    handleInit,
    resizeTo
  ]);
  useIsomorphicLayoutEffect(() => {
    updateResizeTo();
  }, [resizeTo]);
  useIsomorphicLayoutEffect(() => {
    if (defaultTextStyle) {
      Object.assign(TextStyle.defaultTextStyle, defaultTextStyle);
    } else {
      Object.assign(TextStyle.defaultTextStyle, originalDefaultTextStyle);
    }
  }, [defaultTextStyle]);
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      unqueueForUnmount(canvasElement);
      return () => {
        queueForUnmount(canvasElement);
      };
    }
  }, []);
  return createElement("canvas", {
    className,
    ref: canvasRef
  });
};
ApplicationFunction.displayName = "Application";
const Application = forwardRef(ApplicationFunction);

export { Application, ApplicationFunction };
//# sourceMappingURL=Application.mjs.map
