'use strict';

var diffProps = require('./diffProps.js');
var log = require('./log.js');

"use strict";
function prepareUpdate(_instance, _type, oldProps, newProps) {
  log.log("info", "lifecycle::prepareUpdate");
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
  const diff = diffProps.diffProps(newPropsRest, oldPropsRest, true);
  if (diff.changes.length) {
    updatePayload.diff = diff;
  }
  return updatePayload;
}

exports.prepareUpdate = prepareUpdate;
//# sourceMappingURL=prepareUpdate.js.map
