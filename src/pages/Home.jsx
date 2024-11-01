import { Link } from "react-router-dom";
import Header from "../componentes/Header";

export default function Home() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    flexWrap: "wrap", // Permite quebrar linha em telas menores
    margin: "0 auto", // Centraliza o container na página
    backgroudColor: 'white'
  };

  const linkStyle = {
    flex: "1 1 30%", // Ajusta a largura dos links
    margin: "10px", // Espaçamento entre os links
  };

  const imgStyle = {
    width: "100%", // A imagem ocupa 100% da largura do container
    cursor: "pointer",
    transition: "transform 0.5s", // Animação suave
    position: 'relative',
    top: '30vh',
  };

  const imgHoverStyle = {
    transform: "scale(1.1)", // Efeito de zoom
  };

  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      flexDirection: "column", // Empilha os botões em telas pequenas
      alignItems: "center",
    },
  };

  return (
    <>
    <Header />
    <div>
      <div style={containerStyle}>
<<<<<<< HEAD
        <Link to="/Cadastro" style={linkStyle}>
=======
        <Link to="/OS/registerOS" style={linkStyle}>
>>>>>>> a7875e72c5635d845d547bc01db902195fdee69f
          <img
            src="/cadastro1.png"
            alt="Cadastro"
            style={imgStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>

<<<<<<< HEAD
        <Link to="/Lista_Controles" style={linkStyle}>
=======
        <Link to="/OS/listOS" style={linkStyle}>
>>>>>>> a7875e72c5635d845d547bc01db902195fdee69f
          <img
            src="/os.png"
            alt="controles"
            style={imgStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>
s
        <Link to="/OS/relatorio" style={linkStyle}>
          <img
            src="/relatórios.png"
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
