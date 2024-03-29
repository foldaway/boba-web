export const ChainNames = {
  blackball: 'Blackball' as const,
  chicha: 'ChiCha' as const,
  eachACup: 'Each-A-Cup' as const,
  gongCha: 'Gong Cha' as const,
  koi: 'KOI' as const,
  liho: 'LiHO' as const,
  mrCoconut: 'Mr Coconut' as const,
  playmade: 'Playmade' as const,
  kopifellas: 'Kopifellas' as const,
  yakun: 'Ya Kun' as const,
};

export type ChainName = typeof ChainNames[keyof typeof ChainNames];

export const ChainColors = {
  [ChainNames.blackball]: '#3E2A35',
  [ChainNames.chicha]: '#5C8001',
  [ChainNames.eachACup]: '#F4B860',
  [ChainNames.gongCha]: '#8F2D56',
  [ChainNames.koi]: '#5CA4A9',
  [ChainNames.liho]: '#ED6A5A',
  [ChainNames.mrCoconut]: '#A5C882',
  [ChainNames.playmade]: '#7765E3',
  [ChainNames.kopifellas]: '#161616',
  [ChainNames.yakun]: '#ae003b',
};
