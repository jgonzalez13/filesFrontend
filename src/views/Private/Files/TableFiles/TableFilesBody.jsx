import React from 'react';
import { object } from 'yup';

const TableFilesBody = ({ data }) => {
  return (
        <tbody>
           {data.map((dataObject,i) =>{
             return( <tr key={ i }>
                <td>{ dataObject.nombre }</td>
                <td>{ dataObject.direccion }</td>
                <td>{ dataObject.telefono }</td>
                <td>{ dataObject.correo }</td>
                <td>{ dataObject.expediente }</td>
              </tr>
           )})}
        </tbody>
  ); 
};

export default TableFilesBody;
