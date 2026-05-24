import Navbar from "../components/Navbar";

const MyInterests = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          My Interests
        </h1>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr>
                <th>Crop</th>
                <th>Owner</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Tomato</td>
                <td>Rahim</td>
                <td>50kg</td>
                <td>
                  <span className="badge badge-warning">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyInterests;