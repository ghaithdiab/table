import React from 'react'
import PropTypes from "prop-types"
import { generateID } from './utils'
const Table = ({labels,data,minShow,maxShow,handleSort,sort,sortedData,}) => {
  const {column,isDesc}=sort
  return (
    <table className='table'>
      <thead>
        <tr className='table-header-row'>
          {/* first row of labels */}
          {labels.map((lablel)=>(
            <th key={"_" + Math.random().toString(36).substring(2,9)} className='tabel-header-cell'>
              <div className='tabel-header-cell-content'>
                <span>{lablel.text}</span>
                <div className='tabel-header-cell-icons'>
                  <div className={column===lablel.value ?!isDesc ? 'tabel-arrow-up active' :'table-arrow-up inactive' :'tabel-arrow-up'}></div>
                  <div className={column===lablel.value ?!isDesc ? 'tabel-arrow-down active' :'table-arrow-down inactive' :'tabel-arrow-down'}></div>
                </div>
              </div>
            </th>
            // onClick={()=>hanleSort(label.value)}
          ))}
        </tr>
      </thead>
      <tbody>
        {/* if the tabel is Empty */}
        {sortedData.length===0&&(<tr><td className='tabel-row-nomatch' colSpan={labels.length}>
            No matching record found
          </td>
          </tr>)}
          {/* Display only the Data in the current page */}
          {data.map((elt,index)=>{if(index+1>=minShow&&index<maxShow){
            return(<tr key={"_" + Math.random().toString(36).substring(2,9)} className='tabel-row'>
              {Object.values(elt).map((value,j)=>(
                <td key={"_" + Math.random().toString(36).substring(2,9)} className={j===0?'tabel-cell first-cell' : 'tabel-cell'}>{value}</td>
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