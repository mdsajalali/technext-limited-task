import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="bg-[#06D6A0]  text-white">
      <div className="flex gap-5 items-center justify-between max-w-[1200px] mx-auto py-2 px-4">
        <Link to="/">
          <img className="w-32 sm:w-40" src={logo} alt={logo} />
        </Link>
        <nav className="flex list-none gap-2 sm:gap-5">
          <li>
            <NavLink className="text-[18px] font-semibold" to="/">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[18px] font-semibold" to="/addUser">
              AddUser
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
