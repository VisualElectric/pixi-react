import { log } from './log.mjs';

"use strict";
function createTextInstance(_text, _rootContainer, _hostContext, _internalHandle) {
  log("info", "lifecycle::createTextInstance");
  throw new Error("Text instances are not yet supported. Please use a `<text>` component.");
  return _rootContainer;
}

export { createTextInstance };
//# sourceMappingURL=createTextInstance.mjs.map
