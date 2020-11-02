import React, {useState, useEffect} from 'react';
import './App.css';

import Card from './components/card/Card'
import Loading from './components/loading/Loading'
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
  const [selected, setSelected] = useState<any>(null)

  useEffect(() => {
    setCharacters(data)
  },[data])

  const renderCards = () => {
    if(!characters) return
    return characters.map(c => <Card key={c.id} imgSrc={c.source} title={c.title} handleClick={() => handleEdit(c)} />)
  }

  const handleEdit = (char) => {
    setActive(true)
    setSelected(char)
  }

  const handleUpdateCharacter = (id, source, title,) => {
   const newData = [...characters]
   let index = newData.findIndex((el) => el.id === id)
   newData[index] = {id: id, source: source, title: title}
    setCharacters(newData)
  }


  const empty = characters.length === 0;
  return (
    <div className="App">
      <Modal data={selected} handleUpdate={handleUpdateCharacter} handleClick={() => setActive(false)} isActive={active} title="Edit Superhero" />
      {loading ? <div className="Message"><Loading loading={loading}/></div> : renderCards()}
      {error && <div className="Message">Could not retrieve data</div>}
      {!loading && empty && <div className="Message">Empty data</div>}
    </div>
  );
}

export default App;
