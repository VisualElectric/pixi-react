'use strict';

var applyProps = require('./applyProps.js');
var log = require('./log.js');
var switchInstance = require('./switchInstance.js');

"use strict";
function commitUpdate(instance, updatePayload, type, _oldProps, newProps, fiber) {
  log.log("info", "lifecycle::commitUpdate");
  const {
    diff,
    shouldReconstruct
  } = updatePayload;
  if (shouldReconstruct) {
    switchInstance.switchInstance(instance, type, newProps, fiber);
  } else if (diff) {
    applyProps.applyProps(instance, diff);
  }
}

exports.commitUpdate = commitUpdate;
//# sourceMappingURL=commitUpdate.js.map
