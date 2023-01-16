import React from 'react'
import './SearchBar.css'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function SearchBar({ placeholder, data }) {

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <PersonSearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 &&
        <div className='dataResult'>
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a className="dataItem" href={value} target="_blank" rel="noreferrer">
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      }

    </div >
  );
}

export default SearchBar