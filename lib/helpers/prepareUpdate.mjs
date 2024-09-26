import { diffProps } from './diffProps.mjs';
import { log } from './log.mjs';

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

export { prepareUpdate };
//# sourceMappingURL=prepareUpdate.mjs.map
