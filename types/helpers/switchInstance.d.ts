import type { Fiber } from 'react-reconciler';
import type { HostConfig } from '../typedefs/HostConfig';
export declare function switchInstance(instance: HostConfig['instance'], type: HostConfig['type'], newProps: HostConfig['props'], fiber: Fiber): void;
