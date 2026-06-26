import { describe, it, expect } from 'vitest';
import { loadPrices } from '../src/data/loadPrices';

describe('price sorting', () => {
  it('sorts ascending by pricePerHourUsd', () => {
    const sorted = [...loadPrices()].sort((a, b) => a.pricePerHourUsd - b.pricePerHourUsd);
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i].pricePerHourUsd).toBeGreaterThanOrEqual(sorted[i - 1].pricePerHourUsd);
    }
  });

  it('cheapest row is the global minimum', () => {
    const prices = loadPrices();
    const min = Math.min(...prices.map((p) => p.pricePerHourUsd));
    const cheapest = [...prices].sort((a, b) => a.pricePerHourUsd - b.pricePerHourUsd)[0];
    expect(cheapest.pricePerHourUsd).toBe(min);
  });
});
