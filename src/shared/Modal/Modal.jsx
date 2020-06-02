import React from 'react';
import Modal from 'react-modal';

function ModalP({ children, modalIsOpen }) {
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   
  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      { children }
    </Modal>
  );
};

export default ModalP;
