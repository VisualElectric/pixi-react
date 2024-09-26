import { log } from './log.mjs';

"use strict";
function getChildHostContext(parentHostContext) {
  log("info", "lifecycle::getChildHostContext");
  return parentHostContext;
}

export { getChildHostContext };
//# sourceMappingURL=getChildHostContext.mjs.map
