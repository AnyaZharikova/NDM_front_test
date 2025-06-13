import { v4 } from 'uuid'
import type { Route, InterfaceType } from './routeTypes'
import { NETWORK_RANGES, getMask } from './networkRanges'

function getRandomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function getRandomPrefix(type: InterfaceType): string {
  const prefixes = NETWORK_RANGES[type].prefix
  const randomIndex = getRandomNum(0, prefixes.length - 1)
  return prefixes[randomIndex]
};

function getRandomInterface(): InterfaceType {
  const keys = Object.keys(NETWORK_RANGES) as InterfaceType[]
  const index = getRandomNum(0, keys.length - 1)
  return keys[index]
};

function getGuestIp(): Route {
  const typeKey: InterfaceType = 'Гостевая сеть'
  const type = NETWORK_RANGES[typeKey]
  const x = getRandomNum(type.min, type.max)
  const prefix = getRandomPrefix(typeKey)
  const gateway = Math.random() > 0.5 ? '0.0.0.0' : `${type.base}.${x}.0.1`

  return {
    uuid: v4(),
    address: `${type.base}.${x}.0.0${prefix}`,
    mask: getMask(prefix),
    gateway,
    interface: typeKey,
  }
};

function getHostIp(): Route {
  const typeKey: InterfaceType = 'Домашняя сеть'
  const type = NETWORK_RANGES[typeKey]
  const x = getRandomNum(type.min, type.max)
  const prefix = getRandomPrefix(typeKey)
  const gateway = Math.random() > 0.5 ? '0.0.0.0' : `${type.base}.${x}.1`

  return {
    uuid: v4(),
    address: `${type.base}.${x}.0${prefix}`,
    mask: getMask(prefix),
    gateway,
    interface: typeKey,
  }
};

function getEthernetIp(): Route {
  const typeKey: InterfaceType = 'Подключение Ethernet'
  const type = NETWORK_RANGES[typeKey]
  const x = getRandomNum(type.min, type.max)
  const y = getRandomNum(type.min, type.max)
  const prefix = getRandomPrefix(typeKey)
  const gateway = Math.random() > 0.5 ? '0.0.0.0' : `${type.base}.${x}.${y}.1`

  return {
    uuid: v4(),
    address: `${type.base}.${x}.${y}.0${prefix}`,
    mask: getMask(prefix),
    gateway,
    interface: typeKey,
  }
};

function selectInterface(type: InterfaceType): Route {
  switch (type) {
    case 'Гостевая сеть':
      return getGuestIp()
    case 'Домашняя сеть':
      return getHostIp()
    case 'Подключение Ethernet':
      return getEthernetIp()
    default:
      throw new Error(`Unknown interface type: ${type as string}`)
  }
}

function generateData(nubmerOfRoutes: number): Route[] {
  const data: Route[] = []
  const usedAddresses: string[] = []

  while (data.length < nubmerOfRoutes) {
    const interfaceType = getRandomInterface()
    const route = selectInterface(interfaceType)

    if (!usedAddresses.includes(route.address)) {
      data.push(route)
      usedAddresses.push(route.address)
    }
  }

  return data
}

export { generateData }
