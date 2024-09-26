"use strict";
function getAssetKey(asset) {
  let assetKey;
  if (typeof asset === "string") {
    assetKey = asset;
  } else {
    assetKey = asset.alias ?? asset.src;
  }
  return assetKey;
}

export { getAssetKey };
//# sourceMappingURL=getAssetKey.mjs.map
