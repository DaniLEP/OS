import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  // Estado para monitorar o tamanho da tela
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Função para atualizar o estado com base no tamanho da tela
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Adiciona um listener para atualizar o estado no resize
    window.addEventListener("resize", handleResize);

    // Remove o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Estilos principais
  const styles = {
    header: {
      width: "100%",
      display: "flex",
      flexDirection: isMobile ? "row" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#00009c",
      color: "white",
      position: "fixed",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      width: isMobile ? 180 : 250,
      height: isMobile ? 60 : 80,
      cursor: "pointer",
    },
    h1: {
      fontSize: isMobile ? "24px" : "30px",
      display: "inline-block",
      marginLeft: isMobile ? -75 : "-165px",
    },
    homeIcon: {
      cursor: "pointer",
      marginRight: "20px",
    },
    iconImg: {
      height: isMobile ? "30px" : "40px",
      cursor: "pointer",
      marginRight: "20px",
    },
  };

  return (
    <header style={styles.header}>
      <img
        src="/Logo.png"
        alt="Logo Instituto Reciclar"
        style={styles.logo}
      />
      <h1 style={styles.h1}>Home</h1>
      <div style={styles.homeIcon}>
        <Link to={"/"}>
          <img src="/saida.png" alt="Home" style={styles.iconImg} />
        </Link>
      </div>
    </header>
  );
}
