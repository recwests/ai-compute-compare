import { describe, it, expect } from 'vitest';
import { costFor } from '../src/lib/cost';

describe('costFor', () => {
  it('multiplies price by hours', () => {
    expect(costFor(2.5, 10)).toBe(25);
  });

  it('rounds to 2 decimals', () => {
    expect(costFor(0.336, 3)).toBe(1.01);
  });

  it('throws on negative hours', () => {
    expect(() => costFor(1, -1)).toThrow();
  });
});
