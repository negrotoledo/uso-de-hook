import React from 'react';
import useAuth from './useAuth'; 


function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <ul>
        <li>Inicio</li>
        {isAuthenticated ? (
          <li onClick={logout}>Cerrar sesión</li>
        ) : (
          <li>Iniciar sesión</li>
        )}
      </ul>
    </nav>
  );
} 

export default Navbar;




  