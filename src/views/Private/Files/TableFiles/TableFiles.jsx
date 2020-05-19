import React from 'react';
import TableFilesHeader from './TableFilesHeader';
import TableFilesBody from './TableFilesBody';
import './tablefilesStyles.css';

const TableFiles = ({ data }) => {
  return (
    <div className="table-container">
      <h1>No se que lleva de titulo Tabla</h1>
      <table className="table">
      <TableFilesHeader data={data}/>
      <TableFilesBody data={data}/>
      </table>
    </div>
  ); 
};

export default TableFiles;
