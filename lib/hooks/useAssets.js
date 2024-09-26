'use strict';

var pixi_js = require('pixi.js');
var react = require('react');
var UseAssetsStatus = require('../constants/UseAssetsStatus.js');
var getAssetKey = require('../helpers/getAssetKey.js');

"use strict";
const errorCache = /* @__PURE__ */ new Map();
function assetsLoadedTest(asset) {
  return pixi_js.Cache.has(getAssetKey.getAssetKey(asset));
}
function useAssets(assets, options = {}) {
  const [state, setState] = react.useState({
    assets: Array(assets.length).fill(void 0),
    isError: false,
    isPending: true,
    isSuccess: false,
    status: UseAssetsStatus.UseAssetsStatus.PENDING
  });
  if (typeof window === "undefined") {
    return state;
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
      }
      setState((previousState) => ({
        ...previousState,
        error: cachedState?.error,
        isError: true,
        isPending: false,
        isSuccess: false,
        status: UseAssetsStatus.UseAssetsStatus.ERROR
      }));
    }
    pixi_js.Assets.load(assets, (progressValue) => {
      if (typeof onProgress === "function") {
        onProgress(progressValue);
      }
    }).then(() => {
      const assetKeys = assets.map((asset) => getAssetKey.getAssetKey(asset));
      const resolvedAssetsDictionary = pixi_js.Assets.get(assetKeys);
      setState((previousState) => ({
        ...previousState,
        assets: assets.map((_asset, index) => resolvedAssetsDictionary[index]),
        isError: false,
        isPending: false,
        isSuccess: true,
        status: UseAssetsStatus.UseAssetsStatus.SUCCESS
      }));
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
  return state;
}

exports.useAssets = useAssets;
//# sourceMappingURL=useAssets.js.map
