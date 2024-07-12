import { log } from './log.ts';

/** Determines whether to set the text content of a node. */
export function shouldSetTextContent()
{
    log('info', 'lifecycle::shouldSetTextContent');

    return false;
}