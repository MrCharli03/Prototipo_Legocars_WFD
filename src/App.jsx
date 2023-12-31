import React, { useState } from 'react';
import './App.css';
import LoginWindow from './LoginWindow';
import Home from './Home';
import legoCarImage from './imagenes/logo_solo.png'; // Importa tu imagen aquí

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica para el inicio de sesión (puede ser una llamada a una API o autenticación local)
    // Aquí deberías validar el formulario y manejar el inicio de sesión correctamente
    // Por ahora, simplemente establecemos isLoggedIn a true después de "iniciar sesión"
    setIsLoggedIn(true);
  };

  return (
    <div>
        {!isLoggedIn ? (
          <div className="App">
            <img src={legoCarImage} alt="Lego Car" style={{ width: '25%', height: '25%' }} />
            <h1 style={{ color: 'black', margin: '10px' }}>Legocar</h1>
            <div className="contenido">
              <LoginWindow onLogin={handleLogin} />
            </div>
          </div>
        ) : (
          <Home />
        )}
    </div>
  );
}

export default App;
