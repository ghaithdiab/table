import React, { useState } from 'react'
import DisplayEntries from './DisplayEntries'
import Pagination from './Pagination'
import Search from './Search'
import ShowingEntries from './ShowingEntries'
import Table from './Table'
import "./DataTable.css"
import { normalizeText } from './utils'
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
  const minFilteredShow =
  currentPage === 1 ? sortedData.length > 0 ? 1 : 0 : (currentPage - 1) * entriesShown + 1
    
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
    const sorted = sorting(label);
    setSortedData(sorted);
  }
  // Sorting system based on label
  const sorting = (label) => {
    const sorted = sortedData.sort((a, b) => {
      const labelA = normalizeText(a[label]);
      const labelB = normalizeText(b[label]);

      if (sort.isDesc) {
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
      } else {
        if (labelA < labelB) return 1;
        if (labelA > labelB) return -1;
      }

      return 0;
    });

    return sorted;
  };
  
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
      <ShowingEntries
        minShow={minShow}
        maxShow={maxShow}
        totalEntries={data.length}
        isSearching={isSearching}
        minFiltredShow={minFilteredShow}
        maxFilteredShow={maxfilterdShow}
        totalEntriesShow={sortedData.length}
      />
      <Pagination
        totalEntries={sortedData.length}
        displayedEntries={entriesShown}
        handleClick={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default DataTable