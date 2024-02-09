import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 max-w-[1200px] mx-auto py-2">
      {users.map((user) => {
        return (
          <div key={user.id} className="shadow-md rounded-md">
            <img
              className="w-[250px] object-cover mx-auto my-2"
              src={user.image}
              alt=""
            />
            <div className="px-5 my-5 text-center">
              <Link
                to={`/userDetails/${user.id}`}
                className="flex items-center justify-center gap-1 text-[18px] font-semibold"
              >
                <h1>{user.firstName}</h1>
                <h1>{user.lastName}</h1>
              </Link>
              <p className="text-[16px] font-medium">{user.email}</p>
              {/* Display address information */}
              <p>{user.address.address}</p>
              <p>{user.address.city}</p>
              {/* Display company name */}
              <p>{user.company.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
