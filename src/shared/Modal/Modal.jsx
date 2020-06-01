import React, { useState } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

function ModalP() {
  const[modalIsOpen, setModalIsOpen] = useState (false)
  return (
    <div >
    <button variant="primary" class="button is-primary" onClick={()=>setModalIsOpen(true)}>open modal</button>
    <Modal isOpen={modalIsOpen}>
      <h2>Aviso</h2>
      <p>¿Desea eliminar el registro?</p>
      <div>
      <button class="button is-primary is-light" >Si</button>
        <button class="button is-primary is-light" onClick={()=>setModalIsOpen(false)}>No</button>
      </div>
    </Modal>
  </div>
  );
};
render (<Modal/>, document.getElementById('root'));
export default ModalP;
