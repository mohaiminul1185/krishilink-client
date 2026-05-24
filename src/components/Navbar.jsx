import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "18px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1
        style={{
          color: "#22c55e",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        KrishiLink
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/allcrops"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          All Crops
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            background: "#22c55e",
            padding: "10px 20px",
            borderRadius: "10px",
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;