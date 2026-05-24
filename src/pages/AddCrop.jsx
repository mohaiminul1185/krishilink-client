import { useEffect, useState } from "react";

const AllCrops = () => {

  const [crops, setCrops] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/crops")
      .then(res => res.json())
      .then(data => setCrops(data));

  }, []);

  return (
    <div>

      <h2>All Crops</h2>

      {
        crops.map(crop => (

          <div key={crop._id}>

            <img
              src={crop.image}
              alt=""
              width="200"
            />

            <h3>{crop.cropName}</h3>

            <p>{crop.category}</p>

            <p>{crop.quantity}</p>

            <p>{crop.price}</p>

            <p>{crop.location}</p>

          </div>
        ))
      }

    </div>
  );
};

export default AllCrops;