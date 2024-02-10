import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="shadow-md rounded-md transform transition-transform hover:scale-105">
      <div>
        <img
          className="w-[250px] object-cover mx-auto my-2"
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
        />
      </div>
      <div className="px-5 my-5 text-center">
        <Link
          to={`/userDetails/${user.id}`}
          className="flex items-center justify-center gap-1 text-[18px] font-semibold"
        >
          <span>Name:</span>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </Link>
        <p className="text-[16px] font-medium">Email: {user.email}</p>
        <p>Address: {user.address.address}</p>
        <p>City: {user.address.city}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserCard;
