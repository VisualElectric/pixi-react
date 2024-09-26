import { Graphics, Container } from 'pixi.js';
import { PixiToReactEventPropNames, ReactToPixiEventPropNames } from '../constants/EventPropNames.mjs';
import { isUndefined, isNull } from './compare.mjs';
import { diffProps } from './diffProps.mjs';
import { isDiffSet } from './isDiffSet.mjs';
import { isReadOnlyProperty } from './isReadOnlyProperty.mjs';
import { log } from './log.mjs';

"use strict";
const DEFAULT = "__default";
const DEFAULTS_CONTAINERS = /* @__PURE__ */ new Map();
const PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN = {};
function targetKeyReducer(accumulator, key) {
  if (accumulator) {
    const value = accumulator[key];
    if (!isUndefined(value) && !isNull(value)) {
      return value;
    }
  }
  return accumulator;
}
function applyProps(instance, data) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __pixireact: instanceState = {},
    ...instanceProps
  } = instance;
  let typedData;
  if (isDiffSet(data)) {
    typedData = data;
  } else {
    typedData = diffProps(data, instanceProps);
  }
  const { changes } = typedData;
  let changeIndex = 0;
  while (changeIndex < changes.length) {
    const change = changes[changeIndex];
    let hasError = false;
    let key = change[0];
    let value = change[1];
    const isEvent = change[2];
    const keys = change[3];
    let currentInstance = instance;
    let targetProp = currentInstance[key];
    if (key === "draw" && typeof value === "function") {
      if (instance instanceof Graphics) {
        value(instance);
      } else {
        hasError = true;
        log("warn", `The \`draw\` prop was used on a \`${instanceState.type}\` component, but it's only valid on \`graphics\` components.`);
      }
    }
    if (key in PixiToReactEventPropNames) {
      const typedKey = key;
      hasError = true;
      if (!PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key]) {
        PIXI_EVENT_PROP_NAME_ERROR_HAS_BEEN_SHOWN[key] = true;
        log("warn", `Event names must be pascal case; instead of \`${key}\`, you probably want \`${PixiToReactEventPropNames[typedKey]}\`.`);
      }
    }
    if (!hasError) {
      if (keys.length) {
        targetProp = keys.reduce(targetKeyReducer, currentInstance);
        if (!(targetProp && targetProp.set)) {
          const [name, ...reverseEntries] = keys.reverse();
          currentInstance = reverseEntries.reverse().reduce(targetKeyReducer, currentInstance);
          key = name;
        }
      }
      if (value === `${DEFAULT}remove`) {
        if (currentInstance instanceof Container) {
          let ctor = DEFAULTS_CONTAINERS.get(currentInstance.constructor);
          if (!ctor) {
            ctor = /** @type {*} */
            currentInstance.constructor;
            ctor = new ctor();
            DEFAULTS_CONTAINERS.set(currentInstance.constructor, ctor);
          }
          value = ctor[key];
        } else {
          value = 0;
        }
      }
      if (isEvent && instanceState) {
        const typedKey = key;
        const pixiKey = ReactToPixiEventPropNames[typedKey];
        if (value) {
          currentInstance[pixiKey] = value;
        } else {
          delete currentInstance[pixiKey];
        }
      } else if (!isReadOnlyProperty(currentInstance, key)) {
        currentInstance[key] = value;
      }
    }
    changeIndex += 1;
  }
  return instance;
}

export { applyProps };
//# sourceMappingURL=applyProps.mjs.map
