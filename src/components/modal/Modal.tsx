import React from 'react'
import './modal.css'

interface Props {
    isActive: boolean,
    title: string,
    handleClick: () => void
}

const Modal: React.FC<Props> = ({handleClick, isActive, title}) => {
    return (
        <div className={`Modal ${isActive ? 'active' : ''}`}>
            <p className="Title">{title}</p>
            <input className="Name" placeholder="Title" />
            <input className="ImgSrc" placeholder="Image link" />
            <button className="Save">Save</button>
            <button className="Save" onClick={handleClick}>Cancel</button>
        </div>
    )

}

export default Modal