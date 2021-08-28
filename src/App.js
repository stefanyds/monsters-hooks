import { useEffect, useState } from 'react';
import { getMonsters } from './api';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => { 
    getMonsters().then((response) => {
      setMonsters(response.data)
    })
  }, []);

  useEffect(() => {
    if (search.length > 0){
      console.log("search=", search)
    }
  }, [search]);


  return (
    <div className="App">
      <h1>Monsters Hooks</h1>
      <input type="search" 
      placeholder="busca de monstros" 
      onChange={(e) => setSearch(e.target.value)}
      />
      {
        monsters
        .filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()))
        .map(monster => (
          <p key={monster.id}> {monster.name} </p>
        ))
      }
    </div>
  );
}

export default App;
