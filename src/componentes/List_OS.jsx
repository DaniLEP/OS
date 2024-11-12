// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const ListOS = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Função para buscar dados da API do Google Sheets
//   const fetchOSData = async () => {
//     const API_KEY = "AIzaSyAdxxCdh6hd_T5bNObomERoL6Znw75b83o"; // Insira sua chave da API
//     const SHEET_ID = "15bhwFjgshG7yBCKoemy4R2HmaL62gv8p0gtC6lhNFtk"; // Insira o ID da sua planilha
//     const RANGE = "ABERTURA OS";

//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(
//           `Erro ao buscar dados: ${response.status} ${response.statusText}. Detalhes: ${errorText}`
//         );
//       }
//       const data = await response.json();
//       console.log("Dados recebidos:", data); // Dados podem ser usados conforme necessidade futura
//     } catch (error) {
//       console.error("Erro ao buscar dados:", error);
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOSData();
//   }, []);

//   // Função de redirecionamento para a página inicial
//   const navigate = useNavigate();

//   const handleHome = () => navigate("/Lista_Controles");

//   // Gerenciando o botão para apagar linha
//   const [linha, setLinha] = useState("");
//   const apagarLinha = async (linha) => {
//     const url =
//       "https://script.google.com/macros/s/AKfycbwDY3ecbBJv1JsNv5P_nwXmgDufL6oROpVn4azRvirZhPkTTztOTj0GDuSBIfox_NCSCA/exec"; // Substitua com o ID do seu Web App
//     const params = `action=apagar&linha=${linha}`; // Passando a linha como parâmetro

//     const options = {
//       method: "POST",
//       body: params,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded", // Tipo correto para parâmetros no corpo
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       alert(result.message); // Exibe mensagem de sucesso ou erro
//     } catch (error) {
//       console.error("Erro ao apagar linha:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setLinha(e.target.value);
//   };

//   // Estilos CSS em objetos para manter o código limpo e modular
//   const styles = {
//     container: {
//       fontFamily: "Arial, sans-serif",
//       background: "linear-gradient(to bottom, #9ba194, #9ba194)",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       minHeight: "100vh",
//       paddingTop: "2px",
//       padding: "20px",
//       position: "relative",
//       top: "8vh",
//       gap: "10px", // 
//     },
//     header: {
//       width: "100%",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "10px",
//       backgroundColor: "#00009C",
//       color: "white",
//       position: "fixed",
//       top: 0,
//       zIndex: 1000,
//     },
//     logo: {
//       position: "relative",
//       right: "-20px",
//       width: "21vh",
//       height: "60px",
//       cursor: "pointer",
//     },
//     title: {
//       fontSize: "40px",
//       display: "inline-block",
//       color: "white",
//       marginRight: "100px",
//     },
//     homeIcon: {
//       cursor: "pointer",
//       marginRight: "20px",
//     },
//     homeImage: {
//       position: "relative",
//       left: "97vh",
//       width: "40px",
//       top: "-12vh",
//     },
//     loading: {
//       textAlign: "center",
//       color: "#F20DE7",
//     },
//     error: {
//       textAlign: "center",
//       color: "red",
//     },
//     iframe: {
//       border: "none",
//       overflow: "hidden",
//       display: "block",
//       margin: "60px auto",
//       borderRadius: "5px",
//       boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
//       width: "100%",
//       height: "650px",
//     },

//     inputContainer: {
//       display: "flex",
//       justifyContent: "center", // Opcional, centraliza o input
//     },
//     input: {
//       padding: "10px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       width: "17vw",
//     },

//     button: {
//       padding: "10px",
//       backgroundColor: "#F20DE7",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       position: 'relative',
//       right: '-130vh',
//       top: '-6vh'
//     },
//   };

