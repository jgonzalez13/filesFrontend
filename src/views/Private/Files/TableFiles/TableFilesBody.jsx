import React from 'react';
import TableFilesButtons from './TableFilesButtons'

const TableFilesBody = ({ data }) => {
  return (
    <tbody>
      { data.length ? (
        <>
          {data.map((dataObject,i) =>{
            return( <tr key={ i }>
                <td>{ dataObject.name }</td>
                <td>{ dataObject.direccion }</td>
                <td>{ dataObject.telefono }</td>
                <td>{ dataObject.correo }</td>
                <td>{ dataObject.expediente }</td>
                <td><TableFilesButtons/></td>
              </tr>
          )})}
        </>
        ) : (
          <p>No hay expedientes</p>
        )
      }
    </tbody>
  ); 
};

export default TableFilesBody;
