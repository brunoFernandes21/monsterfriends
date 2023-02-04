import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll"

const App = () => {
  const [ allRobots, setAllRobots ] = useState([]);
  const [ searchFieldValue, setSearchFieldValue ] = useState("");
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setAllRobots(data)
      setLoading(false)
    }
    getUsers() 
  }, [])
  const onSearchChange = (event) => {
    const { value } = event.target;
    setSearchFieldValue(value);
  };
  const filteredRobots = allRobots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
  });

  if(loading) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Monsterfriends</h1>
        <SearchBox searchFieldValue={searchFieldValue} handleChange={onSearchChange} />
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    )
  }
};

export default App;
