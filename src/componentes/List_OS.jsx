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
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #9ba194, #9ba194)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: "2px",
      padding: "20px",
      position: 'relative',
      top: "8vh"
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

  
  const logoStyle = {
    width: '70px',
    height: "40px",
    cursor: "pointer",
    
  };

  return (
    <div style={styles.container}>
         <div style={styles.header}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Esquerdo"
          style={logoStyle}
          onClick={irParaHome}
        />
        <h1 style={{ margin: 0, flexGrow: 1, textAlign: "center", fontSize: "1.2rem" }}>
          Lista de OS
        </h1>
        <img
          src="/saida.png"
          alt="Home"
          style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
          onClick={irParaHome}
        />
      </div>
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


// import { useState, useEffect } from "react";

// const ListOS = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const CLIENT_ID = "SEU_CLIENT_ID.apps.googleusercontent.com"; // Substitua pelo seu Client ID do Google
//   const API_KEY = "AIzaSyAdxxCdh6hd_T5bNObomERoL6Znw75b83o"; // Insira sua chave da API
//   const SHEET_ID = "15bhwFjgshG7yBCKoemy4R2HmaL62gv8p0gtC6lhNFtk"; // Insira o ID da sua planilha
//   const RANGE = "ABERTURA OS";

//   useEffect(() => {
//     loadGoogleAPI();
//   }, []);

//   // Função para carregar a biblioteca Google API
//   const loadGoogleAPI = () => {
//     window.gapi.load("client:auth2", initClient);
//   };

//   // Inicializa o cliente Google API e autentica o usuário
//   const initClient = () => {
//     window.gapi.client.init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//       scope: "https://www.googleapis.com/auth/spreadsheets",
//     }).then(() => {
//       const authInstance = window.gapi.auth2.getAuthInstance();
//       setIsAuthenticated(authInstance.isSignedIn.get());
//       authInstance.isSignedIn.listen((signedIn) => setIsAuthenticated(signedIn));
//     });
//   };

//   // Função para fazer a autenticação
//   const authenticate = async () => {
//     const authInstance = window.gapi.auth2.getAuthInstance();
//     await authInstance.signIn();
//     setIsAuthenticated(true);
//   };

//   // Função para atualizar dados na planilha
//   const updateSheetData = async () => {
//     const authInstance = window.gapi.auth2.getAuthInstance();
//     const accessToken = authInstance.currentUser.get().getAuthResponse().access_token;

//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?valueInputOption=USER_ENTERED&key=${API_KEY}`;
//     const body = {
//       range: RANGE,
//       values: [["Novo Valor"]], // Substitua pelo valor que deseja enviar
//     };

//     try {
//       const response = await fetch(url, {
//         method: "PUT",
//         headers: {
//           "Authorization": `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });

//       if (!response.ok) {
//         throw new Error(`Erro ao atualizar dados: ${response.status}`);
//       }

//       alert("Dados atualizados com sucesso!");
//     } catch (error) {
//       console.error("Erro ao atualizar dados:", error);
//       alert("Erro ao atualizar dados");
//     }
//   };

//   // Carregando a API
//   const fetchOSData = async () => {
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Erro ao buscar dados: ${response.status} ${response.statusText}. Detalhes: ${errorText}`);
//       }
//       const data = await response.json();
//       console.log("Dados recebidos:", data);
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

//   const irParaHome = () => {
//     window.location.href = "/Lista_Controles";
//   };

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
//       position: 'relative',
//       top: "8vh",
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
//       width: "100px",
//       position: "relative",
//       left: "-40vh",
//       top: "1vh",
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
//       margin: "20px auto",
//       borderRadius: "5px",
//       boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
//       width: "100%",
//       height: "550px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <img
//           src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
//           alt="Logo Esquerdo"
//           style={styles.logo}
//           onClick={irParaHome}
//         />
//         <h1 style={{ margin: 0, flexGrow: 1, textAlign: "center", fontSize: "1.2rem" }}>
//           Lista de OS
//         </h1>
//         <img
//           src="/saida.png"
//           alt="Home"
//           style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
//           onClick={irParaHome}
//         />
//       </div>

//       {isLoading && <p style={styles.loading}>Carregando dados...</p>}
//       {error && <p style={styles.error}>Erro: {error}</p>}
      
//       {/* Exibe o botão de autenticação e atualização dos dados */}
//       {!isAuthenticated ? (
//         <button onClick={authenticate}>Autenticar com Google</button>
//       ) : (
//         <button onClick={updateSheetData}>Atualizar Dados da Planilha</button>
//       )}
      
//       <iframe
//         src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRoS3n8ml9P_80I30zlTyWtGRnj3UVTPZ-wo86thagwT3ofUloRCGlrJdxDFrfGQuRURLAN6UJpKfQp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
//         style={styles.iframe}
//         title="Planilha Servidores"
//       />
//     </div>
//   );
// };

// export default ListOS;
