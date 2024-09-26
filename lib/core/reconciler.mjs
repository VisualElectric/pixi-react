import Reconciler from 'react-reconciler';
import packageData from '../package.json.mjs';
import { afterActiveInstanceBlur } from '../helpers/afterActiveInstanceBlur.mjs';
import { appendChild } from '../helpers/appendChild.mjs';
import { beforeActiveInstanceBlur } from '../helpers/beforeActiveInstanceBlur.mjs';
import { clearContainer } from '../helpers/clearContainer.mjs';
import { commitUpdate } from '../helpers/commitUpdate.mjs';
import { createInstance } from '../helpers/createInstance.mjs';
import { createTextInstance } from '../helpers/createTextInstance.mjs';
import { detachDeletedInstance } from '../helpers/detachDeletedInstance.mjs';
import { finalizeInitialChildren } from '../helpers/finalizeInitialChildren.mjs';
import { getChildHostContext } from '../helpers/getChildHostContext.mjs';
import { getCurrentEventPriority } from '../helpers/getCurrentEventPriority.mjs';
import { getInstanceFromNode } from '../helpers/getInstanceFromNode.mjs';
import { getInstanceFromScope } from '../helpers/getInstanceFromScope.mjs';
import { getPublicInstance } from '../helpers/getPublicInstance.mjs';
import { getRootHostContext } from '../helpers/getRootHostContext.mjs';
import { hideInstance } from '../helpers/hideInstance.mjs';
import { insertBefore } from '../helpers/insertBefore.mjs';
import { prepareForCommit } from '../helpers/prepareForCommit.mjs';
import { preparePortalMount } from '../helpers/preparePortalMount.mjs';
import { prepareScopeUpdate } from '../helpers/prepareScopeUpdate.mjs';
import { prepareUpdate } from '../helpers/prepareUpdate.mjs';
import { removeChild } from '../helpers/removeChild.mjs';
import { resetAfterCommit } from '../helpers/resetAfterCommit.mjs';
import { shouldSetTextContent } from '../helpers/shouldSetTextContent.mjs';
import { unhideInstance } from '../helpers/unhideInstance.mjs';

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

export { reconciler };
//# sourceMappingURL=reconciler.mjs.map
