import React, {useEffect, useState} from 'react'
import './modal.css'
import firebase from '../../firebase/config'

interface Props {
    data: any,
    handleClick: () => void,
    handleUpdate: (id: string, source: string, title: string) => void,
    isActive: boolean,
    title: string,
    type: any
}



const Modal: React.FC<Props> = ({data, handleClick, handleUpdate, isActive, title, type}) => {
    const [inputTitle, setInputTitle] = useState<any>('')
    const [inputSource, setInputSource] = useState<any>('')

    useEffect(() => {
        if(data) {
            setInputTitle(data.title)
            setInputSource(data.source)
        }

        
    if(type) {
        setInputTitle('')
        setInputSource('')
    }

    }, [data, type])

    const update = async (id, source, title) => {
        const db = firebase.firestore()

        if(!source || !title) return alert('Input field cannot be empty')

        if(type) {
            const character = await db.collection('avengers-characters').add({title: title, source: source})
            handleUpdate(character.id, inputSource, inputTitle)
            return
        }
        
        db.collection('avengers-characters').doc(id).set({...data, title: title, source: source})
        handleUpdate(id, inputSource, inputTitle)
    }

 

    return (
        <div className={`Modal ${isActive ? 'active' : ''}`}>
            <p className="Title">{title}</p>
            <input className="Name" placeholder="Title" onChange={(e) => setInputTitle(e.target.value)} value={ inputTitle} />
            <input className="ImgSrc" placeholder="Image link" onChange={(e) => setInputSource(e.target.value)}  value={ inputSource}  />
            <button className="Save" onClick={() => update(type ? '' : data.id , inputSource, inputTitle)}>Save</button>
            <button className="Cancel" onClick={handleClick} >Cancel</button>
        </div>
    )

}

export default Modal