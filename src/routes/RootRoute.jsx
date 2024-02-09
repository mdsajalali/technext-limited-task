import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUserForm from "../components/AddUserForm";
import Users from "../components/Users";
import UserDetails from "./../components/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/userDetails/:id",
    element: <UserDetails />,
    loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
  },
  {
    path: "/addUser",
    element: <AddUserForm />,
  },
]);

export default router;
