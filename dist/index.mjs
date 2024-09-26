import { Filter, Container, Graphics, Application as Application$1, TextStyle, extensions, Cache, Assets } from 'pixi.js';
import { createContext, createElement, useLayoutEffect, useEffect, useRef, useCallback, forwardRef, useContext, useState, useMemo } from 'react';
import { DefaultEventPriority, ContinuousEventPriority, DiscreteEventPriority, ConcurrentRoot } from 'react-reconciler/constants.js';
import Reconciler from 'react-reconciler';

"use strict";
const Context = createContext({});
const ContextProvider = Context.Provider;
const ContextConsumer = Context.Consumer;

"use strict";
function isReadOnlyProperty(objectInstance, propertyKey) {
  const prototype = Object.getPrototypeOf(objectInstance);
  const propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, propertyKey);
  return !(typeof propertyDescriptor === "undefined" || propertyDescriptor.set);
}

"use strict";
const store = {
  debug: false,
  unmountQueue: /* @__PURE__ */ new Set()
};

"use strict";
function log(logType, ...args) {
  if (!store.debug) {
    return;
  }
  const logMethod = console[logType];
  if (!(logMethod instanceof Function)) {
    console.warn(`Attempted to create an invalid log type: "${logType}"`);
    return;
  }
  logMethod("@pixi/react", ...args);
}

"use strict";
function prepareInstance(component, state = {}) {
  const instance = component;
  instance.__pixireact = Object.assign({
    filters: [],
    parent: null,
    root: null,
    type: ""
  }, state);
  return instance;
}

