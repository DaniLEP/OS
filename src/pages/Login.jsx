import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      (email === 'cleyson@reciclar.org.br' && password === '@123abc@') ||
      (email === 'danilo.manzoli@reciclar.org.br' && password === 'reciclar1234')
    ) {
      alert('Login bem-sucedido!');
      setErrorMessage('');
      window.location.href = '/home'; // Redireciona para a home
    } else {
      setErrorMessage('E-mail ou senha incorretos.');
    }
  };

  // Definição de estilos inline
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5', // Cor de fundo clara e suave
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width:'1515px'
    },
    
    loginContainer: {
      backgroundColor: '#00009C', // Azul escuro
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '1px 15px 20px rgba(0, 0, 0, 0.2)', // Sombra para profundidade
      border: '2px solid #00b894', // Bordas verdes sutis
      textAlign: 'center',
      width: '350px',
      position: 'relative',
    },
    h2: {
      color: '#ffffff', // Texto branco
      marginBottom: '20px',
      fontSize: '24px',
    },
    logo: {
      width: '80px', // Tamanho do logo ajustado
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#ffffff', // Texto branco
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    input: {
      width: '91%',
      padding: '12px',
      marginBottom: '15px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '14px',
      backgroundColor: 'white',
      color: 'black'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#F20DE7', // Cor principal do botão
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#00FF62', // Cor do hover do botão
    },
    errorMessage: {
      color: 'red',
      marginTop: '15px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo da Reciclar"
          style={styles.logo}
        />
        <h2 style={styles.h2}>Cadastro de OS TI</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email" style={styles.label}>
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Senha:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Entrar
          </button>
        </form>
        {errorMessage && (
          <p id="errorMessage" style={styles.errorMessage}>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
