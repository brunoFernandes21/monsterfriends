import { useState } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'

const App = () => {
  const [ allRobots, setAllRobots ] = useState(robots)
  const [ search, setSearch ] = useState("");

    const onSearchChange = (event) => {
        const { value } = event.target 
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(value.toLowerCase())
        })
        setSearch(value)
        setAllRobots(filteredRobots)
    }
  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBox search={ search } handleChange={ onSearchChange }/>
      <CardList robots={ allRobots }/>
    </div>
  )
}

export default App
