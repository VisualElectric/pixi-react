'use strict';

var appendChild = require('./appendChild.js');
var createInstance = require('./createInstance.js');
var removeChild = require('./removeChild.js');

"use strict";
function switchInstance(instance, type, newProps, fiber) {
  const parent = instance.__pixireact?.parent;
  if (!parent) {
    return;
  }
  const root = instance.__pixireact.root;
  const newInstance = createInstance.createInstance(type, newProps, root);
  if (!instance.__pixireact.autoRemovedBeforeAppend) {
    removeChild.removeChild(parent, instance);
  }
  if (newInstance.parent) {
    newInstance.__pixireact.autoRemovedBeforeAppend = true;
  }
  appendChild.appendChild(parent, newInstance);
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

exports.switchInstance = switchInstance;
//# sourceMappingURL=switchInstance.js.map
