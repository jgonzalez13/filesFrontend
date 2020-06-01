import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserStore } from '../../containers/context/User.context'

const Navbar = ({auth}) => {
  const { setUser } = useContext(UserStore);
  let itemList = [];

  function handleLogOut () {
    setUser({ type: 'updateUser', payload: { auth: false }})
  }

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
    <nav className="navbar is-transparent">
      <div className="navbar-menu">
        {itemList.map((item, i) => (
          <Link key={i} className="navbar-item" to={item.location}>
            {item.itemName}
          </Link>
        ))}
      </div>
      {auth && <button onClick={handleLogOut}>Cerrar Sesión</button>}
    </nav>
  );
}

export default Navbar;
