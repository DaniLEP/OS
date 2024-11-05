import { useState } from "react";
import { motion } from "framer-motion";
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

  const handleHome = () => (window.location.href = "/Cadastro");

  const logoStyle = {
    width: "80px",
    height: "40px",
    cursor: "pointer",
  };
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #9ba194, #9ba194)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: "10px",
      padding: "20px",
      position: 'relative',
      top: "9vh"
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
      width: "80px",
      marginBottom: "10px",
    },
    h1: {
      fontSize: "1.8em",
      color: "white",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      maxWidth: "90%",
      width: "400px",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#F20DE7",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    homeIcon: {
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Esquerdo"
          style={logoStyle}
          onClick={handleHome}
        />
        <h1
          style={{
            margin: 0,
            flexGrow: 1,
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          Cadastro de Diário
        </h1>
        <img
          src="/saida.png"
          alt="Home"
          style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
          onClick={handleHome}
        />
      </div>
      <form id="dataForm" onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          placeholder="Digite a marca do notebook:"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="patrimonio"
          value={formData.patrimonio}
          onChange={handleChange}
          placeholder="Digite o patrimônio:"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="manutencao"
          value={formData.manutencao}
          onChange={handleChange}
          placeholder="Qual o problema do notebook:"
          required
          style={styles.input}
        />
        <select
          name="solucionado"
          value={formData.solucionado}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Problema foi solucionado?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <input
          type="text"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          placeholder="Escolha o dia:"
          required
          style={styles.input}
        />
        <select
          name="mes"
          value={formData.mes}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Selecione o mês</option>
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
          {/* demais opções de meses */}
        </select>
        <input
          type="number"
          name="ano"
          value={formData.ano}
          onChange={handleChange}
          placeholder="Digite o ano:"
          required
          style={styles.input}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
        >
          Salvar
        </motion.button>
        <motion.button
          type="button"
          onClick={limparFormulario}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
        >
          Limpar
        </motion.button>
        <button type="button" onClick={handleHome} style={styles.button}>
          Ir para Home
        </button>
      </form>
    </div>
  );
};

export default DataForm;
