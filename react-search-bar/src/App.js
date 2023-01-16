import React from 'react';
import SearchBar from './Components/SearchBar';
import './App.css';
import Name from './Data.json'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <SearchBar placeholder="Please Search" data={Name} />
        <SearchBar placeholder="Please Search" data={Name} />



      </header>
    </div>
  );
}

export default App;
