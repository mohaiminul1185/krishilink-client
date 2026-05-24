import Navbar from "../components/Navbar";

const CropDetails = () => {
  return (
    <div>

      <Navbar />

      <div className="max-w-5xl mx-auto p-10">

        <div className="card bg-base-100 shadow-xl">

          <figure>
            <img
              src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="h-96 w-full object-cover"
            />
          </figure>

          <div className="card-body">

            <h2 className="card-title text-4xl">
              Tomato
            </h2>

            <p>
              Fresh Organic Tomato from Bogura
            </p>

            <p>
              Price: 50 TK
            </p>

            <p>
              Quantity: 100 KG
            </p>

            <button className="btn btn-success mt-5">
              Send Interest
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;