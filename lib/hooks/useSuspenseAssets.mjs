import { Cache, Assets } from 'pixi.js';
import { getAssetKey } from '../helpers/getAssetKey.mjs';

"use strict";
const errorCache = /* @__PURE__ */ new Map();
function assetsLoadedTest(asset) {
  return Cache.has(getAssetKey(asset));
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
    throw Assets.load(assets, (progressValue) => {
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
  const assetKeys = assets.map((asset) => getAssetKey(asset));
  const resolvedAssetsDictionary = Assets.get(assetKeys);
  return assets.map((_asset, index) => resolvedAssetsDictionary[index]);
}

export { useSuspenseAssets };
//# sourceMappingURL=useSuspenseAssets.mjs.map
