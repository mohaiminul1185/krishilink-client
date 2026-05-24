import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/crops")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "40px",
          }}
        >
          All Crops
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {crops.map((crop) => (
            <div
              key={crop._id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={crop.image}
                alt={crop.cropName}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h2
                  style={{
                    marginBottom: "15px",
                    fontSize: "28px",
                  }}
                >
                  {crop.cropName}
                </h2>

                <p>
                  <strong>Category:</strong> {crop.category}
                </p>

                <p>
                  <strong>Quantity:</strong> {crop.quantity}
                </p>

                <p>
                  <strong>Price:</strong> {crop.price}
                </p>

                <p>
                  <strong>Location:</strong> {crop.location}
                </p>

                <button
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#22c55e",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCrops;