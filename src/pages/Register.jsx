import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    numero_os: "",
    data_abertura: "",
    data_vencimento: "",
    solicitante: "",
    departamento: "",
    descricao_problema: "",
    tecnico: "",
    status: "",
    observacoes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw8e5A-OWIKnICU_GMj-jNWM4kk4YHLo2QRTekw-C8wufgElIm1eFd_6wja6IVT5IpX/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("OS salva com sucesso!");
        limparFormulario();
      } else {
        setMessage("Erro ao salvar a OS. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage("Erro ao conectar ao servidor. Tente novamente.");
    }
  };

  const limparFormulario = () => {
    setFormData({
      numero_os: "",
      data_abertura: "",
      data_vencimento: "",
      solicitante: "",
      departamento: "",
      descricao_problema: "",
      tecnico: "",
      status: "",
      observacoes: "",
    });
    setMessage("");
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <img
          src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
          alt="Logo Esquerdo"
          style={styles.logo}
        />
        <h1 style={styles.headerTitle}>Cadastro de OS</h1>
        <img
          src="/saida.png"
          alt="Home"
          style={styles.homeIcon}
          onClick={() => window.location.href = '/home'} // Corrigido para redirecionar corretamente
        />
      </div>
      <div style={styles.container}>
        {message && <p>{message}</p>}
        <form id="dataForm" onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="numero_os">Número da OS:</label>
          <input
            type="text"
            id="numero_os"
            value={formData.numero_os}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="data_abertura">Data de Abertura:</label>
          <input
            type="date"
            id="data_abertura"
            value={formData.data_abertura}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="data_vencimento">Data de Vencimento:</label>
          <input
            type="date"
            id="data_vencimento"
            value={formData.data_vencimento}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="solicitante">Solicitante:</label>
          <select
            id="solicitante"
            value={formData.solicitante}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">ESCOLHA O SOLICITANTE</option>
            <option value="Ana Paula Felix Damas">ANA PAULA FELIX DAMAS</option>
            <option value="Anderson Braghin Rosseto">ANDERSON BRAGHIN ROSSETO</option>
            <option value="Bruna Cristina Correia Porto">BRUNA CRISTINA CORREIA PORTO</option>
            {/* Adicione mais opções conforme necessário */}
          </select>

          <label htmlFor="departamento">Departamento:</label>
          <select
            id="departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">ESCOLHA O DEPARTAMENTO</option>
            <option value="ADMINISTRATIVO / FINANCEIRO">ADMINISTRATIVO / FINANCEIRO</option>
            <option value="COMUNICAÇÃO">COMUNICAÇÃO</option>
            <option value="DI">DI</option>
            <option value="EDUCACIONAL">EDUCACIONAL</option>
            <option value="RH">RH</option>
            <option value="TI">TI</option>
          </select>

          <label htmlFor="descricao_problema">Descrição do Problema:</label>
          <select
            id="descricao_problema"
            value={formData.descricao_problema}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">ESCOLHA O PROBLEMA</option>
            <option value="ARTE FINAL">ARTE FINAL</option>
            <option value="CAMERA">CÂMERA</option>
            <option value="COMPUTADOR NÃO LIGA">COMPUTADOR NÃO LIGA</option>
            {/* Adicione mais opções conforme necessário */}
          </select>

          <label htmlFor="tecnico">Técnico Responsável:</label>
          <select
            id="tecnico"
            value={formData.tecnico}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">ESCOLHA O TÉCNICO</option>
            <option value="CLEYSON">CLEYSON</option>
            <option value="DANILO">DANILO</option>
          </select>

          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={formData.status}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">ESCOLHA O STATUS</option>
            <option value="aberto">ABERTO</option>
            <option value="em_andamento">EM ANDAMENTO</option>
            <option value="fechada">FECHADA</option>
          </select>

          <label htmlFor="observacoes">OBSERVAÇÕES:</label>
          <textarea
            id="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            style={styles.textarea}
          />

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Salvar
            </button>
            <button
              type="button"
              style={{ ...styles.button, backgroundColor: "#F20DE7" }}
              onClick={limparFormulario}
            >
              Limpar
            </button>
            <button
              type="button"
              style={styles.button}
              onClick={() => window.location.href = '/home'} // Corrigido para redirecionar corretamente
            >
              Voltar para Home
            </button>
          </div>
        </form>
        <div id="output"></div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to bottom, #9ba194, #9ba194)",
    margin: 0,
    height: "160vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    left: 0,
    zIndex: 1000,
  },
  headerTitle: {
    margin: 0,
    textAlign: "center",
    flexGrow: 1,
  },
  logo: {
    height: "50px",
    cursor: "pointer",
    marginRight: "20px",
  },
  homeIcon: {
    height: "50px",
    cursor: "pointer",
    marginRight: "20px",
  },
  container: {
    marginTop: "100px",
    width: "90%",
    maxWidth: "600px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Register;