var name = "@pixi/react";
var version = "0.0.0-development";
var description = "Write PixiJS applications using React declarative style.";
var keywords = [
	"react",
	"pixi"
];
var homepage = "https://github.com/pixijs/pixi-react#readme";
var bugs = {
	url: "https://github.com/pixijs/pixi-react/issues"
};
var repository = {
	type: "git",
	url: "git+https://github.com/pixijs/pixi-react.git"
};
var license = "MIT";
var exports = {
	".": {
		"import": {
			types: "./types/index.d.ts",
			"default": "./lib/index.mjs"
		},
		require: {
			types: "./types/index.d.ts",
			"default": "./lib/index.js"
		}
	}
};
var main = "lib/index.js";
var module = "lib/index.mjs";
var types = "types/index.d.ts";
var files = [
	"lib",
	"dist",
	"types"
];
var scripts = {
	build: "rimraf dist lib types && npm run lint:fix && rollup -c && tsc",
	clean: "xs clean",
	docs: "xs docs",
	lint: "xs lint",
	"lint:fix": "xs lint --fix",
	prepare: "husky install",
	prerelease: "npm run test:lint && npm run build",
	release: "xs bump,publish,git-push",
	test: "tsc --project tsconfig.test.json && vitest run",
	"test:e2e": "tsc --project tsconfig.test.json && vitest run e2e",
	"test:unit": "tsc --project tsconfig.test.json && vitest run unit",
	"test:lint": "xs lint",
	"test:watch": "vitest",
	watch: "rollup -w -c"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
var dependencies = {
	"react-reconciler": "0.29.2"
};
var devDependencies = {
	"@pixi/extension-scripts": "^2.4.1",
	"@rollup/plugin-commonjs": "^25.0.8",
	"@rollup/plugin-json": "^6.1.0",
	"@rollup/plugin-node-resolve": "^15.2.3",
	"@testing-library/jest-dom": "^6.4.8",
	"@testing-library/react": "^16.0.0",
	"@testing-library/user-event": "^14.5.2",
	"@types/eslint": "^8.56.10",
	"@types/react": "^18.3.2",
	"@types/react-reconciler": "0.28.8",
	"@vitejs/plugin-react": "^4.3.1",
	"@vitest/browser": "^2.0.4",
	canvas: "^2.11.2",
	husky: "^8.0.0",
	jsdom: "^25.0.0",
	"pixi.js": "8.2.6",
	playwright: "^1.45.3",
	react: "^18.3.1",
	"react-dom": "^18.3.1",
	rollup: "^4.18.0",
	"rollup-plugin-esbuild": "^6.1.1",
	"rollup-plugin-sourcemaps": "^0.6.3",
	typescript: "^5.4.5",
	vitest: "^2.0.0"
};
var peerDependencies = {
	"pixi.js": "^8.2.6",
	react: ">=18.0.0",
	"react-dom": ">=18.0.0"
};
var peerDependenciesMeta = {
	"react-dom": {
		optional: true
	}
};
var overrides = {
	rollup: "^4.18.0"
};
var publishConfig = {
	access: "public"
};
var extensionConfig = {
	lint: [
		"test",
		"lib"
	],
	environments: [
		"node"
	],
	docsName: "PixiJS React",
	docsTitle: "PixiJS React API Documentation",
	docsDescription: "Documentation for PixiJS React library",
	docsKeyword: "docs, documentation, pixi, pixijs, react, html5, javascript, jsdoc"
};
var packageData = {
	name: name,
	version: version,
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	exports: exports,
	main: main,
	module: module,
	types: types,
	files: files,
	scripts: scripts,
	husky: husky,
	"lint-staged": {
	"*.{ts,js,mjs}": [
		"eslint --cache --fix --max-warnings 0"
	]
},
	dependencies: dependencies,
	devDependencies: devDependencies,
	peerDependencies: peerDependencies,
	peerDependenciesMeta: peerDependenciesMeta,
	overrides: overrides,
	publishConfig: publishConfig,
	extensionConfig: extensionConfig
};

"use strict";
function afterActiveInstanceBlur() {
  log("info", "lifecycle::afterActiveInstanceBlur");
}

"use strict";
function attach(parentInstance, childInstance, targetIndex) {
  if (childInstance instanceof Filter) {
    childInstance.__pixireact.parent = parentInstance;
    if (typeof targetIndex === "number") {
      parentInstance.__pixireact.filters.splice(targetIndex, 0, childInstance);
    } else {
      parentInstance.__pixireact.filters.push(childInstance);
    }
    parentInstance.filters = parentInstance.__pixireact.filters;
  }
}

"use strict";
function appendChild(parentNode, childNode) {
  log("info", "lifecycle::appendChild");
  if (!childNode) {
    return;
  }
  if (childNode instanceof Container) {
    parentNode.addChild(childNode);
  } else if (childNode instanceof Filter) {
    attach(parentNode, childNode);
  }
}

"use strict";
function beforeActiveInstanceBlur() {
  log("info", "lifecycle::beforeActiveInstanceBlur");
}

"use strict";
function clearContainer() {
  log("info", "lifecycle::clearContainer");
  return false;
}

"use strict";
const PixiToReactEventPropNames = Object.freeze({
  onclick: "onClick",
  onglobalmousemove: "onGlobalMouseMove",
  onglobalpointermove: "onGlobalPointerMove",
  onglobaltouchmove: "onGlobalTouchMove",
  onmousedown: "onMouseDown",
  onmouseenter: "onMouseEnter",
  onmouseleave: "onMouseLeave",
  onmousemove: "onMouseMove",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  onmouseupoutside: "onMouseUpOutside",
  onpointercancel: "onPointerCancel",
  onpointerdown: "onPointerDown",
  onpointerenter: "onPointerEnter",
  onpointerleave: "onPointerLeave",
  onpointermove: "onPointerMove",
  onpointerout: "onPointerOut",
  onpointerover: "onPointerOver",
  onpointertap: "onPointerTap",
  onpointerup: "onPointerUp",
  onpointerupoutside: "onPointerUpOutside",
  onrightclick: "onRightClick",
  onrightdown: "onRightDown",
  onrightup: "onRightUp",
  onrightupoutside: "onRightUpOutside",
  ontap: "onTap",
  ontouchcancel: "onTouchCancel",
  ontouchend: "onTouchEnd",
  ontouchendoutside: "onTouchEndOutside",
  ontouchmove: "onTouchMove",
  ontouchstart: "onTouchStart",
  onwheel: "onWheel"
});
const ReactToPixiEventPropNames = Object.freeze({
  onClick: "onclick",
  onGlobalMouseMove: "onglobalmousemove",
  onGlobalPointerMove: "onglobalpointermove",
  onGlobalTouchMove: "onglobaltouchmove",
  onMouseDown: "onmousedown",
  onMouseEnter: "onmouseenter",
  onMouseLeave: "onmouseleave",
  onMouseMove: "onmousemove",
  onMouseOut: "onmouseout",
  onMouseOver: "onmouseover",
  onMouseUp: "onmouseup",
  onMouseUpOutside: "onmouseupoutside",
  onPointerCancel: "onpointercancel",
  onPointerDown: "onpointerdown",
  onPointerEnter: "onpointerenter",
  onPointerLeave: "onpointerleave",
  onPointerMove: "onpointermove",
  onPointerOut: "onpointerout",
  onPointerOver: "onpointerover",
  onPointerTap: "onpointertap",
  onPointerUp: "onpointerup",
  onPointerUpOutside: "onpointerupoutside",
  onRightClick: "onrightclick",
  onRightDown: "onrightdown",
  onRightUp: "onrightup",
  onRightUpOutside: "onrightupoutside",
  onTap: "ontap",
  onTouchCancel: "ontouchcancel",
  onTouchEnd: "ontouchend",
  onTouchEndOutside: "ontouchendoutside",
  onTouchMove: "ontouchmove",
  onTouchStart: "ontouchstart",
  onWheel: "onwheel"
});

"use strict";
function isArray(input) {
  return Array.isArray(input);
}
function isBoolean(input) {
  return typeof input === "boolean";
}
function isEqual(inputA, inputB, options = {
  arrays: "reference",
  objects: "reference",
  strict: true
}) {
  const {
    arrays,
    objects,
    strict
  } = options;
  if (typeof inputA !== typeof inputB || !!inputA !== !!inputB) {
    return false;
  }
  if (isString(inputA) || isNumber(inputA)) {
    return inputA === inputB;
  }
  const isInputAAnObject = isObject(inputA);
  if (isInputAAnObject && objects === "reference") {
    return inputA === inputB;
  }
  const isInputAAnArray = isArray(inputA);
  if (isInputAAnArray && arrays === "reference") {
    return inputA === inputB;
  }
  if ((isInputAAnArray || isInputAAnObject) && inputA === inputB) {
    return true;
  }
  let key;
  for (key in inputA) {
    if (!(key in inputB)) {
      return false;
    }
  }
  let input = inputA;
  if (strict) {
    input = inputB;
  }
  if (isInputAAnObject && arrays === "shallow" && objects === "shallow") {
    for (key in input) {
      const equalityCheckResult = isEqual(inputA[key], inputB[key], {
        strict,
        objects: "reference"
      });
      if (!equalityCheckResult) {
        return false;
      }
    }
  } else {
    for (key in input) {
      if (inputA[key] !== inputB[key]) {
        return false;
      }
    }
  }
  if (isUndefined(key)) {
    if (isInputAAnArray && inputA.length === 0 && inputB.length === 0) {
      return true;
    }
    if (isInputAAnObject && Object.keys(inputA).length === 0 && Object.keys(inputB).length === 0) {
      return true;
    }
    if (inputA !== inputB) {
      return false;
    }
  }
  return true;
}
function isFunction(input) {
  return typeof input === "function";
}
function isNull(input) {
  return input === null;
}
function isNumber(input) {
  return typeof input === "number";
}
function isObject(input) {
  if (input !== Object(input)) {
    return false;
  }
  if (isArray(input)) {
    return false;
  }
  if (typeof input === "function") {
    return false;
  }
  return true;
}
function isString(input) {
  return typeof input === "string";
}
function isUndefined(input) {
  return input === void 0;
}

"use strict";
const ReactIgnoredProps = Object.freeze([
  "children",
  "key",
  "ref"
]);

"use strict";
function gentleClone(object, ignoredKeys = []) {
  const cloneBase = {};
  return Object.entries(object).reduce((accumulator, [key, value]) => {
    if (!ignoredKeys.includes(key)) {
      accumulator[key] = value;
    }
    return accumulator;
  }, cloneBase);
}

"use strict";
function gentleCloneProps(props, additionalIgnoredProps = []) {
  return gentleClone(props, ReactIgnoredProps.concat(additionalIgnoredProps));
}

"use strict";
const DEFAULT$1 = "__default";
function diffProps(newProps, oldProps = {}, remove = false) {
  const newPropsRest = gentleCloneProps(newProps);
  const oldPropsRest = gentleCloneProps(oldProps);
  const entries = Object.entries(newPropsRest);
  const changes = [];
  if (remove) {
    const oldPropsKeys = Object.keys(oldPropsRest);
    let propIndex = 0;
    while (propIndex < oldPropsKeys.length) {
      const propKey = oldPropsKeys[propIndex];
      const isPropRemoved = !(propKey in newPropsRest);
      if (isPropRemoved) {
        entries.unshift([propKey, `${DEFAULT$1}remove`]);
      }
      propIndex += 1;
    }
  }
  entries.forEach(([key, value]) => {
    if (isEqual(value, oldPropsRest[key])) {
      return;
    }
    if (key in ReactToPixiEventPropNames) {
      changes.push([key, value, true, []]);
      return;
    }
    let entries2 = [];
    if (key.includes("-")) {
      entries2 = key.split("-");
    }
    changes.push([key, value, false, entries2]);
    for (const prop in newPropsRest) {
      const value2 = newPropsRest[prop];
      if (prop.startsWith(`${key}-`)) {
        changes.push([prop, value2, false, prop.split("-")]);
      }
    }
  });
  return { changes };
}

"use strict";
function isDiffSet(input) {
  const inputAsDiffSet = input;
  if (!inputAsDiffSet) {
    return false;
  }
  if (!inputAsDiffSet.changes) {
    return false;
  }
  return true;
}

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

"use strict";
const PixiReactIgnoredProps = Object.freeze([
  ...Object.keys(PixiToReactEventPropNames),
  "draw"
]);

"use strict";
const catalogue = {};

"use strict";
function convertStringToPascalCase(string) {
  const firstChar = string.charAt(0);
  const rest = string.substring(1);
  return `${firstChar.toUpperCase()}${rest}`;
}

"use strict";
function lowercaseFirstCharacter(_fullMatch, firstCharacter) {
  return firstCharacter.toLowerCase();
}
function parseComponentType(type) {
  let parsedType = type;
  if (type.startsWith("pixi")) {
    parsedType = type.replace(/^pixi([A-Z])/, lowercaseFirstCharacter);
  }
  return parsedType;
}

"use strict";
function createInstance(type, props, root) {
  log("info", "lifecycle::createInstance");
  const parsedType = parseComponentType(type);
  const name = convertStringToPascalCase(parsedType);
  if (!(name in catalogue)) {
    throw new Error(`${name} is not part of the PIXI namespace! Did you forget to extend?`);
  }
  const PixiComponent = catalogue[name];
  const pixiProps = gentleCloneProps(props, PixiReactIgnoredProps);
  Object.entries(props).forEach(([key, value]) => {
    if (key in ReactToPixiEventPropNames) {
      const pixiEventName = ReactToPixiEventPropNames[key];
      pixiProps[pixiEventName] = value;
    }
  });
  const instance = prepareInstance(new PixiComponent(pixiProps), {
    root,
    type: parsedType
  });
  applyProps(instance, props);
  return instance;
}

"use strict";
function detach(childInstance) {
  if (childInstance instanceof Filter) {
    const parentInstance = childInstance.__pixireact.parent;
    if (parentInstance) {
      const filterIndex = parentInstance.__pixireact.filters.indexOf(childInstance);
      parentInstance.__pixireact.filters.splice(filterIndex, 1);
      parentInstance.filters = parentInstance.__pixireact.filters;
    }
    childInstance.__pixireact.parent = null;
  }
}

"use strict";
function removeChild(_parentInstance, childInstance) {
  log("info", "lifecycle::removeChild");
  if (childInstance instanceof Filter) {
    detach(childInstance);
  }
  childInstance.destroy();
}

"use strict";
function switchInstance(instance, type, newProps, fiber) {
  const parent = instance.__pixireact?.parent;
  if (!parent) {
    return;
  }
  const root = instance.__pixireact.root;
  const newInstance = createInstance(type, newProps, root);
  if (!instance.__pixireact.autoRemovedBeforeAppend) {
    removeChild(parent, instance);
  }
  if (newInstance.parent) {
    newInstance.__pixireact.autoRemovedBeforeAppend = true;
  }
  appendChild(parent, newInstance);
  const fibers = [fiber, fiber.alternate];
  fibers.forEach((fiber2) => {
    if (fiber2 !== null) {
      fiber2.stateNode = newInstance;
      if (fiber2.ref) {
        if (typeof fiber2.ref === "function") {
          fiber2.ref(newInstance);
        } else {
          const ref = fiber2.ref;
          ref.current = newInstance;
        }
      }
    }
  });
}

"use strict";
function commitUpdate(instance, updatePayload, type, _oldProps, newProps, fiber) {
  log("info", "lifecycle::commitUpdate");
  const {
    diff,
    shouldReconstruct
  } = updatePayload;
  if (shouldReconstruct) {
    switchInstance(instance, type, newProps, fiber);
  } else if (diff) {
    applyProps(instance, diff);
  }
}

"use strict";
function createTextInstance(_text, _rootContainer, _hostContext, _internalHandle) {
  log("info", "lifecycle::createTextInstance");
  throw new Error("Text instances are not yet supported. Please use a `<text>` component.");
  return _rootContainer;
}

"use strict";
function detachDeletedInstance() {
  log("info", "lifecycle::detachDeletedInstance");
}

"use strict";
function finalizeInitialChildren() {
  log("info", "lifecycle::finalizeInitialChildren");
  return false;
}

"use strict";
function getChildHostContext(parentHostContext) {
  log("info", "lifecycle::getChildHostContext");
  return parentHostContext;
}

"use strict";
function getCurrentEventPriority() {
  log("info", "lifecycle::getCurrentEventPriority");
  const globalScope = typeof self !== "undefined" && self || typeof window !== "undefined" && window;
  if (!globalScope) {
    return DefaultEventPriority;
  }
  const name = globalScope.event?.type;
  switch (name) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return ContinuousEventPriority;
    default:
      return DefaultEventPriority;
  }
}

