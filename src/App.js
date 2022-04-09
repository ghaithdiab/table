import React from 'react'
import { exampleLabels, exampleData } from './examples'
import DataTable from './lib/DataTable'

const App = () => {
  return (
    <div><DataTable labels={exampleLabels} data={exampleData}/></div>
  )
}

export default App