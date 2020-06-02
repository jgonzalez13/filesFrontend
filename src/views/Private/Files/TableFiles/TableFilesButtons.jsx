import React, { useState } from 'react';
import Modal from '../../../../shared/Modal/Modal'
import Alert from '../../../../shared/Alert/Alert'

const TableFilesButtons = () => {
  const[modalEliminar, setModalEliminar] = useState (false)
  return (
    <>
    <button>EDITAR o</button>
    <button onClick={()=>setModalEliminar(true)}>Eliminar</button>
    <Modal modalIsOpen={modalEliminar}>
      <Alert setModalIsOpen={setModalEliminar} />
    </Modal> 
    </>
  ); 
};

export default TableFilesButtons;
