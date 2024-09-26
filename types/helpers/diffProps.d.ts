import type { Change } from '../typedefs/Change';
import type { HostConfig } from '../typedefs/HostConfig';
export declare function diffProps(newProps: HostConfig['props'], oldProps?: HostConfig['props'], remove?: boolean): {
    changes: Change[];
};
