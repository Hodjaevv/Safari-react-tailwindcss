import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import user from "../assets/images/user.svg";
import bag from "../assets/images/bag.svg";
import healt from "../assets/images/healt.svg";

const Header = () => {
  return (
    <div className="flex container justify-evenly items-center h-[70px] w-[1400px] mx-auto bg-[#f5f5f5]">
      <ul className="flex space-x-14">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Clothes"}>Clothes</Link>
        </li>
        <li>
          <Link to={"/Shoes"}>Shoes</Link>
        </li>
        <li>
          <Link to={"/Accessories"}>Accessories</Link>
        </li>
      </ul>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="flex justify-between w-[30%]">
        <input
          className="pl-3 bg-transparent outline-none border-b-[1px] border-solid border-[#00000079]"
          type="text"
          placeholder="Search..."
        />
        <button>
          <img src={search} alt="" />
        </button>
        <button>
          <img src={user} alt="" />
        </button>
        <button>
          <img src={bag} alt="" />
        </button>
        <button>
          <img src={healt} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
