import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./shared/Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === "name") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
  });

  const filteredUsers = sortedUsers.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const userEmail = user.email.toLowerCase();
    const companyName = user.company.name.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return (
      fullName.includes(searchTermLower) ||
      userEmail.includes(searchTermLower) ||
      companyName.includes(searchTermLower)
    );
  });

  return (
    <div className="max-w-[1200px] mx-auto py-2">
      <div className="flex items-center justify-between mb-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-[#06D6A0]"
        />
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-[#06D6A0]"
        >
          <option value="">Sort by...</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company Name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-14 mt-5 lg:grid-cols-3 gap-10">
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
