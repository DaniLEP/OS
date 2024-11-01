import { useState } from "react";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";

const DataForm = () => {
  const [formData, setFormData] = useState({
    marca: "",
    patrimonio: "",
    manutencao: "",
    solucionado: "",
    dia: "",
    mes: "",
    ano: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbziLxygw1nUFcXMqfKqtCxCsQr_fvsegk0U81E2GUmPi2Kl9vPNdJfgMKoouv3I-AXq/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        alert("OS salva com sucesso!");
        setFormData({
          marca: "",
          patrimonio: "",
          manutencao: "",
          solucionado: "",
          dia: "",
          mes: "",
          ano: "",
        });
      })
      .catch((error) => console.error("Erro:", error));
  };

  const limparFormulario = () => {
    setFormData({
      marca: "",
      patrimonio: "",
      manutencao: "",
      solucionado: "",
      dia: "",
      mes: "",
      ano: "",
    });
  };

// CSS DA HEADER
  const irParaHome = () => {
    window.location.href = "/Home"; // Substitua pelo caminho correto para a página inicial
  };

  const logoStyle = {
    width: '100px',
    position: 'relative',
    left: '-62vh',
    top: '1vh'
  };

  const h1Style = {
    fontSize: '40px',
    display: 'inline-block',
    verticalAlign: 'center',
    color: 'white',
    marginRight: '100px'
  };

  const homeIconStyle = {
    cursor: 'pointer',
    marginRight: '20px',
  };

  const iconImgStyle = {
    position: 'relative',
    left: '97vh',
    width: '40px',
    top: '-12vh'
  };

  return (
    <div style={{ backgroundColor: "#00009C", minHeight: "100vh", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
        alt="Logo Instituto Reciclar"
        style={logoStyle}
      />
      <h1 style={h1Style}>Notebook em Manutenção</h1>
      <div className="home-icon" style={homeIconStyle}>
        <Link to={"/Cadastro"}>
          <img src="/saida.png" alt="Home" style={iconImgStyle} />
        </Link>
        </div>
      </header>

      <form
        id="dataForm"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          placeholder="Digite a marca do notebook:"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          name="patrimonio"
          value={formData.patrimonio}
          onChange={handleChange}
          placeholder="Digite o patrimônio:"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          name="manutencao"
          value={formData.manutencao}
          onChange={handleChange}
          placeholder="Qual o problema do notebook:"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          name="solucionado"
          value={formData.solucionado}
          onChange={handleChange}
          placeholder="Problema foi solucionado?"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          placeholder="Escolha o dia:"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <select
          name="mes"
          value={formData.mes}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">Selecione o mês</option>
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </select>
        <input
          type="number"
          name="ano"
          value={formData.ano}
          onChange={handleChange}
          placeholder="Digite o ano:"
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px",
            backgroundColor: "#F20DE7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Salvar
        </motion.button>
        <motion.button
          type="button"
          onClick={limparFormulario}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px",
            backgroundColor: "#F20DE7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Limpar
        </motion.button>
        <button
          type="button"
          onClick={irParaHome}
          style={{
            padding: "10px",
            backgroundColor: "#F20DE7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Ir para Home
        </button>
      </form>
    </div>
  );
};

export default DataForm;
