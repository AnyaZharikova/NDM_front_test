import { useEffect, useState } from 'react'
import type { Route } from '../data/routeTypes'
import { generateData } from '../data/generateData'
import { sortRoutes } from '../logic/sortRoutes'
import RoutesTable from './RoutesTable'

const numberOfRoutes = 9

const App = () => {
  const [routes, setRoutes] = useState<Route[]>([])
  const [sortBy, setSortBy] = useState<'address' | 'gateway' | 'interface'>('address')
  const [ascending, setAscending] = useState<boolean>(true)

  useEffect(() => {
    const generatedRoutes = generateData(numberOfRoutes)
    setRoutes(generatedRoutes)
  }, [])

  const handleSort = (field: 'address' | 'gateway' | 'interface') => {
    if (sortBy === field) {
      setAscending(!ascending)
    }
    else {
      setSortBy(field)
      setAscending(true)
    }

    setRoutes(prev => sortRoutes(prev, field, sortBy === field ? !ascending : true))
  }

  return (
    <div className="table-wrapper">
      <RoutesTable
        routes={routes}
        onSort={handleSort}
        currentSort={sortBy}
        ascending={ascending}
      />
    </div>
  )
}

export default App
