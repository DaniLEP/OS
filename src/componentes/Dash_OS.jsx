import { useNavigate } from "react-router-dom";

export default function DashOS() {
    const navigate = useNavigate();

    const handleHome = () => navigate("/Dashboard");

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
            height: "60px"
        },
        iframeContainer: {
            width: '98vw',
            height: 'calc(100vh - 60px)', 
            marginTop: '65px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    };

    const logoStyle = {
        position: 'relative',
        right: '-20px',
        width: '17vh',
        height: "60px",
        cursor: "pointer",
    };

    return (
        <>
            <div style={styles.header}>
                <h1 style={{ marginLeft: 55, flexGrow: 1, textAlign: "center", fontSize: "23px", fontFamily: 'italic' }}>
                    Dashboard de OS
                </h1>
                <img
                    src="/saida.png"
                    alt="Home"
                    style={{ height: "40px", cursor: "pointer", marginRight: "20px" }}
                    onClick={handleHome}
                />
            </div>
            <div style={styles.iframeContainer}>
                <iframe 
                    title="OS DE SERVIÇOS" 
                    src="https://app.powerbi.com/view?r=eyJrIjoiYTM2MGY5NDEtZDMwZi00NzBlLWI4M2YtZDY0MWJjNTFmZDk3IiwidCI6ImE5ZTVhM2Y2LTE1ZjUtNGVmOC05OTI0LTAyM2RkYmIwMmI5ZCJ9" 
                    style={{ width: '100%', height: '100%', border: 'none' }} 
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
}
