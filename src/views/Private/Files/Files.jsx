import React from 'react';
import TableFiles from './TableFiles/TableFiles';
import { data } from './data';

const Files = () => {
  return (
    <div className="table-container">
      <h1>FilesView</h1>
      <TableFiles data={data} className = "table"/>
      {console.log(data)}
    </div>
  );
};

export default Files;