"use strict";
function getInstanceFromNode() {
  log("info", "lifecycle::getInstanceFromNode");
  return null;
}

"use strict";
function getInstanceFromScope(scope) {
  log("info", "lifecycle:getInstanceFromScope");
  throw new Error("Not yet implemented.");
  return scope;
}

"use strict";
function getPublicInstance(instance) {
  log("info", "lifecycle::getPublicInstance");
  return instance;
}

"use strict";
function getRootHostContext() {
  log("info", "lifecycle::getRootHostContext");
  return null;
}

"use strict";
function hideInstance(instance) {
  if (instance instanceof Container) {
    instance.visible = false;
  } else if (instance instanceof Filter) {
    instance.enabled = false;
  }
}

"use strict";
function invariant(condition, format, ...args) {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, () => String(args[argIndex++])));
      error.name = "Invariant Violation";
    }
    throw error;
  }
}

"use strict";
function insertBefore(parentInstance, childInstance, beforeChildInstance) {
  log("info", "lifecycle::insertBefore");
  invariant(childInstance !== beforeChildInstance, "Cannot insert node before itself");
  if (childInstance instanceof Container) {
    const childContainerInstance = childInstance;
    const childContainer = childInstance;
    const beforeChildContainer = beforeChildInstance;
    if (childContainerInstance.parent === parentInstance) {
      parentInstance.removeChild(childContainer);
    }
    const index = parentInstance.getChildIndex(beforeChildContainer);
    parentInstance.addChildAt(childContainer, index);
  } else if (childInstance instanceof Filter) {
    const childFilterInstance = childInstance;
    const instanceState = childFilterInstance.__pixireact;
    const targetIndex = instanceState.filters.indexOf(beforeChildInstance);
    detach(childInstance);
    attach(parentInstance, childInstance, targetIndex);
  }
}

