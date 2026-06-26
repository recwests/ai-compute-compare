import { z } from 'zod';

const urlString = z.string().regex(/^https?:\/\//, 'must be an http(s) URL');

export const PriceSchema = z.object({
  provider: z.string().min(1), // "RunPod"
  providerSlug: z.string().min(1), // "runpod"
  gpu: z.string().min(1), // "H100 80GB"
  gpuSlug: z.string().min(1), // "h100-80gb"
  pricePerHourUsd: z.number().positive(),
  billing: z.enum(['on-demand', 'spot', 'reserved']),
  region: z.string().nullable(),
  affiliateUrl: urlString,
  sourceUrl: urlString,
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // ISO date YYYY-MM-DD
});

export type Price = z.infer<typeof PriceSchema>;
export const pricesArraySchema = z.array(PriceSchema);
