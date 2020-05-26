import React from 'react';
import TableFiles from './TableFiles/TableFiles';
import { data } from './data';
import SearchComponent from './Search.Component'

const Files = () => {
  return (
    <div className="table-container">
      <h1>FilesView</h1>
      <SearchComponent  />
    </div>
  );
};

export default Files;
