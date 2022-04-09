import React, { useState } from 'react'
import Table from './Table'
const DataTable = ({labels,data}) => {
  const [sortedData,setSortedData]=useState(data)
  const [currentPage,setCurrentPage]=useState(1)
  const [entriesShown,setEntriesShown]=useState(10)
  const [sort,setSort]=useState({
    column:'',
    isDesc:true
  })
  const minShow=currentPage === 1 ? 1 : (currentPage-1) * entriesShown + 1
  const maxShow=currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length
  const miniFilterdShow=currentPage === 1 ? sortedData.length > 0 ? 1 : 0 :(currentPage - 1) * entriesShown+1
  const maxfilterdShow=currentPage * entriesShown < sortedData.length ? currentPage*entriesShown : sortedData.length
  //Handel the sorting Data (column+asc/desc)
  const handleSort=(label)=>{
    if(sort.column===label){
      setSort({...sort,isDesc:!sort.isDesc})
    }else{
      setSort({column:label,isDesc:false})
    }
  }
  return (
    <div className='data-table'>
      <Table
        labels={labels}
        data={sortedData}
        minShow={minShow}
        maxShow={maxShow}
        handleSort={handleSort}
        sort={sort}
        sortedData={sortedData}
      />
    </div>
  )
}

export default DataTable