//   const logoStyle = {
//     position: "relative",
//     right: "-20px",
//     width: "17vh",
//     height: "60px",
//     cursor: "pointer",
//   };
//   return (
//     <>
//       <div style={styles.Container}>
//         <div style={styles.header}>
//           <img
//             src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
//             alt="Logo Esquerdo"
//             style={logoStyle}
//             onClick={handleHome}
//           />
//           <h1
//             style={{
//               marginLeft: -55,
//               flexGrow: 1,
//               textAlign: "center",
//               fontSize: "23px",
//               fontFamily: "italic",
//             }}
//           >
//             Lista de OS
//           </h1>
//           <img
//             src="/saida.png"
//             alt="Home"
//             style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
//             onClick={handleHome}
//           />
//         </div>
//         {isLoading && <p style={styles.loading}>Carregando dados...</p>}
//         {error && <p style={styles.error}>Erro: {error}</p>}
//         <iframe
//           src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoS3n8ml9P_80I30zlTyWtGRnj3UVTPZ-wo86thagwT3ofUloRCGlrJdxDFrfGQuRURLAN6UJpKfQp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
//           style={styles.iframe}
//           title="Planilha Servidores"
//         />
//           <div style={styles.inputContainer}>
//             <input
//               type="number"
//               placeholder="Digite o número da linha a apagar"
//               value={linha}
//               style={styles.input}
//               onChange={handleInputChange}
//             />
//           </div>
//             <button onClick={() => apagarLinha(linha)} style={styles.button}>
//               Apagar Linha
//             </button>
//       </div>
//     </>
//   );
// };

// export default ListOS;
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleHome = () => navigate("/Lista_Controles");

  // Gerenciando o botão para apagar linha
  const [linha, setLinha] = useState("");
  const apagarLinha = async (linha) => {
    const url =
      "https://script.google.com/macros/s/AKfycbwDY3ecbBJv1JsNv5P_nwXmgDufL6oROpVn4azRvirZhPkTTztOTj0GDuSBIfox_NCSCA/exec"; // Substitua com o ID do seu Web App
    const params = `action=apagar&linha=${linha}`; // Passando a linha como parâmetro

    const options = {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Tipo correto para parâmetros no corpo
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      alert(result.message); // Exibe mensagem de sucesso ou erro
    } catch (error) {
      console.error("Erro ao apagar linha:", error);
    }
  };

  const handleInputChange = (e) => {
    setLinha(e.target.value);
  };

  // Estilos CSS em objetos para manter o código limpo e modular
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #9ba194, #9ba194)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: "2px",
      padding: "20px",
      position: "relative",
      top: "8vh",
      gap: "10px",
      paddingBottom: "20px", // Espaço no fundo para garantir a responsividade
    },
    header: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#00009C",
      color: "white",
      position: "fixed",
      top: 0,
      zIndex: 1000,
    },
    title: {
      fontSize: "2em", // Usando unidades relativas para responsividade
      display: "inline-block",
      color: "white",
      marginRight: "100px",
      textAlign: "center",
    },
    homeIcon: {
      cursor: "pointer",
      marginRight: "20px",
    },
    homeImage: {
      height: "40px",
      cursor: "pointer",
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
      margin: "60px auto",
      borderRadius: "5px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "1200px", // Limita o tamanho máximo do iframe
      height: "650px",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "center", // Centraliza o input
      width: "100%",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "80%", // Responsivo, ocupa 80% da largura da tela
      maxWidth: "400px", // Limita a largura máxima
    },
    button: {
      padding: "10px",
      backgroundColor: "#F20DE7",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px", // Espaço entre o input e o botão
    },
  };

  
  const logoStyle = {
    position: "relative",
    right: "-20px",
    width: "17vh",
    height: "60px",
    cursor: "pointer",
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <img
            src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
            alt="Logo Esquerdo"
            style={logoStyle}
            onClick={handleHome}
          />
          <h1 style={styles.title}>Lista de OS</h1>
          <img
            src="/saida.png"
            alt="Home"
            style={styles.homeImage}
            onClick={handleHome}
          />
        </div>
        {isLoading && <p style={styles.loading}>Carregando dados...</p>}
        {error && <p style={styles.error}>Erro: {error}</p>}
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoS3n8ml9P_80I30zlTyWtGRnj3UVTPZ-wo86thagwT3ofUloRCGlrJdxDFrfGQuRURLAN6UJpKfQp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          style={styles.iframe}
          title="Planilha Servidores"
        />
        <div style={styles.inputContainer}>
          <input
            type="number"
            placeholder="Digite o número da linha a apagar"
            value={linha}
            style={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={() => apagarLinha(linha)} style={styles.button}>
          Apagar Linha
        </button>
      </div>
    </>
  );
};

export default ListOS;
