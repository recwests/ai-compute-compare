export function costFor(pricePerHour: number, hours: number): number {
  if (hours < 0 || pricePerHour < 0) throw new Error('inputs must be non-negative');
  return Math.round(pricePerHour * hours * 100) / 100;
}
