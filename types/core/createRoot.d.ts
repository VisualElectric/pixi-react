import { Application } from 'pixi.js';
import type { CreateRootOptions } from '../typedefs/CreateRootOptions';
/** Creates a new root for a Pixi React app. */
export declare function createRoot(
/** @description The DOM node which will serve as the root for this tree. */
target: HTMLElement | HTMLCanvasElement, 
/** @description Options to configure the tree. */
options?: CreateRootOptions, 
/**
 * @deprecated
 * @description Callback to be fired when the application finishes initializing.
 */
onInit?: (app: Application) => void): import("../typedefs/Root").Root;
