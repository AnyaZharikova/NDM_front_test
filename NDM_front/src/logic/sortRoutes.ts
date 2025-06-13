import type { Route } from '../data/routeTypes'

function parseIp(ipWithMask: string): number[] {
  const ip = ipWithMask.split('/')[0]
  const oktets = ip.split('.').map(el => Number(el))

  return oktets
};

function compareIp(ip1: string, ip2: string): number {
  const a = parseIp(ip1)
  const b = parseIp(ip2)

  for (let i = 0; i < 4; i += 1) {
    if (a[i] > b[i]) {
      return 1
    }

    if (a[i] < b[i]) {
      return -1
    }
  }

  return 0
};

function sortByGateway(routes: Route[], ascending = false): Route[] {
  const sortedRoutes = [...routes].sort((a, b) => {
    const compareGateway = compareIp(a.gateway, b.gateway)
    const compareAddresses = compareIp(a.address, b.address)

    if (compareGateway !== 0) {
      return ascending ? compareGateway : -compareGateway
    }

    if (compareAddresses !== 0) {
      return ascending ? compareAddresses : -compareAddresses
    }

    return 0
  })

  return sortedRoutes
}

function sortByAddresses(routes: Route[], ascending = false): Route[] {
  const sortedRoutes = [...routes].sort((a, b) => {
    const result = compareIp(a.address, b.address)
    return ascending ? result : -result
  })

  return sortedRoutes
}

function sortByInterface(routes: Route[], ascending = false): Route[] {
  const sortedRoutes = [...routes].sort((a, b) => {
    if (a.interface > b.interface) {
      return ascending ? 1 : -1
    }
    if (a.interface < b.interface) {
      return ascending ? -1 : 1
    }

    const ipComparison = compareIp(a.address, b.address)
    return ascending ? ipComparison : -ipComparison
  })

  return sortedRoutes
}

function sortRoutes(
  routes: Route[],
  sortBy: 'address' | 'gateway' | 'interface',
  ascending = true,
): Route[] {
  switch (sortBy) {
    case 'address':
      return sortByAddresses(routes, ascending)
    case 'gateway':
      return sortByGateway(routes, ascending)
    case 'interface':
      return sortByInterface(routes, ascending)
    default:
      return routes
  }
}

export { sortRoutes }
