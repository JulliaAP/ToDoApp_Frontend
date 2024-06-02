import React, { useState } from 'react';
import './App.css';
import Topo from "./components/Header";
import Rodape from "./components/Footer";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simula um login bem-sucedido
    onLogin();
  };

  return (
    <div>
        <Topo/>
        <h1>Task-a-Tudo</h1>
        <div className='login-container'>
         <h2>Login</h2>
         <input className='login-input' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
         <input className='login-input' type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
         <button className='login-button' onClick={handleLogin}>Entrar</button>
        </div>
        <Rodape/>
    </div>
  );
};

export default LoginForm;