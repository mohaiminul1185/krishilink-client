import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f1f5f9",
        }}
      >
        <div
          style={{
            width: "400px",
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "35px",
            }}
          >
            Register
          </h1>

          <input
            type="text"
            placeholder="Name"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "14px",
              background: "#22c55e",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;