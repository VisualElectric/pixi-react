"use strict";
function isReadOnlyProperty(objectInstance, propertyKey) {
  const prototype = Object.getPrototypeOf(objectInstance);
  const propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, propertyKey);
  return !(typeof propertyDescriptor === "undefined" || propertyDescriptor.set);
}

export { isReadOnlyProperty };
//# sourceMappingURL=isReadOnlyProperty.mjs.map
