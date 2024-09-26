import type { UnresolvedAsset } from '../typedefs/UnresolvedAsset';
import type { UseAssetsOptions } from '../typedefs/UseAssetsOptions';
/** Loads assets, returning a hash of assets once they're loaded. Must be inside of a `<Suspense>` component. */
export declare function useSuspenseAssets<T = any>(
/** @description Assets to be loaded. */
assets: UnresolvedAsset[], 
/** @description Asset options. */
options?: UseAssetsOptions): T[];
