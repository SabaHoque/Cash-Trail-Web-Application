import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const buttonStyle = {
    backgroundColor: "#ff4c4c",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "30px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 5px 15px rgba(255, 76, 76, 0.6)",
    transition: "background-color 0.3s ease",
  };

  const navStyle = {
    width: "96vw",  
    padding: "10px 40px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 5px 20px rgba(255, 76, 76, 0.5)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "700", fontSize: "1.8rem" }}>
        Cash Trail
      </Link>

      {isAuthenticated ? (
        <>
          <Link
            to="/dashboard"
            style={{ color: "white", marginRight: 20, fontWeight: "600", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <button
            style={buttonStyle}
            onClick={handleLogout}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#cc3a3a")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ff4c4c")}
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          to="/login"
          style={buttonStyle}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#cc3a3a")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ff4c4c")}
        >
          Login
        </Link>
      )}
    </nav>
  );
}
