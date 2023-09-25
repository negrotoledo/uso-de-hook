import React, { useState } from 'react';
import useAuth from './useAuth';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, login } = useAuth();

  const handleLogin = () => {
    login(user, password);
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <p>Has iniciado sesión correctamente.</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default Login;
