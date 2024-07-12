import { log } from './log.ts';

/** Store info before React starts making changes tothe tree. */
export function prepareForCommit()
{
    log('info', 'lifecycle::prepareForCommit');

    return null;
}