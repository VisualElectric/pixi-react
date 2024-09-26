import type { Container, Filter } from 'pixi.js';
import type { HostConfig } from '../typedefs/HostConfig';
import type { InstanceState } from '../typedefs/InstanceState';
/** Create the instance with the provided sate and attach the component to it. */
export declare function prepareInstance<T extends Container | Filter | HostConfig['instance']>(component: T, state?: Partial<InstanceState>): import("../typedefs/PixiReactNode").PixiReactNode;
