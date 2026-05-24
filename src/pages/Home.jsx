import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "50px",
            borderRadius: "20px",
            maxWidth: "650px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "65px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Smart Agriculture For Modern Farmers
          </h1>

          <p
            style={{
              color: "#e2e8f0",
              fontSize: "20px",
              marginBottom: "30px",
              lineHeight: "1.8",
            }}
          >
            Buy and sell crops easily with KrishiLink. Connecting farmers and
            buyers across Bangladesh.
          </p>

          <Link
            to="/allcrops"
            style={{
              background: "#22c55e",
              padding: "15px 30px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Explore Crops
          </Link>
        </div>
      </div>

      {/* Features */}
      <div
        style={{
          padding: "80px 60px",
          background: "#f8fafc",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "60px",
          }}
        >
          Why Choose KrishiLink
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                color: "#22c55e",
                marginBottom: "20px",
              }}
            >
              Fresh Crops
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              Farmers provide fresh crops directly from farms with premium
              quality assurance.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                color: "#22c55e",
                marginBottom: "20px",
              }}
            >
              Trusted Farmers
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              Verified farmers and secure crop selling system for trusted
              business.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                color: "#22c55e",
                marginBottom: "20px",
              }}
            >
              Easy Management
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.8",
              }}
            >
              Manage crop prices, quantity and orders with an easy dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          background: "#0f172a",
          color: "white",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <h1
              style={{
                color: "#22c55e",
                fontSize: "55px",
              }}
            >
              500+
            </h1>

            <p>Farmers</p>
          </div>

          <div>
            <h1
              style={{
                color: "#22c55e",
                fontSize: "55px",
              }}
            >
              1200+
            </h1>

            <p>Crop Listings</p>
          </div>

          <div>
            <h1
              style={{
                color: "#22c55e",
                fontSize: "55px",
              }}
            >
              64
            </h1>

            <p>Districts</p>
          </div>

          <div>
            <h1
              style={{
                color: "#22c55e",
                fontSize: "55px",
              }}
            >
              24/7
            </h1>

            <p>Support</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#020617",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>KrishiLink</h2>

        <p style={{ color: "#94a3b8" }}>
          © 2026 KrishiLink. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;