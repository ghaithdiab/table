import React from 'react'
import PropTypes from "prop-types"
// import { generateID } from './utils'

/**
 * 
 * @param {object} labels
 * @param {object} data
 * @param {object} minShow
 * @param {object} maxShow
 * @param {Function} handleSort
 * @param {Function} sort 
 * @param {Function} sortedData
 * @returns 
 */
const Table = ({labels,data,minShow,maxShow,handleSort,sort,sortedData,}) => {
  const {column,isDesc}=sort
  return (
    <table className='dtb-table'>
      <thead>
        <tr className='dtb-table-header-row'>
          {/* first row of labels */}
          {labels.map((label)=>(
            <th key={"_" + Math.random().toString(36).substring(2,9)} className='dtb-tabel-header-cell' onClick={()=>handleSort(label.value)}>
              <div className='dtb-tabel-header-cell-content'>
                <span>{label.text}</span>
                <div className='dtb-tabel-header-cell-icons'>
                  <div className={column===label.value ?!isDesc ? 'dtb-tabel-arrow-up active' :'dtb-table-arrow-up inactive' :'dtb-tabel-arrow-up'}></div>
                  <div className={column===label.value ?!isDesc ? 'dtb-tabel-arrow-down active' :'dtb-table-arrow-down inactive' :'dtb-tabel-arrow-down'}></div>
                </div>
              </div>
            </th>
            // onClick={()=>hanleSort(label.value)}
          ))}
        </tr>
      </thead>
      <tbody>
        {/* if the tabel is Empty */}
        {sortedData.length===0&&(<tr><td className='dtb-tabel-row-nomatch' colSpan={labels.length}>
            No matching record found
          </td>
          </tr>)}
          {/* Display only the Data in the current page */}
          {data.map((elt,index)=>{if(index+1>=minShow&&index<maxShow){
            return(<tr key={"_" + Math.random().toString(36).substring(2,9)} className='dtb-tabel-row'>
              {Object.values(elt).map((value,j)=>(
                <td key={"_" + Math.random().toString(36).substring(2,9)} className={j===0?'dtb-tabel-cell first-cell' : 'dtb-tabel-cell'}>{value}</td>
              ))}
            </tr>)
          }
          return null})}
      </tbody>
    </table>
  )
}
Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  sortedData: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
  minShow: PropTypes.number.isRequired,
  maxShow: PropTypes.number.isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default Table