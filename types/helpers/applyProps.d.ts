import type { DiffSet } from '../typedefs/DiffSet';
import type { HostConfig } from '../typedefs/HostConfig';
export type MaybeInstance = Partial<HostConfig['instance']>;
/** Apply properties to Pixi.js instance. */
export declare function applyProps(instance: MaybeInstance, data: HostConfig['props'] | DiffSet): Partial<import("../typedefs/PixiReactNode").PixiReactNode>;
