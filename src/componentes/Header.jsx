import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    backgroundColor: '#00009C',
    color: 'white',
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed', // Fixa o header no topo
    top: '0', // Coloca no topo da página
    width: '100%', // Ocupa toda a largura
    zIndex: '1000', // Mantém o header acima de outros elementos
  };

  const logoStyle = {
    width: '100px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const h1Style = {
    fontSize: '30px',
    display: 'inline-block',
    verticalAlign: 'center',
  };

  const homeIconStyle = {
    cursor: 'pointer',
    marginRight: '20px',
  };

  const iconImgStyle = {
    position: 'relative',
    left: '-10vh',
    width: '40px',
  };

  return (
    <div style={headerStyle}>
      <img
        src="/Reciclar_Logo_Principal_Vertical_Negativo.png"
        alt="Logo Instituto Reciclar"
        style={logoStyle}
      />
      <h1 style={h1Style}>HOME</h1>
      <div className="home-icon" style={homeIconStyle}>
        <Link to={"/"}>
          <img src="/saida.png" alt="Home" style={iconImgStyle} />
        </Link>
      </div>
    </div>
  );
}
