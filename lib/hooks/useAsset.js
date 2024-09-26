'use strict';

var pixi_js = require('pixi.js');
var getAssetKey = require('../helpers/getAssetKey.js');

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
  const assetKey = getAssetKey.getAssetKey(options);
  if (!pixi_js.Cache.has(assetKey)) {
    let state = errorCache.get(options);
    if (state && (!retryOnFailure || state.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError?.(state.error);
      } else {
        throw state.error;
      }
    }
    throw pixi_js.Assets.load(options, onProgress).catch((error) => {
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
  return pixi_js.Assets.get(assetKey);
}

exports.useAsset = useAsset;
//# sourceMappingURL=useAsset.js.map
