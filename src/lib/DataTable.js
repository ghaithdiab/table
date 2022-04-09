import React, { useState } from 'react'
import DisplayEntries from './DisplayEntries'
import Search from './Search'
import ShowingEntries from './ShowingEntries'
import Table from './Table'
const DataTable = ({labels,data}) => {
  const [sortedData,setSortedData]=useState(data)
  const [currentPage,setCurrentPage]=useState(1)
  const [entriesShown,setEntriesShown]=useState(10)
  const [isSearching, setIsSearching] = useState(false);
  const [sort,setSort]=useState({
    column:'',
    isDesc:true
  })
  const minShow=currentPage === 1 ? 1 : (currentPage-1) * entriesShown + 1
  const maxShow=currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length
  const minFilterdShow=currentPage === 1 ? sortedData.length > 0 ? 1 : 0 :(currentPage - 1) * entriesShown+1
  const maxfilterdShow=currentPage * entriesShown < sortedData.length ? currentPage*entriesShown : sortedData.length

    // Handle the changes of displayed entries
    const handleEntriesChange = (evt) => {
      setEntriesShown(parseInt(evt.target.value));
      setCurrentPage(1);
    };
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
      <DisplayEntries value={entriesShown} handleChange={handleEntriesChange}/>
      <Search
        data={data}
        handleDisplayedData={setSortedData}
        handleIsSearching={setIsSearching}
      />
      <Table
        labels={labels}
        data={sortedData}
        minShow={minShow}
        maxShow={maxShow}
        handleSort={handleSort}
        sort={sort}
        sortedData={sortedData}
      />
      {/* <ShowingEntries
        minShow={minShow}
        maxShow={maxShow}
        totalEntries={data.length}
        isSearching={isSearching}
        minFiltredShow={minFilterdShow}
        maxFilteredShow={maxfilterdShow}
        totalEntriesShow={sortedData.length}
      /> */}
    </div>
  )
}

export default DataTable