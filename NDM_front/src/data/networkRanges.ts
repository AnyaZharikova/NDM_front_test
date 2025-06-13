export const NETWORK_RANGES = {
  'Гостевая сеть': {
    base: '172',
    min: 16,
    max: 31,
    prefix: ['/24', '/25', '/32'],
  },
  'Домашняя сеть': {
    base: '192.168',
    min: 0,
    max: 255,
    prefix: ['/24', '/25'],
  },
  'Подключение Ethernet': {
    base: '10',
    min: 0,
    max: 255,
    prefix: ['/8', '/16'],
  },
} as const

const MASK: Record<string, string> = {
  '/8': '255.0.0.0',
  '/16': '255.255.0.0',
  '/24': '255.255.255.0',
  '/25': '255.255.255.128',
  '/30': '255.255.255.252',
  '/32': '255.255.255.255',
}

export function getMask(prefix: string): string {
  return MASK[prefix]
};
