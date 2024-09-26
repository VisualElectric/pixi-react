import { appendChild } from './appendChild.mjs';
import { createInstance } from './createInstance.mjs';
import { removeChild } from './removeChild.mjs';

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

export { switchInstance };
//# sourceMappingURL=switchInstance.mjs.map
