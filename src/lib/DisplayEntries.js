import React from 'react'
import PropTypes from "prop-types";
/*
 * Select element to chose the number of rows to display
 */
const DisplayEntries = ({value,handleChange}) => {
  return (
    <div className='table-entries'>
      <label htmlFor='table-select'>{`Show `}</label>
      <select name='table-enties' id='table-select' value={value} onChange={(evt)=>handleChange(evt)}>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>
      <span>{` entries`}</span>
    </div>
  )
}


DisplayEntries.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DisplayEntries