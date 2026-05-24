const CropCard = ({ crop }) => {
  return (
    <div
      style={{
        width: "320px",
        border: "1px solid gray",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={crop.image}
        alt={crop.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2>{crop.title}</h2>

        <p>Price: {crop.price} BDT</p>

        <button>View Details</button>
      </div>
    </div>
  );
};

export default CropCard;