"use strict";
function prepareForCommit() {
  log("info", "lifecycle::prepareForCommit");
  return null;
}

"use strict";
function preparePortalMount() {
  log("info", "lifecycle::preparePortalMount");
}

"use strict";
function prepareScopeUpdate() {
  log("info", "lifecycle::prepareScopeUpdate");
}

"use strict";
function prepareUpdate(_instance, _type, oldProps, newProps) {
  log("info", "lifecycle::prepareUpdate");
  const updatePayload = {
    shouldReconstruct: false
  };
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: newChildren,
    ...newPropsRest
  } = newProps;
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: oldChildren,
    ...oldPropsRest
  } = oldProps;
  const diff = diffProps(newPropsRest, oldPropsRest, true);
  if (diff.changes.length) {
    updatePayload.diff = diff;
  }
  return updatePayload;
}

"use strict";
function resetAfterCommit() {
  log("info", "lifecycle::resetAfterCommit");
}

"use strict";
function shouldSetTextContent() {
  log("info", "lifecycle::shouldSetTextContent");
  return false;
}

"use strict";
function unhideInstance(instance) {
  if (instance instanceof Container) {
    instance.visible = true;
  } else if (instance instanceof Filter) {
    instance.enabled = true;
  }
}

"use strict";
const reconcilerConfig = {
  isPrimaryRenderer: false,
  noTimeout: -1,
  supportsHydration: false,
  supportsMutation: true,
  supportsPersistence: false,
  afterActiveInstanceBlur,
  appendChild,
  appendChildToContainer: appendChild,
  appendInitialChild: appendChild,
  beforeActiveInstanceBlur,
  cancelTimeout: clearTimeout,
  clearContainer,
  commitUpdate,
  createInstance,
  createTextInstance,
  detachDeletedInstance,
  finalizeInitialChildren,
  getChildHostContext,
  getCurrentEventPriority,
  getInstanceFromNode,
  getInstanceFromScope,
  getPublicInstance,
  getRootHostContext,
  hideInstance,
  insertBefore,
  insertInContainerBefore: insertBefore,
  prepareForCommit,
  preparePortalMount,
  prepareScopeUpdate,
  prepareUpdate,
  removeChild,
  removeChildFromContainer: removeChild,
  resetAfterCommit,
  scheduleTimeout: setTimeout,
  shouldSetTextContent,
  unhideInstance
};
const reconciler = Reconciler(reconcilerConfig);
reconciler.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@pixi/react",
  version: packageData.version
});

