import { NETWORK_RANGES } from './networkRanges'

export interface Route {
  uuid: string
  address: string
  mask: string
  gateway: string
  interface: string
};

export type InterfaceType = keyof typeof NETWORK_RANGES
