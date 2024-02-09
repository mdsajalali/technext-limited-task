import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        User Name: {user.firstName + " " + user.lastName}
      </h1>
      <div className="flex items-center mb-4">
        <img
          src={user.image}
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Address:</h3>
        {/* Display address information */}
        <p>{user.address.address}</p>
        <p>{user.address.city}</p>
        {/* Display company name */}
        <p>{user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
