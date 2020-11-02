import React from 'react'
import './card.css'

interface Props {
    imgSrc: string,
    title: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const Card: React.FC<Props> = ({ imgSrc, title, handleClick, handleDelete}) => {
    return (
        <div className="Card">
            <div className="Image">
                <img src={imgSrc} alt="Card image" />
            </div>
            <div className="Details">
                <p>{title}</p>
                <div className="Buttons">
                    <button className="Edit" onClick={handleClick}>Edit</button>
                    <button className="Remove" onClick={handleDelete}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Card