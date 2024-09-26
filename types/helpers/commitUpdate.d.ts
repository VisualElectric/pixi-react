import type { Fiber } from 'react-reconciler';
import type { HostConfig } from '../typedefs/HostConfig';
import type { UpdatePayload } from '../typedefs/UpdatePayload';
export declare function commitUpdate(instance: HostConfig['instance'], updatePayload: UpdatePayload, type: HostConfig['type'], _oldProps: HostConfig['props'], newProps: HostConfig['props'], fiber: Fiber): void;
