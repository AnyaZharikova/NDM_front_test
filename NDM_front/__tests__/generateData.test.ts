import { isIP } from 'is-ip'
import { generateData } from '../src/data/generateData'
import type { Route } from '../src/data/routeTypes'

let routes: Route[]

beforeEach(() => {
  routes = generateData(10)
})

describe('should be valid address and gateway', () => {
  test('all route addresses should be valid IPs', () => {
    for (const route of routes) {
      expect(isIP(route.address.split('/')[0])).toBe(true)
    }
  })

  test('all route gateways should be valid IPs', () => {
    for (const route of routes) {
      expect(isIP(route.gateway)).toBe(true)
    }
  })
})

describe('generate data (10 routes)', () => {
  test('should generate 10 routes', () => {
    expect(routes.length).toEqual(10)
  })

  test('should generate unique addresses', () => {
    const addresses = routes.map(route => route.address)
    const uniqueAddresses = new Set(addresses)
    expect(uniqueAddresses.size).toBe(10)
  })

  test('check required fields', () => {
    for (const route of routes) {
      expect(route).toHaveProperty('uuid')
      expect(route).toHaveProperty('address')
      expect(route).toHaveProperty('mask')
      expect(route).toHaveProperty('gateway')
      expect(route).toHaveProperty('interface')
    }
  })
})

test('empty data', () => {
  expect(generateData(0)).toEqual([])
})
