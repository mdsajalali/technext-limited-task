import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUserForm from "../components/AddUserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addUser",
    element: <AddUserForm />,
  },
]);

export default router;
