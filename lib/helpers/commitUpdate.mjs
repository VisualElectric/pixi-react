import { applyProps } from './applyProps.mjs';
import { log } from './log.mjs';
import { switchInstance } from './switchInstance.mjs';

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

export { commitUpdate };
//# sourceMappingURL=commitUpdate.mjs.map
