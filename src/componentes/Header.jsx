import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
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
  };

  const logoStyle = {
    width: "110px",
    height: "70px",
    cursor: "pointer",
  };

  const h1Style = {
    fontSize: "30px",
    display: "inline-block",
    marginLeft: "-50px",
  };

  const homeIconStyle = {
    cursor: "pointer",
    marginRight: "20px",
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
          <img
            src="/saida.png"
            alt="Home"
            style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
}
