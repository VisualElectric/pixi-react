import { Ticker } from 'pixi.js';
import {
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import { Application } from '../../../src/components/Application';
import { useTick } from '../../../src/hooks/useTick';
import {
    act,
    render,
    renderHook,
} from '@testing-library/react';

describe('useTick', () =>
{
    describe('with a function', () =>
    {
        it('runs the callback', async () =>
        {
            const useTickSpy = vi.fn();

            const TestComponent = () =>
            {
                useTick(useTickSpy);

                return null;
            };

            act(() => render(<TestComponent />, { wrapper: Application }));

            await expect.poll(() => useTickSpy.mock.lastCall?.[0]).toBeInstanceOf(Ticker);
        });
    });

    describe('with an options hash', () =>
    {
        it('runs the callback', async () =>
        {
            const useTickSpy = vi.fn();

            const TestComponent = () =>
            {
                useTick({ callback: useTickSpy });

                return null;
            };

            act(() => render(<TestComponent />, { wrapper: Application }));

            await expect.poll(() => useTickSpy.mock.lastCall?.[0]).toBeInstanceOf(Ticker);
        });
    });

    it('throws when not in a React Pixi tree', () =>
    {
        const renderer = () => act(() => renderHook(() => useTick(() => { /* noop */ })));

        expect(renderer).toThrowError(/no context found/i);
    });
});
