import { useState } from "react"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const DataForm = () => {
  const [formData, setFormData] = useState({
    marca: "",
    patrimonio: "",
    manutencao: "",
    solucionado: "",
    dia: "",
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

    // Formata a data para o formato "dd/MM/yyyy" antes de enviar
    const dataFormatada = formData.dia ? format(new Date(formData.dia), "dd/MM/yyyy") : "";

    fetch("https://script.google.com/macros/s/AKfycby8qvxt1Y6Q8IQDaIkRokmVKbXLAPyqQyolxP0v8dc5VK2lmiRxr5wJ6IOMpSL1AAMnAg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, dia: dataFormatada }),
    })
      .then(() => {
        alert("OS salva com sucesso!");
        setFormData({
          marca: "",
          patrimonio: "",
          manutencao: "",
          solucionado: "",
          dia: "",
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
    });
  };

  const navigate = useNavigate();
  const handleHome = () => navigate("/Cadastro");

  const logoStyle = {
    position: 'relative',
    right: '-20px',
    width: '21vh',
    height: "60px",
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
      paddingTop: "26px",
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
        <h1 style={{ marginLeft: -55, flexGrow: 1, textAlign: "center", fontSize: "23px", fontFamily: 'italic' }}>
          Cadastro Diário
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
          <option value="Descarte">Descarte</option>
          <option value="Não tem computador em manutenção">Não tem computador em manutenção</option>
        </select>
        <input
          type="date"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          placeholder="Escolha o dia:"
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
