import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="max-w-[1200px] mx-auto py-2">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-4 py-2   text-lg border border-gray-300 rounded-md focus:outline-none focus:border-[#06D6A0] mt-5 mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="shadow-md rounded-md transform transition-transform hover:scale-105"
          >
            <div>
              <img
                className="w-[250px] object-cover mx-auto my-2"
                src={user.image}
                alt=""
              />
            </div>
            <div className="px-5 my-5 text-center">
              <Link
                to={`/userDetails/${user.id}`}
                className="flex items-center justify-center gap-1 text-[18px] font-semibold"
              >
                <h1>Name:</h1>
                <h1>{user.firstName}</h1>
                <h1>{user.lastName}</h1>
              </Link>
              <p className="text-[16px] font-medium">Email: {user.email}</p>
              {/* Display address information */}
              <p>Address: {user.address.address}</p>
              <p>City: {user.address.city}</p>
              {/* Display company name */}
              <p>Company: {user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
