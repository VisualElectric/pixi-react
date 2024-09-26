import type { UnresolvedAsset } from '../typedefs/UnresolvedAsset';
import type { UseAssetsOptions } from '../typedefs/UseAssetsOptions';
import type { UseAssetsResult } from '../typedefs/UseAssetsResult';
/** Loads assets, returning a hash of assets once they're loaded. */
export declare function useAssets<T = any>(
/** @description Assets to be loaded. */
assets: UnresolvedAsset[], 
/** @description Asset options. */
options?: UseAssetsOptions): UseAssetsResult<T>;
