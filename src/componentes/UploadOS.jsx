import { useState } from "react";

const CadastroForm = () => {
  const initialFormData = {
    numero_os: "",
    abertura: "",
    vencimento: "",
    solicitante: "",
    departamento: "",
    descricao_problema: "",
    tecnico: "",
    status: "",
    observacoes: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbwihGFyWr9xB1mawj0zDZVq7e7YIx_LjEj_14unFPB3PguaEsyNHNPZKbj6zqY3_uan8w/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        alert("OS salva com sucesso!");
        setFormData(initialFormData);
      })
      .catch((error) => console.error("Erro ao salvar:", error));
  };

  const handleReset = () => setFormData(initialFormData);

  const handleHome = () => (window.location.href = "/Cadastro");
  
  const logoStyle = {
    width: '100px',
    position: 'relative',
    left: '-68vh',
    top: '1vh',
    height: "50px", 
    cursor: "pointer"
  };
  


  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to bottom, #9ba194, #9ba194)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: "80px",
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
    formWrapper: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "80%",
      maxWidth: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: { padding: "8px", marginTop: "5px", width: "100%" },
    button: {
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "#ccc",
      color: "black",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
    submitButton: {
      backgroundColor: "#F20DE7",
      color: "white",
      marginTop: "20px",
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
        <h1 style={{ margin: 0, flexGrow: 1, textAlign: "center" }}>
          Cadastro de OS
        </h1>
        <img
          src="/saida.png"
          alt="Home"
          style={{ height: "50px", cursor: "pointer", marginRight: "20px" }}
          onClick={handleHome}
        />
      </div>

      <div style={styles.formWrapper}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {[
            { id: "numero_os", label: "Número da OS", type: "text" },
            { id: "abertura", label: "Data de Abertura", type: "date" },
            { id: "vencimento", label: "Data de Vencimento", type: "date" },
            { id: "observacoes", label: "Observações", type: "textarea" },
          ].map((field) => (
            <div key={field.id} style={{ marginTop: "10px" }}>
              <label htmlFor={field.id}>{field.label}:</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  style={styles.input}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              )}
            </div>
          ))}

          {/* Campos de seleção */}
          {[
            {
              id: "solicitante",
              label: "Solicitante",
              options: ["ESCOLHA O SOLICITANTE",  "Ana Paula Felix Damas",
                "Anderson Braghin Rosseto",
                "Bruna Cristina Correia Porto",
                "Carlos Henrique de Lima",
                "Carolina Roberta Peixoto do Nascimento",
                "Ciro Gustavo Barbosa de Oliveira",
                "Cleyson Aparecido Brito",
                "Daiane da Silva dos Santos",
                "Danilo Santos Manzoli",
                "Débora Praxades de Souza",
                "Edilaine de Souza Santos",
                "Eleilde Barbosa Santos",
                "Elisa Lima Villaméa Cotta",
                "Evandro Nogueira Santana Junior",
                "Fabrícia Santos da Silva",
                "Flavia Mello Rezende de Pinho",
                "Gabrielly Souza Lemes Guedes De Oliveira",
                "Gleydson Aparecido de Britto",
                "GPS",
                "Isadora Bonetto Ferrari",
                "Jaqueline das Virgens",
                "Jenifer de Jesus Brito",
                "Jéssica de Assis Figueiredo",
                "João Pedro Viana Corrêa",
                "João Vitor Naldi dos Santos",
                "JOVENS",
                "Karoline Barbosa Beretta",
                "Larissa Cristina Daniel Ferreira",
                "Luciano Rodrigues de Lima",
                "Luisa Nascimento Handro",
                "Maria Beatriz Calaresi Ricca",
                "Maria das Neves Amador Umbelino",
                "Maria José dos Santos",
                "Maria Mislene Pereira Lages",
                "Natália Rosa Muniz Sierpinski",
                "Paulo Henrique Yaekashi",
                "Rafael de Souza Villares",
                "Rosilene Teodora Batista de Sousa",
                "Tainá Diogo da Silva",
                "Thainá Oliveira de Sousa",
                "Vivian Lavander Mendonça",
                "Viviane de Jesus do Nascimento"],
            },
            {
              id: "departamento",
              label: "Departamento",
              options: [
                "ESCOLHA O DEPARTAMENTO",
                "ADMINISTRATIVO / FINANCEIRO",
                "COMUNICAÇÃO",
                "DI",
                "EQUIPE/EDUCACIONAL",
                "JOVENS/EDUCACIONAL",
                "RH",
                "T.I"
              ],
            },
            {
              id: "descricao_problema",
              label: "Descrição do Problema",
              options: [
                "ESCOLHA O PROBLEMA",
                "ARTE FINAL",
                "CAMERA",
                "CAMERA FOTOGRAFICA",
                "COMPUTADOR NÃO LIGA",
                "CONEXÃO PROJETOR",
                "FALHA DE LOGIN SERVIDOR",
                "FALHA IMPRESSORA",
                "FALHA ROTEADOR",
                "FALHA SWITCHES",
                "FONTE",
                "FORMATAÇÃO DE PC",
                "GOOGLE MEET",
                "IP",
                "ORGANIZAÇÃO",
                "MICROFONE",
                "PACOTE OFFICE",
                "PANICO",
                "PC TRAVANDO",
                "PROBLEMA COM SENHA",
                "QUEDA DE INTERNET",
                "SENHA E-MAIL",
                "TEAMS",
                "TROCA DE BATERIA",
                "TROCA DE HD",
                "TROCA DE MEMORIA RAM",
                "TROCA DE MOUSE",
                "TROCA DE TECLADO",
                "TROCA DE TELA",
                "TROCA DE TONER",
                "VELOCIDADE DE INTERNET",
                "CHAVEIRO",
                "ZOOM",
                /* outras opções... */
              ],
            },
            {
              id: "tecnico",
              label: "Técnico Responsável",
              options: ["ESCOLHA O TÉCNICO", "CLEYSON", "DANILO"],
            },
          ].map((field) => (
            <div key={field.id} style={{ marginTop: "10px" }}>
              <label htmlFor={field.id}>{field.label}:</label>
              <select
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                required
                style={styles.input}
              >
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>
            Salvar
          </button>
          <button type="button" onClick={handleReset} style={styles.button}>
            Limpar
          </button>
          <button type="button" onClick={handleHome} style={styles.button}>
            Voltar para Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
