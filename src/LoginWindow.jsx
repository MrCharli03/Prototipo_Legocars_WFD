import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox } from '@fluentui/react';
import './LoginWindow.css';

const LoginWindow = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión...
    onLogin();
    alert(`Bienvenido a legocar`);
  };

  useEffect(() => {
    // Cargar Google Sign-In SDK
    const loadGoogleSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.onload = () => {
        // Inicializar Google Sign-In
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: '680614518415-e9t57jjj61ui0ublpima6q3bgmdr57bn.apps.googleusercontent.com',
          });
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleSDK();
  }, []);

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      const profile = googleUser.getBasicProfile();
      const email = profile.getEmail();
      // Realizar lógica de inicio de sesión con el email de Google
      alert(`Iniciaste sesión con Google como: ${email}`);
    });
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '100px' }}>
      <form onSubmit={handleSubmit} className="formContainer">
        <TextField
          label="Correo electrónico"
          name="email"
          type="email"
          value={email}
          onChange={(e, newValue) => setEmail(newValue)}
          required
          className="inputField"
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={password}
          onChange={(e, newValue) => setPassword(newValue)}
          required
          className="inputField"
        />
        <Checkbox
          label="Recordarme"
          name="rememberMe"
          checked={rememberMe}
          onChange={(e, checked) => setRememberMe(checked)}
          className="inputField"
        />
        <Button
          type="submit"
          styles={{
            root: {
              backgroundColor: '#1B340C',
              color: 'white',
            },
          }}
          className="inputField"
        >
          Iniciar sesión
        </Button>
        <div>
          {/* Botones de inicio de sesión con Google y Facebook */}
          <Button onClick={handleGoogleLogin} className="inputField">
            Iniciar sesión con Google 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginWindow;
