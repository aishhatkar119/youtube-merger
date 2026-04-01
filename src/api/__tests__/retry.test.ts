import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { withRetry } from '../retry.js';

describe('withRetry', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns success with data', async () => {
    const r = await withRetry(async () => ({ id: 'x' }), 'op');
    expect(r).toEqual({ status: 'success', data: { id: 'x' } });
  });

  it('returns duplicate on HTTP 409', async () => {
    const err = Object.assign(new Error('conflict'), {
      response: { status: 409 },
    });
    const r = await withRetry(async () => Promise.reject(err), 'op', 1);
    expect(r).toEqual({ status: 'duplicate' });
  });
});
