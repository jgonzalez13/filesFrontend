import React from 'react';

const TableFilesHeader = ({ data }) => {
  let headers = Object.keys(data[0]);
  return (
        <thead>
          <tr>
            {headers.map((cabezon, i) => {
              console.log(cabezon);
              return <th key={i}>{cabezon}</th>;
            })}
          </tr>
        </thead>
  ); 
};

export default TableFilesHeader;
