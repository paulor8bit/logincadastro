import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';  // Importar Firebase Authentication
import { auth } from './../firebaseConfig'; 
function NovoUsuario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateUser = async () => {
    const auth = getAuth(); // Obtém a instância de autenticação do Firebase

    try {
      // Cria o usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      setMessage(`Usuário ${user.email} criado com sucesso!`); // Mensagem de sucesso
    } catch (error) {
      setMessage('Erro ao criar usuário: ' + error.message); // Mensagem de erro
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
      <h1 className="nes-text is-primary">Criar Novo Usuário</h1>

      <div
        style={{ backgroundColor: '#212529', padding: '1rem', width: '300px', borderRadius: '5px' }}
        className="nes-field"
      >
        <input
          type="text"
          id="usuario"
          className="nes-input is-dark"
          placeholder="Email"
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

      <button className="nes-btn is-primary" style={{ marginTop: '1rem' }} onClick={handleCreateUser}>
        Criar Usuário
      </button>

      {/* Exibir mensagem de sucesso ou erro */}
      {message && <p style={{ marginTop: '1rem', color: message.includes('sucesso') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default NovoUsuario;
