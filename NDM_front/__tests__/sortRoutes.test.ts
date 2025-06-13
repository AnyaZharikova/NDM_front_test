import { InterfaceType } from '../src/data/routeTypes'
import { sortRoutes } from '../src/logic/sortRoutes'
import {
  emptyRoutes,
  routes,
  singleRoute,
} from '../__fixtures__/routes'
import {
  sortedByAddress,
  sortedByAddressDesc,
  sortedByGateway,
  sortedByGatewayDesc,
  sortedByInterface,
  sortedByInterfaceDesc,
} from '../__fixtures__/sortedRoutes'

test('empty list returns empty list', () => {
  expect(sortRoutes(emptyRoutes, 'address', true)).toEqual([])
})

test('single item list returns same list', () => {
  expect(sortRoutes(singleRoute, 'address', true)).toEqual(singleRoute)
})

describe('sort by address', () => {
  test('ascending', () => {
    expect(sortRoutes(routes, 'address', true)).toEqual(sortedByAddress)
  })
  test('descending', () => {
    expect(sortRoutes(routes, 'address', false)).toEqual(sortedByAddressDesc)
  })
})

describe('sort by gateway', () => {
  test('ascending', () => {
    expect(sortRoutes(routes, 'gateway', true)).toEqual(sortedByGateway)
  })
  test('descending', () => {
    expect(sortRoutes(routes, 'gateway', false)).toEqual(sortedByGatewayDesc)
  })
})

describe('sort by interface', () => {
  test('ascending', () => {
    expect(sortRoutes(routes, 'interface', true)).toEqual(sortedByInterface)
  })
  test('descending', () => {
    expect(sortRoutes(routes, 'interface', false)).toEqual(sortedByInterfaceDesc)
  })
})
