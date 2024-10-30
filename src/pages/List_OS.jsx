import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

export default function List() {
  const [osData, setOsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const exportToExcel = () => {
    const table = document.querySelector("#itemsTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
    XLSX.writeFile(wb, "Lista_de_OS.xlsx");
    console.log("Exportando para Excel");
  };

  const fetchOSData = () => {
    const url =
      "https://script.google.com/macros/s/AKfycbw8e5A-OWIKnICU_GMj-jNWM4kk4YHLo2QRTekw-C8wufgElIm1eFd_6wja6IVT5IpX/exec";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchOSData();
  }, []);

  const handleHomeButtonClick = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#00009C",
          color: "white",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Esquerdo"
          style={{ height: "50px" }}
        />
        <h2 className="text-white">Lista de OS</h2>
        <button className="home-button" onClick={handleHomeButtonClick}>
          <img
            src="/saida.png"
            alt="Home"
            style={{ height: "50px", right: "10vh", position: "relative" }}
          />
        </button>
      </header>
      <div>
        <main>
          {/* <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv7Mqr3FQUc6wt153-_jHJF8g1Us6rLiHYjbUgLnRjQGsWftd6zYiCmZ3CwzrypwCaLxaihu4B09MF/pubhtml?widget=true&amp;headers=false"
            style={{ width: "148%", height: "200px", border: "none" }}
            title="Planilha OS"
          ></iframe> */}

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv7Mqr3FQUc6wt153-_jHJF8g1Us6rLiHYjbUgLnRjQGsWftd6zYiCmZ3CwzrypwCaLxaihu4B09MF/pubhtml?widget=true&amp;headers=false" 
style={{ width: "148%", height: "200px", border: "none" }}>
</iframe>

          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <table id="itemsTable">
              <thead>
                <tr>
                  <th>Número OS</th>
                  <th>Data Abertura</th>
                  <th>Data Fechamento</th>
                  <th>Solicitante</th>
                  <th>Departamento</th>
                  <th>Descrição do Problema</th>
                  <th>Técnico</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                {osData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.numero_os || ""}</td>
                    <td>{item.data_abertura || ""}</td>
                    <td>{item.data_fechamento || ""}</td>
                    <td>{item.solicitante || ""}</td>
                    <td>{item.departamento || ""}</td>
                    <td>{item.descricao_problema || ""}</td>
                    <td>{item.tecnico || ""}</td>
                    <td>{item.status || ""}</td>
                    <td>{item.observacoes || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <button
            onClick={exportToExcel}
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#20DE7F",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Exportar
          </button>
        </main>
      </div>
    </>
  );
}
