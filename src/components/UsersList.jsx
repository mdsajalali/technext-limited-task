import PropTypes from "prop-types";

const UsersList = ({ data }) => {
  const { avatarUrl, firstName, lastName, email, address, city, companyName } =
    data;

  return (
    <div className="shadow-md rounded-md transform transition-transform hover:scale-105">
      <div>
        <img
          className="w-[250px] object-cover mx-auto my-2"
          src={avatarUrl}
          alt={`${firstName} ${lastName}`}
        />
      </div>
      <div className="px-5 my-5 text-center">
        <div className="flex items-center justify-center gap-1 text-[18px] font-semibold">
          <h1>Name:</h1>
          <span>
            {firstName} {lastName}
          </span>
        </div>

        <p className="text-[16px] font-medium">Email: {email}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>Company: {companyName}</p>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  data: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default UsersList;
