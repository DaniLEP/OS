import { Link } from "react-router-dom";
import Header from "../componentes/Header";

export default function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    position: 'relative',
    top:'5vh', // Largura mais flexível para maior adaptação
    flexWrap: "wrap", // Permite quebrar linha em telas menores
    margin: "0 auto", // Centraliza o container na página
    backgroundColor: 'white',
    padding: '20px',
    gap: '20px', // Espaçamento entre os itens
  };

  const linkStyle = {
    flex: "1 1 30%", // Ajusta a largura dos links para manter responsividade
    minWidth: '150px', // Define uma largura mínima para melhor adaptação
    maxWidth: '250px', // Define uma largura máxima para limitar em telas grandes
    margin: "10px", // Espaçamento entre os links
  };

  const imgStyle = {
    width: "100%", // A imagem ocupa 100% da largura do container
    height: "auto", // Mantém a proporção da imagem
    cursor: "pointer",
    transition: "transform 0.6s", // Animação suave
    position: 'relative',
    top: '10vh',
  };

  return (
    <>
      <Header />
      <div>
        <div style={containerStyle}>
          <Link to="/Cadastro" style={linkStyle}>
            <img
              src="/cadastros.png"
              alt="Cadastro"
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Link>

          <Link to="/Lista_Controles" style={linkStyle}>
            <img
              src="/Lista.png"
              alt="Controles"
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <br />

          </Link>

          <Link to="/Dashboard" style={linkStyle}>
            <img
              src="/dashboard.png"
              alt="Relatórios"
              style={imgStyle}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
