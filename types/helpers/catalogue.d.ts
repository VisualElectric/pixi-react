import type { HostConfig } from '../typedefs/HostConfig';
export declare const catalogue: {
    [name: string]: {
        new (...args: any): HostConfig['instance'];
    };
};
