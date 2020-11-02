import React, {useState, useEffect} from 'react'
import './search.css'

interface ISearch {
    search: (input: string) => void
}

function Search({search}) {
    const [input, setInput] = useState('')
    return (
        <div className="Wrap">
            <input type="text" className="Input-search" value={input} onChange={e => setInput(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && search(input)
         } /><button className="Button-search" onClick={() => search(input)}>Search</button>
        </div>
    )
}

export default Search