'use strict';

var log = require('./log.js');

"use strict";
function getChildHostContext(parentHostContext) {
  log.log("info", "lifecycle::getChildHostContext");
  return parentHostContext;
}

exports.getChildHostContext = getChildHostContext;
//# sourceMappingURL=getChildHostContext.js.map
