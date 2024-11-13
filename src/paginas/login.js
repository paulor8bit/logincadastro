import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './../firebaseConfig';  // Importar a instância de auth do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'nes.css/css/nes.min.css';
import './../index.css'; // seu estilo personalizado, se tiver

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();  // Hook do React Router para navegação

  // Função para o login
  const handleLogin = async () => {
    try {
      // Tenta fazer o login usando o Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Usuário logado com sucesso!');
      setIsLoggedIn(true);

      // Redireciona para a página "dashboard" após o login bem-sucedido
      navigate('/dashboard');
    } catch (error) {
      setMessage('Usuário inválido ou senha incorreta.');
      setIsLoggedIn(false);
    }
  };

  // Função para redirecionar para a página de criação de usuário
  const handleCreateUser = () => {
    navigate('/novoUsuario');
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
      <h1 className="nes-text is-primary">Bem-vindo a Gastos</h1>

      <div
        style={{ backgroundColor: '#212529', padding: '1rem', width: '300px', borderRadius: '5px' }}
        className="nes-field"
      >
        <input
          type="text"
          id="usuario"
          className="nes-input is-dark"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="senha"
          className="nes-input is-dark"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="nes-btn is-success" style={{ marginTop: '1rem' }} onClick={handleLogin}>
        Login
      </button>

      {/* Botão para criar usuário */}
      <button className="nes-btn is-primary" style={{ marginTop: '1rem' }} onClick={handleCreateUser}>
        Criar Usuário
      </button>

      {/* Mensagem de sucesso ou erro */}
      {message && <p style={{ marginTop: '1rem', color: isLoggedIn ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default Login;
