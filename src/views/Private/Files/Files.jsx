import React from 'react';
import TableFiles from './TableFiles/TableFiles';
import { data } from './data';
import SearchComponent from './search_component'

const Files = () => {
  return (
    <div className="table-container">
      <h1>FilesView</h1>
      <SearchComponent  />
      <TableFiles data={data} className = "table"/>
    </div>
  );
};

export default Files;