"use strict";
const roots = /* @__PURE__ */ new Map();

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
    applicationState.app = new Application$1();
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

"use strict";
function unmountRoot(root) {
  store.unmountQueue.delete(root);
  const fiber = root.fiber;
  if (fiber) {
    reconciler.updateContainer(null, fiber, null, () => {
      if (root.applicationState.app) {
        root.applicationState.app.destroy();
      }
      roots.delete(root.internalState.canvas);
      console.log("[pixi-react] unmountRoot size", roots.size);
    });
  }
}

"use strict";
function processUnmountQueue() {
  for (const root of store.unmountQueue) {
    unmountRoot(root);
  }
}

"use strict";
function queueForUnmount(canvas) {
  const root = roots.get(canvas);
  if (root) {
    if (root.applicationState.isInitialised) {
      unmountRoot(root);
    } else {
      store.unmountQueue.add(root);
    }
  }
}

"use strict";
function unqueueForUnmount(canvas) {
  const root = roots.get(canvas);
  if (root) {
    store.unmountQueue.delete(root);
  }
}

"use strict";
const useIsomorphicLayoutEffect = typeof window !== "undefined" && (window.document?.createElement || window.navigator?.product === "ReactNative") ? useLayoutEffect : useEffect;

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

"use strict";
const UseAssetsStatus = {
  ERROR: "error",
  PENDING: "pending",
  SUCCESS: "success"
};

