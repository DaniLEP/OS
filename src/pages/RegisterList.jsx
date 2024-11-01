import { Link } from "react-router-dom";

export default function RegisterList() {
    return (
        <>
            <div 
                style={{
                    backgroundColor: "#00009c",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div 
                    style={{
                        maxWidth: "1200px",
                        width: "100%",
                        padding: "0 1rem",
                        textAlign: "center",
                    }}
                >
                    {/* Título Responsivo */}
                    <span 
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "2.5rem", // Ajuste para dispositivos menores
                            fontFamily: "ChakraPetch, sans-serif",
                        }}
                    >
                        Lista de Cadastros
                    </span>
                    <div 
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "1.5rem",
                            marginTop: "3rem",
                        }}
                    >
                        {/* Card 1 - Estoque */}
                        <div 
                            style={{
                                backgroundColor: "white",
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                padding: "1.5rem",
                                cursor: "pointer",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <Link to="/Cadastro_OS" style={{ textDecoration: "none", color: "inherit" }}>
                                <img 
                                    src="/os.png" 
                                    style={{ height: "100px", maxHeight: "140px", marginBottom: "1rem" }} 
                                    alt="Proteinas" 
                                />
                                <h2 
                                    style={{
                                        color: "black",
                                        fontSize: "1.5rem", // 24px
                                        fontWeight: "600",
                                    }}
                                >
                                   Cadastro de OS
                                </h2>
                            </Link>
                        </div>

                        {/* Card - Ref. Servidas */}
                        <div 
                            style={{
                                backgroundColor: "white",
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                padding: "1.5rem",
                                cursor: "pointer",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <Link to="/Cadastro_diario" style={{ textDecoration: "none", color: "inherit" }}>
                                <img 
                                    src="/cadastros.png" 
                                    style={{ height: "100px", maxHeight: "140px", marginBottom: "1rem" }} 
                                    alt="Mantimentos" 
                                />
                                <h2 
                                    style={{
                                        color: "black",
                                        fontSize: "1.5rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    Cadastro de Equipamentos
                                </h2>
                            </Link>
                        </div>

                        {/* Card 3 - Voltar */}
                        <div 
                            style={{
                                backgroundColor: "white",
                                borderRadius: "0.75rem",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                                padding: "1.5rem",
                                cursor: "pointer",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <Link to="/Home" style={{ textDecoration: "none", color: "inherit" }}>
                                <img 
                                    src="/return.svg" 
                                    style={{ height: "100px", maxHeight: "140px", marginBottom: "1rem" }} 
                                    alt="Voltar" 
                                />
                                <h2 
                                    style={{
                                        color: "black",
                                        fontSize: "1.5rem",
                                        fontWeight: "600",
                                    }}
                                >
                                    Voltar para Home
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
