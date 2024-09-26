'use strict';

var Reconciler = require('react-reconciler');
var _package = require('../package.json.js');
var afterActiveInstanceBlur = require('../helpers/afterActiveInstanceBlur.js');
var appendChild = require('../helpers/appendChild.js');
var beforeActiveInstanceBlur = require('../helpers/beforeActiveInstanceBlur.js');
var clearContainer = require('../helpers/clearContainer.js');
var commitUpdate = require('../helpers/commitUpdate.js');
var createInstance = require('../helpers/createInstance.js');
var createTextInstance = require('../helpers/createTextInstance.js');
var detachDeletedInstance = require('../helpers/detachDeletedInstance.js');
var finalizeInitialChildren = require('../helpers/finalizeInitialChildren.js');
var getChildHostContext = require('../helpers/getChildHostContext.js');
var getCurrentEventPriority = require('../helpers/getCurrentEventPriority.js');
var getInstanceFromNode = require('../helpers/getInstanceFromNode.js');
var getInstanceFromScope = require('../helpers/getInstanceFromScope.js');
var getPublicInstance = require('../helpers/getPublicInstance.js');
var getRootHostContext = require('../helpers/getRootHostContext.js');
var hideInstance = require('../helpers/hideInstance.js');
var insertBefore = require('../helpers/insertBefore.js');
var prepareForCommit = require('../helpers/prepareForCommit.js');
var preparePortalMount = require('../helpers/preparePortalMount.js');
var prepareScopeUpdate = require('../helpers/prepareScopeUpdate.js');
var prepareUpdate = require('../helpers/prepareUpdate.js');
var removeChild = require('../helpers/removeChild.js');
var resetAfterCommit = require('../helpers/resetAfterCommit.js');
var shouldSetTextContent = require('../helpers/shouldSetTextContent.js');
var unhideInstance = require('../helpers/unhideInstance.js');

"use strict";
const reconcilerConfig = {
  isPrimaryRenderer: false,
  noTimeout: -1,
  supportsHydration: false,
  supportsMutation: true,
  supportsPersistence: false,
  afterActiveInstanceBlur: afterActiveInstanceBlur.afterActiveInstanceBlur,
  appendChild: appendChild.appendChild,
  appendChildToContainer: appendChild.appendChild,
  appendInitialChild: appendChild.appendChild,
  beforeActiveInstanceBlur: beforeActiveInstanceBlur.beforeActiveInstanceBlur,
  cancelTimeout: clearTimeout,
  clearContainer: clearContainer.clearContainer,
  commitUpdate: commitUpdate.commitUpdate,
  createInstance: createInstance.createInstance,
  createTextInstance: createTextInstance.createTextInstance,
  detachDeletedInstance: detachDeletedInstance.detachDeletedInstance,
  finalizeInitialChildren: finalizeInitialChildren.finalizeInitialChildren,
  getChildHostContext: getChildHostContext.getChildHostContext,
  getCurrentEventPriority: getCurrentEventPriority.getCurrentEventPriority,
  getInstanceFromNode: getInstanceFromNode.getInstanceFromNode,
  getInstanceFromScope: getInstanceFromScope.getInstanceFromScope,
  getPublicInstance: getPublicInstance.getPublicInstance,
  getRootHostContext: getRootHostContext.getRootHostContext,
  hideInstance: hideInstance.hideInstance,
  insertBefore: insertBefore.insertBefore,
  insertInContainerBefore: insertBefore.insertBefore,
  prepareForCommit: prepareForCommit.prepareForCommit,
  preparePortalMount: preparePortalMount.preparePortalMount,
  prepareScopeUpdate: prepareScopeUpdate.prepareScopeUpdate,
  prepareUpdate: prepareUpdate.prepareUpdate,
  removeChild: removeChild.removeChild,
  removeChildFromContainer: removeChild.removeChild,
  resetAfterCommit: resetAfterCommit.resetAfterCommit,
  scheduleTimeout: setTimeout,
  shouldSetTextContent: shouldSetTextContent.shouldSetTextContent,
  unhideInstance: unhideInstance.unhideInstance
};
const reconciler = Reconciler(reconcilerConfig);
reconciler.injectIntoDevTools({
  bundleType: process.env.NODE_ENV === "production" ? 0 : 1,
  rendererPackageName: "@pixi/react",
  version: _package.default.version
});

exports.reconciler = reconciler;
//# sourceMappingURL=reconciler.js.map
