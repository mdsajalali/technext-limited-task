import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="bg-[#06D6A0]  text-white">
      <div className="flex gap-5 items-center justify-between max-w-[1200px] mx-auto py-2 ">
        <Link to="/">
          <img className="w-40" src={logo} alt={logo} />
        </Link>
        <nav className="flex list-none gap-5">
          <li>
            <Link className="text-[18px] font-semibold" to="/">
              Users
            </Link>
          </li>
          <li>
            <Link className="text-[18px] font-semibold" to="/addUser">
              AddUser
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
