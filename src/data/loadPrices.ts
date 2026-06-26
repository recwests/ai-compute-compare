import raw from './prices.json';
import { pricesArraySchema, type Price } from './schema';

export function loadPrices(): Price[] {
  return pricesArraySchema.parse(raw);
}
