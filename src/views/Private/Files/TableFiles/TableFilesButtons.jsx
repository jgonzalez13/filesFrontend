import React, { useState } from 'react';
import Modal from '../../../../shared/Modal/Modal'
import Alert from '../../../../shared/Alert/Alert'
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableFilesButtons = () => {
  const[modalEliminar, setModalEliminar] = useState (false)
  return (
    <>
    <button><FontAwesomeIcon icon = {faEdit}/></button>
    <button onClick={()=>setModalEliminar(true)}><FontAwesomeIcon icon = {faTrashAlt}/></button>
    <Modal modalIsOpen={modalEliminar}>
      <Alert setModalIsOpen={setModalEliminar} />
    </Modal> 
    </>
  ); 
};

export default TableFilesButtons;
