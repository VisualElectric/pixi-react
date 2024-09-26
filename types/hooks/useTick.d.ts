import type { TickerCallback } from 'pixi.js';
import type { UseTickOptions } from '../typedefs/UseTickOptions';
/** Attaches a callback to the application's Ticker. */
export declare function useTick<T>(
/** @description The function to be called on each tick. */
options: TickerCallback<T> | UseTickOptions<T>, 
/**
 * @deprecated
 * @description Whether this callback is currently enabled.
 */
enabled?: boolean): void;
