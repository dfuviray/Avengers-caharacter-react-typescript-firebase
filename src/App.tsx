import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from './firebase/config'

import Card from './components/card/Card'
import Loading from './components/loading/Loading'
import Modal from './components/modal/Modal';
import useApi from './hooks/useApi'
import Search from './components/search/Search';

interface ICharacters {
  id: string,
  source: string,
  title: string
}

function App() {
  const {data, error, loading} = useApi()
  const [characters, setCharacters] = useState<ICharacters[] | any>([]);
  const [active, setActive] = useState<boolean>(false)
  const [selected, setSelected] = useState<any>(null)
  const [modalAdd, setModalAdd] = useState(false)
  const [sortType, setSortType] = useState(true)

  const db = firebase.firestore()
  useEffect(() => {
  //  const sortedData = sort(data)
    setCharacters(data)
    
  },[data])

  const renderCards = () => {
    if(!characters) return
    return characters.map(c => <Card key={c.id} imgSrc={c.source} title={c.title} handleClick={() => handleEdit(c)} handleDelete={() => handleDelete(c.id)}/>)
  }

  const handleEdit = (char) => {
    setActive(true)
    setSelected(char)
    setModalAdd(false)
  }

  const handleUpdateCharacter = (id, source, title,) => {
   const newData = [...characters]
   let index = newData.findIndex((el) => el.id === id)
   newData[index] = {id: id, source: source, title: title}
    setCharacters(newData)
  }

  const handleDelete = (id) => {
    if(!id) return

    // const db = firebase.firestore()
    db.collection('avengers-characters').doc(id).delete()

    handleDeleteUI(id)

    alert('Successfully deleted')
  }

  const handleDeleteUI = (id) => {
    const array = [...characters];
    const filteredArray = array.filter((el) => el.id !== id)
    setCharacters(filteredArray)
  }

  const handleAdd = () => {
    setActive(true)
    setModalAdd(true)
  }

  const handleAddUI = (id, source, title) => {
    if(!id || !source || !title) return

    const array = [...characters, {id, title, source}]
    setCharacters(array)
  }

  const handleSearch =  (search) => {
    if(!search) setCharacters(data)

    db.collection('avengers-characters').where("title", "==" , search.toLowerCase()).get()
      .then((snapshot) => snapshot.docs.forEach(doc => {
        setCharacters([doc.data()])
      }))
      
  }

  const sort = (data) => {
    let sortedData;
    
    if(sortType) return sortedData = data.sort((a, b) => (a.title >  b.title) ? 1 : -1)

    return sortedData = data.sort((a, b) => (a.title <  b.title) ? 1 : -1)
  }

  const handleSort = () => {
    let sortedData;

    if(sortType) sortedData = sort(characters)
    else sortedData = sort(data)

    setCharacters(sortedData)
    setSortType(!sortType)
  }

  const empty = characters.length === 0;

  return (
    <div className="App">
      <Modal data={selected} type={modalAdd} handleUpdate={ modalAdd ? handleAddUI : handleUpdateCharacter} handleClick={() => setActive(false)} isActive={active} title={modalAdd ? 'Add Character' : 'Edit Character'} />
      <Search search={handleSearch} />
      <button className="AddButton" onClick={handleAdd}>Add Character</button>
      <button className="AddButton" onClick={handleSort}>{sortType ? 'Ascending' : 'Descending'}</button>
      {loading ? <div className="Message"><Loading loading={loading}/></div> : renderCards()}
      {error && <div className="Message">Could not retrieve data</div>}
      {!loading && empty && <div className="Message">Empty data</div>}
    </div>
  );
}

export default App;
