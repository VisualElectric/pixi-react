'use strict';

var pixi_js = require('pixi.js');
var getAssetKey = require('../helpers/getAssetKey.js');

"use strict";
const errorCache = /* @__PURE__ */ new Map();
function assetsLoadedTest(asset) {
  return pixi_js.Cache.has(getAssetKey.getAssetKey(asset));
}
function useSuspenseAssets(assets, options = {}) {
  if (typeof window === "undefined") {
    throw Object.assign(Error("`useAssets` will only run on the client."), {
      digest: "BAILOUT_TO_CLIENT_SIDE_RENDERING"
    });
  }
  const {
    maxRetries = 3,
    onError,
    onProgress,
    retryOnFailure = true
  } = options;
  const allAssetsAreLoaded = assets.some(assetsLoadedTest);
  if (!allAssetsAreLoaded) {
    let cachedState = errorCache.get(assets);
    if (cachedState && (!retryOnFailure || cachedState.retries > maxRetries)) {
      if (typeof onError === "function") {
        onError(cachedState.error);
      } else {
        throw cachedState.error;
      }
    }
    throw pixi_js.Assets.load(assets, (progressValue) => {
      if (typeof onProgress === "function") {
        onProgress(progressValue);
      }
    }).catch((error) => {
      if (!cachedState) {
        cachedState = {
          error,
          retries: 0
        };
      }
      errorCache.set(assets, {
        ...cachedState,
        error,
        retries: cachedState.retries + 1
      });
    });
  }
  const assetKeys = assets.map((asset) => getAssetKey.getAssetKey(asset));
  const resolvedAssetsDictionary = pixi_js.Assets.get(assetKeys);
  return assets.map((_asset, index) => resolvedAssetsDictionary[index]);
}

exports.useSuspenseAssets = useSuspenseAssets;
//# sourceMappingURL=useSuspenseAssets.js.map
