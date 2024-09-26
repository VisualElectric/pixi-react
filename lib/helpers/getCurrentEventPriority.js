'use strict';

var constants_js = require('react-reconciler/constants.js');
var log = require('./log.js');

"use strict";
function getCurrentEventPriority() {
  log.log("info", "lifecycle::getCurrentEventPriority");
  const globalScope = typeof self !== "undefined" && self || typeof window !== "undefined" && window;
  if (!globalScope) {
    return constants_js.DefaultEventPriority;
  }
  const name = globalScope.event?.type;
  switch (name) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return constants_js.DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return constants_js.ContinuousEventPriority;
    default:
      return constants_js.DefaultEventPriority;
  }
}

exports.getCurrentEventPriority = getCurrentEventPriority;
//# sourceMappingURL=getCurrentEventPriority.js.map
