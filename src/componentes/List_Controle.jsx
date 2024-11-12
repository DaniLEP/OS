// import { useState, useEffect } from 'react';

// const ListControle = () => {
//     const [osData, setOsData] = useState([]); // Dados da OS
//     const [error, setError] = useState(null); // Mensagem de erro
//     const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

//     const fetchOSData = async () => {
//         const API_KEY = 'AIzaSyACM5BtNa4wgFSKy2n87mr8ElK6hXw4beY'; // Insira sua nova chave da API aqui
//         const SHEET_ID = '1vm-EPQ7U4qmLo7xX9tHPXJHJq9I5uumyAmHIXUrnpp8';
//         const RANGE = 'SERVIDORES';

//         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 const errorText = await response.text();
//                 throw new Error(`Erro ao buscar dados: ${response.status} ${response.statusText}. Detalhes: ${errorText}`);
//             }
//             const data = await response.json();
//             console.log("Dados recebidos:", data);
//             if (data.values && data.values.length > 1) {
//                 const processedData = data.values.slice(1).map((row) => ({
//                     marca: row[0],
//                     patrimonio: row[1],
//                     manutencao: row[2],
//                     solucionado: row[3],
//                     dia: row[4],
//                     mes: row[5],
//                     ano: row[6],
//                 }));
//                 setOsData(processedData);
//             } else {
//                 console.error("Dados não encontrados ou a planilha está vazia.");
//             }
//         } catch (error) {
//             console.error("Erro ao buscar dados:", error);
//             setError(error.message); // Armazena a mensagem de erro no estado
//         } finally {
//             setIsLoading(false); // Atualiza o estado de carregamento
//         }
//     };

//     useEffect(() => {
//         fetchOSData(); // Chama a função ao montar o componente
//     }, []); // [] garante que a função seja chamada apenas uma vez ao montar

//     return (
//         <div>
//             {isLoading && <p>Carregando dados...</p>}
//             {error && <p>Erro: {error}</p>}
//             <ul>
//                 {osData.map((os, index) => (
//                     <li key={index}>{os.marca} - {os.patrimonio}</li>
//                 ))}
//             </ul>
//             {/* Aqui está o iframe adicionado */}
//             <iframe
//     src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdHXKmKVaLEIaMOgnp2Avm0m2B9qFYwf-2BlmgbTDLVAD5mkX6UIxBc-UbsaDGlAeI1oH288gtgC8Z/pubhtml?widget=true&amp;headers=false"
//     width="13490"
//     height="400"
// style={{ border: 'none', overflow: "hidden" }}
//     title="Planilha Servidores"
// />
//         </div>
//     );
// };

// export default ListControle;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListControle = () => {
  const [error, setError] = useState(null); // Mensagem de erro
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  const fetchOSData = async () => {
    const API_KEY = "AIzaSyACM5BtNa4wgFSKy2n87mr8ElK6hXw4beY"; // Insira sua nova chave da API aqui
    const SHEET_ID = "1vm-EPQ7U4qmLo7xX9tHPXJHJq9I5uumyAmHIXUrnpp8";
    const RANGE = "SERVIDORES";

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
      console.log("Dados recebidos:", data);
      // Não é mais necessário processar os dados, pois não exibe exibindo a lista.
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError(error.message); // Armazena a mensagem de erro no estado
    } finally {
      setIsLoading(false); // Atualiza o estado de carregamento
    }
  };

  useEffect(() => {
    fetchOSData(); // Chama a função ao montar o componente
  }, []); // [] garante que a função seja chamada apenas uma vez ao montar

  const navigate = useNavigate();

  const handleHome = () => navigate("/Lista_Controles");

  // CSS DA HEADER

  const logoStyle = {
    position: "relative",
    right: "-20px",
    width: "17vh",
    height: "60px",
    cursor: "pointer",
  };

  const styles = {
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
  };
  return (
    <div
      style={{
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
      }}
    >
      <div style={styles.header}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Esquerdo"
          style={logoStyle}
          onClick={handleHome}
        />
        <h1
          style={{
            marginLeft: -5,
            flexGrow: 1,
            textAlign: "center",
            fontSize: "23px",
            fontFamily: "italic",
          }}
        >
          Controle de Equipamentos
        </h1>
        <img
          src="/saida.png"
          alt="Home"
          style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
          onClick={handleHome}
        />
      </div>
      {isLoading && (
        <p style={{ textAlign: "center", color: "#F20DE7" }}>
          Carregando dados...
        </p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>Erro: {error}</p>
      )}
      {/* Aqui está o iframe adicionado */}
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTdHXKmKVaLEIaMOgnp2Avm0m2B9qFYwf-2BlmgbTDLVAD5mkX6UIxBc-UbsaDGlAeI1oH288gtgC8Z/pubhtml?widget=true&amp;headers=false"
        width="100%"
        height="550"
        style={{
          border: "none",
          overflow: "hidden",
          display: "block",
          margin: "20px auto",
          borderRadius: "5px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
        title="Planilha Servidores"
      />
    </div>
  );
};

export default ListControle;
