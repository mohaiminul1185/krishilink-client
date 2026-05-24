import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <div className="max-w-xl mx-auto p-10">

        <div className="card bg-base-100 shadow-xl p-10">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-5">
            Profile
          </h1>

          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 rounded-full mx-auto"
          />

          <h2 className="text-2xl font-bold text-center mt-5">
            {user?.displayName}
          </h2>

          <p className="text-center">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;