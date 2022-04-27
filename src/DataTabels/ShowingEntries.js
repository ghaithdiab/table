import React from 'react'
import PropTypes from "prop-types";

/**
 * 
 * @param {Number} minShow 
 * @param {Number} maxShow
 * @param {Number} totalEntries
 * @param {boolean} isSearching
 * @param {Number} minFilteredShow
 * @param {Number} maxFilteredShow
 * @param {Number} totalEntriesShow
 */
const ShowingEntries = ({minShow,maxShow,totalEntries,isSearching,minFiltredShow,maxFiltredShow,totalEntriesShow}) => {
  return (
    <div className='dtb-showing'>
      {isSearching ? 
      (<span>{`Showing ${minFiltredShow} to ${maxFiltredShow} of ${totalEntriesShow} entries (Filtered from ${totalEntries} total entries)`}</span>) : 
      (<span>{`Showing ${minShow} to ${maxShow} of ${totalEntries} entries`}</span>)}
    </div>
  )
}
ShowingEntries.propTypes = {
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
  minFilteredShow: PropTypes.number,
  maxFilteredShow: PropTypes.number.isRequired,
  totalEntriesShow: PropTypes.number.isRequired,
  isSearching: PropTypes.bool,
};

export default ShowingEntries