"use strict";

"use strict";
function extend(objects) {
  Object.assign(catalogue, objects);
}

"use strict";
function useApp() {
  const { app } = useContext(Context);
  invariant(
    app instanceof Application$1,
    "No Context found with `%s`. Make sure to wrap component with `%s`",
    "Application",
    "AppProvider"
  );
  return app;
}

"use strict";
function useApplication() {
  const appContext = useContext(Context);
  invariant(
    appContext.app instanceof Application$1,
    "No Context found with `%s`. Make sure to wrap component with `%s`",
    "Application",
    "AppProvider"
  );
  return appContext;
}

"use strict";
function getAssetKey(asset) {
  let assetKey;
  if (typeof asset === "string") {
    assetKey = asset;
  } else {
    assetKey = asset.alias ?? asset.src;
  }
  return assetKey;
}

"use strict";
const errorCache$2 = /* @__PURE__ */ new Map();
function useAsset(options, onProgress, onError) {
  if (typeof window === "undefined") {
    throw Object.assign(Error("`useAsset` will only run on the client."), {
      digest: "BAILOUT_TO_CLIENT_SIDE_RENDERING"
    });
  }
  const {
    maxRetries = 3,
    retryOnFailure = true
  } = typeof options !== "string" ? options : {};
  const assetKey = getAssetKey(options);
  if (!Cache.has(assetKey)) {
    let state = errorCache$2.get(options);
    if (state && (!retryOnFailure || state.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError?.(state.error);
      } else {
        throw state.error;
      }
    }
    throw Assets.load(options, onProgress).catch((error) => {
      if (!state) {
        state = {
          error,
          retries: 0
        };
      }
      errorCache$2.set(options, {
        ...state,
        error,
        retries: state.retries + 1
      });
    });
  }
  return Assets.get(assetKey);
}

