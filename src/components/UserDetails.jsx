import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <img
        className="w-[250px] object-cover mx-auto my-2"
        src={user.image}
        alt=""
      />
      <div className="px-5 my-5 text-center">
        <div className="flex items-center justify-center gap-1 text-[18px] font-semibold">
          <h1>Name:</h1>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
        </div>
        <p className="text-[16px] font-medium">Email: {user.email}</p>
        {/* Display address information */}
        <p>Address: {user.address.address}</p>
        <p>City: {user.address.city}</p>
        {/* Display company name */}
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
