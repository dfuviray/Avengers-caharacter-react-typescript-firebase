import React, {useEffect, useState} from 'react'
import './modal.css'
import firebase from '../../firebase/config'

interface Props {
    handleClick: () => void,
    handleUpdate: (id: string, source: string, title: string) => void,
    isActive: boolean,
    title: string,
    data: any
}



const Modal: React.FC<Props> = ({data, handleClick, handleUpdate, isActive, title}) => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [inputSource, setInputSource] = useState<string>('')

    useEffect(() => {
        if(data) {
            setInputTitle(data.title)
            setInputSource(data.source)
        }
    }, [data])

    const update = (id, source, title) => {
        if(!source || !title) return alert('Input field cannot be empty')
        const db = firebase.firestore()
        db.collection('avengers-characters').doc(id).set({...data, title: title, source: source})
        
        handleUpdate(id, inputSource, inputTitle)
    }

    return (
        <div className={`Modal ${isActive ? 'active' : ''}`}>
            <p className="Title">{title}</p>
            <input className="Name" placeholder="Title" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
            <input className="ImgSrc" placeholder="Image link" onChange={(e) => setInputSource(e.target.value)}  value={inputSource}  />
            <button className="Save" onClick={() => update(data.id, inputSource, inputTitle)}>Save</button>
            <button className="Cancel" onClick={handleClick} >Cancel</button>
        </div>
    )

}

export default Modal