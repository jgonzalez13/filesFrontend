import React from 'react'

const Alert = ({ setModalIsOpen }) => (
  <div>
    <h2>Aviso</h2>
    <p>¿Desea eliminar el registro?</p>
    <div>
    <button class="button is-primary is-light" >Si</button>
      <button class="button is-primary is-light" onClick={()=>setModalIsOpen(false)}>No</button>
    </div>
  </div>
)

export default Alert 
