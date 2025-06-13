import Table from 'react-bootstrap/Table'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import type { Route } from '../data/routeTypes'

interface Props {
  routes: Route[]
  onSort: (field: 'address' | 'gateway' | 'interface') => void
  currentSort: 'address' | 'gateway' | 'interface'
  ascending: boolean
};

const RoutesTable = ({ routes, onSort, currentSort, ascending }: Props) => {
  function getAriaSort(
    currentSort: string,
    col: string,
    ascending: boolean,
  ): 'ascending' | 'descending' | 'none' {
    if (currentSort !== col) {
      return 'none'
    }

    return ascending ? 'ascending' : 'descending'
  };

  return (
    <Table className="table">
      <caption>
        Действующие маршруты IPv4
      </caption>
      <thead>
        <tr>
          <th>
            <button
              className="table-sort-button"
              type="button"
              onClick={() => onSort('address')}
              arai-sort={getAriaSort(currentSort, 'address', ascending)}
            >
              <span>Адрес назначения</span>
              {currentSort === 'address' ? (ascending ? <SlArrowUp /> : <SlArrowDown />) : null}
            </button>
          </th>
          <th>
            <button
              className="table-sort-button"
              type="button"
              onClick={() => onSort('gateway')}
              arai-sort={getAriaSort(currentSort, 'gateway', ascending)}
            >
              <span>Шлюз</span>
              {currentSort === 'gateway' ? (ascending ? <SlArrowUp /> : <SlArrowDown />) : null}
            </button>
          </th>
          <th>
            <button
              className="table-sort-button"
              type="button"
              onClick={() => onSort('interface')}
              arai-sort={getAriaSort(currentSort, 'interface', ascending)}
            >
              <span>Интерфейс</span>
              {currentSort === 'interface' ? (ascending ? <SlArrowUp /> : <SlArrowDown />) : null}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {routes.map(route => (
          <tr key={route.uuid}>
            <td>{route.address}</td>
            <td>{route.gateway}</td>
            <td>{route.interface}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default RoutesTable
