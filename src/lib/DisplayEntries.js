import React from 'react'
import PropTypes from "prop-types";

const DisplayEntries = ({value,handleChange}) => {
  return (
    <div className='table-entries'>
      <label htmlFor='table-select'>{`Show `}</label>
      <select name='table-enties' id='table-select' value={value} onChange={(evt)=>handleChange(evt)}></select>
    </div>
  )
}


DisplayEntries.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DisplayEntries