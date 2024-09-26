import type { ProgressCallback, UnresolvedAsset } from 'pixi.js';
import type { AssetRetryOptions } from '../typedefs/AssetRetryOptions';
import type { ErrorCallback } from '../typedefs/ErrorCallback';
/** @deprecated Use `useAssets` instead. */
export declare function useAsset<T = any>(
/** @description Asset options. */
options: (UnresolvedAsset & AssetRetryOptions) | string, 
/** @description A function to be called when the asset loader reports loading progress. */
onProgress?: ProgressCallback, 
/** @description A function to be called when the asset loader reports loading progress. */
onError?: ErrorCallback): T;
