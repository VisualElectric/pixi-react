import { Cache, Assets } from 'pixi.js';
import { getAssetKey } from '../helpers/getAssetKey.mjs';

"use strict";
const errorCache = /* @__PURE__ */ new Map();
function useAsset(options, onProgress, onError) {
  if (typeof window === "undefined") {
    throw Object.assign(Error("`useAsset` will only run on the client."), {
      digest: "BAILOUT_TO_CLIENT_SIDE_RENDERING"
    });
  }
  const {
    maxRetries = 3,
    retryOnFailure = true
  } = typeof options !== "string" ? options : {};
  const assetKey = getAssetKey(options);
  if (!Cache.has(assetKey)) {
    let state = errorCache.get(options);
    if (state && (!retryOnFailure || state.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError?.(state.error);
      } else {
        throw state.error;
      }
    }
    throw Assets.load(options, onProgress).catch((error) => {
      if (!state) {
        state = {
          error,
          retries: 0
        };
      }
      errorCache.set(options, {
        ...state,
        error,
        retries: state.retries + 1
      });
    });
  }
  return Assets.get(assetKey);
}

export { useAsset };
//# sourceMappingURL=useAsset.mjs.map
