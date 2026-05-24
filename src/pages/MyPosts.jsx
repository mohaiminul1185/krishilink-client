import Navbar from "../components/Navbar";

const MyPosts = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          My Posts
        </h1>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Tomato</td>
                <td>50</td>
                <td>100</td>

                <td className="space-x-2">

                  <button className="btn btn-sm btn-info">
                    Edit
                  </button>

                  <button className="btn btn-sm btn-error">
                    Delete
                  </button>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;