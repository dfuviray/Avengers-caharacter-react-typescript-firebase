import React from 'react'
import './card.css'

interface Props {
    imgSrc: string,
    title: string,
}

const Card: React.FC<Props> = ({ imgSrc, title}) => {
    return (
        <div className="Card">
            <div className="Image">
                <img src={imgSrc} alt="Card image" />
            </div>
            <div className="Details">
                <p>{title}</p>
                <div className="Buttons">
                    <button className="Edit">Edit</button>
                    <button className="Remove">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Card