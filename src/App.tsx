import React from 'react';
import './App.css';

import Card from './components/card/Card'

function App() {
  return (
    <div className="App">
    <Card imgSrc="https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png" title="Hulk" />
    <Card imgSrc="http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-Free-Download-PNG.png" title="Spiderman" />
    </div>
  );
}

export default App;
