import React from 'react'
import PropTypes from "prop-types";
import { normalizeText } from './utils';
const Search = ({data,handleDisplayedData,handleIsSearching }) => {
  // Filter the data to display based on typed value
  const handleSearch=(evt)=>{
    const value=normalizeText(evt.target.value)
    if(value.length>0){
      const dataToDisplay=data.filter((elt)=>{
        const values=Object.values(elt).map((val)=>normalizeText(val)).join(" ")
        return values.includes(value)
      })
      handleDisplayedData(dataToDisplay)
      handleIsSearching (true)
    }
    else{
      handleDisplayedData(data)
      handleIsSearching (false)
    }
  }
  return (
    <div className='table-search'>
        <label htmlFor='search-box'>{`Search: `}</label>
        <input type='text' id="search-box" name="search" onChange={(evt)=>handleSearch(evt)}></input>
    </div>
  )
}
Search.propTypes = {
  data: PropTypes.array.isRequired,
  handleDisplayedData: PropTypes.func.isRequired,
  handleIsSearching: PropTypes.func.isRequired,
};

export default Search