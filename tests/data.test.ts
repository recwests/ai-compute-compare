import { describe, it, expect } from 'vitest';
import { pricesArraySchema } from '../src/data/schema';
import raw from '../src/data/prices.json';

describe('prices.json', () => {
  it('matches schema', () => {
    expect(() => pricesArraySchema.parse(raw)).not.toThrow();
  });

  it('has at least 6 rows', () => {
    expect(pricesArraySchema.parse(raw).length).toBeGreaterThanOrEqual(6);
  });
});
