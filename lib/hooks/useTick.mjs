import { invariant } from '../helpers/invariant.mjs';
import { useApplication } from './useApplication.mjs';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.mjs';

"use strict";
function useTick(options, enabled = true) {
  const {
    app,
    isInitialised
  } = useApplication();
  let callback;
  let context;
  let isEnabled = enabled;
  let priority;
  if (typeof options === "function") {
    callback = options;
  } else {
    callback = options.callback;
    context = options.context;
    isEnabled = options.isEnabled ?? true;
    priority = options.priority;
  }
  invariant(typeof callback === "function", "`useTick` needs a callback function.");
  useIsomorphicLayoutEffect(() => {
    if (isInitialised) {
      const ticker = app?.ticker;
      const wasEnabled = isEnabled;
      const previousContext = context;
      const previousCallback = callback;
      if (isEnabled && ticker) {
        ticker.add(callback, context, priority);
      }
      return () => {
        if (wasEnabled) {
          ticker?.remove(previousCallback, previousContext);
        }
      };
    }
  }, [
    callback,
    context,
    isEnabled,
    isInitialised,
    priority
  ]);
}

export { useTick };
//# sourceMappingURL=useTick.mjs.map