"use strict";
const errorCache$1 = /* @__PURE__ */ new Map();
function assetsLoadedTest$1(asset) {
  return Cache.has(getAssetKey(asset));
}
function useAssets(assets, options = {}) {
  const [state, setState] = useState({
    assets: Array(assets.length).fill(void 0),
    isError: false,
    isPending: true,
    isSuccess: false,
    status: UseAssetsStatus.PENDING
  });
  if (typeof window === "undefined") {
    return state;
  }
  const {
    maxRetries = 3,
    onError,
    onProgress,
    retryOnFailure = true
  } = options;
  const allAssetsAreLoaded = assets.some(assetsLoadedTest$1);
  if (!allAssetsAreLoaded) {
    let cachedState = errorCache$1.get(assets);
    if (cachedState && (!retryOnFailure || cachedState.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError(cachedState.error);
      }
      setState((previousState) => ({
        ...previousState,
        error: cachedState?.error,
        isError: true,
        isPending: false,
        isSuccess: false,
        status: UseAssetsStatus.ERROR
      }));
    }
    Assets.load(assets, (progressValue) => {
      if (typeof onProgress === "function") {
        onProgress(progressValue);
      }
    }).then(() => {
      const assetKeys = assets.map((asset) => getAssetKey(asset));
      const resolvedAssetsDictionary = Assets.get(assetKeys);
      setState((previousState) => ({
        ...previousState,
        assets: assets.map((_asset, index) => resolvedAssetsDictionary[index]),
        isError: false,
        isPending: false,
        isSuccess: true,
        status: UseAssetsStatus.SUCCESS
      }));
    }).catch((error) => {
      if (!cachedState) {
        cachedState = {
          error,
          retries: 0
        };
      }
      errorCache$1.set(assets, {
        ...cachedState,
        error,
        retries: cachedState.retries + 1
      });
    });
  }
  return state;
}

