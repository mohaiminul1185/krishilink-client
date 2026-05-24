import CropCard from "./CropCard";

const LatestCrops = () => {
  const crops = [
    {
      id: 1,
      title: "Rice",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600",
    },
  ];

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Latest Crops
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
       
        {crops.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
};

export default LatestCrops;