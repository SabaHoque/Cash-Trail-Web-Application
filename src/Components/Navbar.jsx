import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav
  style={{
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(255, 0, 0, 0.5)", 
    position: "sticky",
    top: 0,
    zIndex: 1000,
  }}
>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        <h1>Cash Trail</h1>
      </Link>

      {isAuthenticated ? (
        <>
          <Link to="/dashboard" style={{ color: "#fff", marginRight: 15 }}>
            Dashboard
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/" style={{ color: "#fff" }}>
          Log in
        </Link>
      )}
    </nav>
  );
}
