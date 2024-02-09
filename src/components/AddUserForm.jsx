import { useState } from "react";
import UsersList from "./UsersList";
import toast from "react-hot-toast";

const AddUserForm = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const address = form.address.value;
    const city = form.city.value;
    const companyName = form.companyName.value;
    const avatarUrl = form.avatarUrl.value;

    const userInfo = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      address,
      city,
      companyName,
      avatarUrl,
    };
    console.log(userInfo);

    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, userInfo]);
    toast.success("User Added Successfully!");
    form.reset();
  };

  return (
    <div className="max-w-[1200px] mx-auto my-10">
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="url"
            placeholder="Avatar URL"
            name="avatarUrl"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />
        </div>

        <div className="w-full flex items-center justify-center gap-10 my-5">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />
        </div>

        <div className="w-full flex items-center justify-center gap-10 mt-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />
        </div>

        <div className="w-full flex items-center justify-center gap-10 mt-5">
          <input
            type="text"
            placeholder="City"
            name="city"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0]"
          />

          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            required
            className="w-full border p-2 outline-none focus:border-[#06D6A0] "
          />
        </div>

        <button
          className="w-full bg-[#06D6A0] my-5 text-white py-2 text-[20px] rounded-md"
          type="submit"
        >
          Add user
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-14 mt-5 lg:grid-cols-3 gap-10">
        {submittedData.map((data) => (
          <UsersList key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AddUserForm;
