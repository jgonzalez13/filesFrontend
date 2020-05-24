import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Navbar = ({auth}) => {

  var itemList = [];
  const history = useHistory();
  
  auth ?
    (
      itemList = [
        { itemName: "Expedientes", location: "/Files" },
        { itemName: "Perfil", location: "/User" }
      ]
    ) : (
      itemList = [
        { itemName: "Inicio", location: "/" },
        { itemName: "Iniciar Sesion", location: "/incio-de-sesion" },
        { itemName: "Registro", location: "/registro" }
      ]
    );

  return ( 
    <nav class="navbar is-transparent">
      <div class="navbar-menu">
        {itemList.map(item => (
          <Link class="navbar-item" onClick={() => history.push(item.location)}>
            {item.itemName}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;