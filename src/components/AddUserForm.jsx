import { useState } from "react";

const AddUserForm = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const address = form.address.value;
    const companyName = form.companyName.value;
    const avatarUrl = form.avatarUrl.value;

    const userInfo = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      address,
      companyName,
      avatarUrl,
    };
    console.log(userInfo);

    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, userInfo]);
    alert("User added");
    form.reset();
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="url"
            placeholder="Avatar URL"
            name="avatarUrl"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />

          <input type="text" placeholder="Last Name" name="lastName" required />
        </div>

        <input type="email" placeholder="Email" name="email" required />

        <div>
          <input type="text" placeholder="Address" name="address" required />

          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            required
          />
        </div>

        <button type="submit">Add user</button>
      </form>
      {/* Show submitted data */}
      {submittedData.map((data) => (
        <div key={data.id}>
          <h2>Submitted Data:</h2>
          <img src={data.avatarUrl} alt="" />
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}</p>
          <p>Company Name: {data.companyName}</p>
        </div>
      ))}
    </div>
  );
};

export default AddUserForm;