"use strict";
function useExtend(objects) {
  useMemo(() => {
    extend(objects);
  }, [objects]);
}

"use strict";
const errorCache = /* @__PURE__ */ new Map();
function assetsLoadedTest(asset) {
  return Cache.has(getAssetKey(asset));
}
function useSuspenseAssets(assets, options = {}) {
  if (typeof window === "undefined") {
    throw Object.assign(Error("`useAssets` will only run on the client."), {
      digest: "BAILOUT_TO_CLIENT_SIDE_RENDERING"
    });
  }
  const {
    maxRetries = 3,
    onError,
    onProgress,
    retryOnFailure = true
  } = options;
  const allAssetsAreLoaded = assets.some(assetsLoadedTest);
  if (!allAssetsAreLoaded) {
    let cachedState = errorCache.get(assets);
    if (cachedState && (!retryOnFailure || cachedState.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError(cachedState.error);
      } else {
        throw cachedState.error;
      }
    }
    throw Assets.load(assets, (progressValue) => {
      if (typeof onProgress === "function") {
        onProgress(progressValue);
      }
    }).catch((error) => {
      if (!cachedState) {
        cachedState = {
          error,
          retries: 0
        };
      }
      errorCache.set(assets, {
        ...cachedState,
        error,
        retries: cachedState.retries + 1
      });
    });
  }
  const assetKeys = assets.map((asset) => getAssetKey(asset));
  const resolvedAssetsDictionary = Assets.get(assetKeys);
  return assets.map((_asset, index) => resolvedAssetsDictionary[index]);
}

"use strict";
function useTick(options, enabled = true) {
  const {
    app,
    isInitialised
  } = useApplication();
  let callback;
  let context;
  let isEnabled = enabled;
  let priority;
  if (typeof options === "function") {
    callback = options;
  } else {
    callback = options.callback;
    context = options.context;
    isEnabled = options.isEnabled ?? true;
    priority = options.priority;
  }
  invariant(typeof callback === "function", "`useTick` needs a callback function.");
  useIsomorphicLayoutEffect(() => {
    if (isInitialised) {
      const ticker = app?.ticker;
      const wasEnabled = isEnabled;
      const previousContext = context;
      const previousCallback = callback;
      if (isEnabled && ticker) {
        ticker.add(callback, context, priority);
      }
      return () => {
        if (wasEnabled) {
          ticker?.remove(previousCallback, previousContext);
        }
      };
    }
  }, [
    callback,
    context,
    isEnabled,
    isInitialised,
    priority
  ]);
}

"use strict";
console.warn(`
Be aware that you are using a beta version of Pixi React.
- Things may be broken.
- Things may (but shouldn't) change.
- All functionality that's deprecated in the beta version WILL BE REMOVED for the production release.
`);

export { Application, UseAssetsStatus, createRoot, extend, useApp, useApplication, useAsset, useAssets, useExtend, useSuspenseAssets, useTick };
//# sourceMappingURL=index.mjs.map
