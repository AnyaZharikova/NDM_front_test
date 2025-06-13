import { Route } from '../src/data/routeTypes'

const emptyRoutes: Route[] = []

const routes = [
  {
    uuid: '737e66e6-8bf3-4e43-aea1-2cf5c09acb21',
    address: '192.168.127.0/24',
    mask: '255.255.255.0',
    gateway: '192.168.127.1',
    interface: 'Домашняя сеть',
  },
  {
    uuid: '142a9188-8e39-460f-880e-d7c08c7b32e1',
    address: '172.23.0.0/32',
    mask: '255.255.255.255',
    gateway: '0.0.0.0',
    interface: 'Гостевая сеть',
  },
  {
    uuid: 'df598595-2b3a-43ba-8286-d4e37d0c6179',
    address: '172.19.0.0/24',
    mask: '255.255.255.0',
    gateway: '172.19.0.1',
    interface: 'Гостевая сеть',
  },
  {
    uuid: '7670bbfa-cfd6-499e-ae8d-86934e877bcd',
    address: '10.189.14.0/8',
    mask: '255.0.0.0',
    gateway: '0.0.0.0',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '53e22f8b-c130-442e-adb7-2a74963b493c',
    address: '192.168.19.0/24',
    mask: '255.255.255.0',
    gateway: '192.168.19.1',
    interface: 'Домашняя сеть',
  },
]

const singleRoute = [routes[0]]

export {
  singleRoute,
  emptyRoutes,
  routes,
}
