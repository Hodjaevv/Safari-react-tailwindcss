import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg"
import icons from "../assets/images/icons.svg"
import location from "../assets/images/footer-location.svg"

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] flex justify-evenly items-center w-[1400px] container mx-auto h-[200px]">
        <a href="#"><img src={logo} alt="" /></a>
        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
        </ul>
            <img src={icons} alt="" />
            <div>
                <p className="mb-3">Subscribe to our newsletter</p>
                <input className="input border px-6 py-2 outline-none border-red-600 rounded-l-md" placeholder="Email Address" type="text" />
                <button className="bg-red-600 p-[9px] text-white rounded-r-md">OK</button>
                </div>
            <img src={location} alt="" />
  </div>)
};

export default Footer;
