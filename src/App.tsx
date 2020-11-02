import React, {useState, useEffect} from 'react';
import './App.css';

import Card from './components/card/Card'
import Modal from './components/modal/Modal';
import useApi from './hooks/useApi'

interface ICharacters {
  id: string,
  source: string,
  title: string
}

function App() {
  const {data, error, loading} = useApi()
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    setCharacters(data)
  },[data])

  const renderCards = () => {
    if(!characters) return
    return characters.map(c => <Card key={c.id} imgSrc={c.source} title={c.title} />)
  }

  const empty = characters.length === 0;

  return (
    <div className="App">
      <Modal handleClick={() => setActive(false)} isActive={active} title="Edit Superhero" />
      {loading ? <div className="Message">Loading</div> : renderCards()}
      {error && <div className="Message">Could not retrieve data</div>}
      {!loading && empty && <div className="Message">Empty data</div>}
    </div>
  );
}

export default App;
