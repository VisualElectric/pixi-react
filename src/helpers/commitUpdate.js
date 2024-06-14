import { applyProps } from '../helpers/applyProps.js';
import { log } from '../helpers/log.js';
import { switchInstance } from './switchInstance.js';

/** @typedef {import('../typedefs/DiffSet.js').DiffSet} DiffSet */
/** @typedef {import('../typedefs/HostConfig.js').HostConfig} HostConfig */
/** @typedef {import('../typedefs/Instance.js').Instance} Instance */
/** @typedef {import('../typedefs/InstanceProps.js').InstanceProps} InstanceProps */

/**
 * @param {Instance} instance The instance to mutate.
 * @param {[boolean, DiffSet]} updatePayload Changes to be applied.
 * @param {HostConfig['type']} type The type of the component.
 * @param {InstanceProps} _oldProps Unused.
 * @param {InstanceProps} newProps Updated properties.
 * @param {import('react-reconciler').Fiber} fiber
 */
export function commitUpdate(instance, updatePayload, type, _oldProps, newProps, fiber)
{
    log('info', 'lifecycle::commitUpdate');

    const [reconstruct, diff] = updatePayload;

    if (reconstruct)
    {
        switchInstance(instance, type, newProps, fiber);
    }
    else
    {
        applyProps(instance, diff);
    }
}
