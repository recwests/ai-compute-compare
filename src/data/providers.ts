export type ProviderMeta = {
  name: string;
  slug: string;
  type: 'centralized' | 'decentralized';
  affiliateBase: string; // куда вести (пока обычный URL, позже affiliate)
  homepage: string;
};

export const providers: Record<string, ProviderMeta> = {
  runpod: {
    name: 'RunPod',
    slug: 'runpod',
    type: 'centralized',
    affiliateBase: 'https://www.runpod.io/',
    homepage: 'https://www.runpod.io/',
  },
  vast: {
    name: 'Vast.ai',
    slug: 'vast',
    type: 'decentralized',
    affiliateBase: 'https://vast.ai/',
    homepage: 'https://vast.ai/',
  },
  lambda: {
    name: 'Lambda',
    slug: 'lambda',
    type: 'centralized',
    affiliateBase: 'https://lambdalabs.com/',
    homepage: 'https://lambdalabs.com/',
  },
};
