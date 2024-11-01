import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListOS = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar dados da API do Google Sheets
  const fetchOSData = async () => {
    const API_KEY = "AIzaSyAdxxCdh6hd_T5bNObomERoL6Znw75b83o"; // Insira sua chave da API
    const SHEET_ID = "15bhwFjgshG7yBCKoemy4R2HmaL62gv8p0gtC6lhNFtk"; // Insira o ID da sua planilha
    const RANGE = "ABERTURA OS";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Erro ao buscar dados: ${response.status} ${response.statusText}. Detalhes: ${errorText}`
        );
      }
      const data = await response.json();
      console.log("Dados recebidos:", data); // Dados podem ser usados conforme necessidade futura
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOSData();
  }, []);

  // Função de redirecionamento para a página inicial
  const irParaHome = () => {
    window.location.href = "/Lista_Controles";
  };

  // Estilos CSS em objetos para manter o código limpo e modular
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#00009c",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    logo: {
      width: "100px",
      position: "relative",
      left: "-40vh",
      top: "1vh",
    },
    title: {
      fontSize: "40px",
      display: "inline-block",
      color: "white",
      marginRight: "100px",
    },
    homeIcon: {
      cursor: "pointer",
      marginRight: "20px",
    },
    homeImage: {
      position: "relative",
      left: "97vh",
      width: "40px",
      top: "-12vh",
    },
    loading: {
      textAlign: "center",
      color: "#F20DE7",
    },
    error: {
      textAlign: "center",
      color: "red",
    },
    iframe: {
      border: "none",
      overflow: "hidden",
      display: "block",
      margin: "20px auto",
      borderRadius: "5px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      width: "100%",
      height: "550px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Instituto Reciclar"
          style={styles.logo}
          onClick={irParaHome}
        />
        <h1 style={styles.title}>Lista de OS</h1>
        <div className="home-icon" style={styles.homeIcon}>
          <Link to={"/Lista_Controles"}>
            <img src="/saida.png" alt="Home" style={styles.homeImage} />
          </Link>
        </div>
      </header>
      {isLoading && <p style={styles.loading}>Carregando dados...</p>}
      {error && <p style={styles.error}>Erro: {error}</p>}
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoS3n8ml9P_80I30zlTyWtGRnj3UVTPZ-wo86thagwT3ofUloRCGlrJdxDFrfGQuRURLAN6UJpKfQp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        style={styles.iframe}
        title="Planilha Servidores"
      />
    </div>
  );
};

export default ListOS;
