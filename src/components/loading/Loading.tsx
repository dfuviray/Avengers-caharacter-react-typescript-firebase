import React from 'react'
import "./loading.css"

interface Props{
    loading: boolean 
}

const Loading: React.FC<Props | any> = ({loading}) => {
    return loading && <div className="lds-facebook"><div></div><div></div><div></div></div>
}

export default Loading