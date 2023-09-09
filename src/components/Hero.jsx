import girlWhite from "../assets/images/girl-white.svg";
import arrow from "../assets/images/arrow-up.svg";
import { Link } from "react-router-dom";
import Shop from "../components/Shop";

const Hero = () => {
  
  return (
    <div className="bg-[#ED165F] hero container mx-auto w-[1400px] h-[1055px]">
      <div className="flex justify-center">
        <img src={girlWhite} alt="" />
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex-col space-y-4 justify-center">
          <h2>
            <Link className="text-white text-3xl">Explore our collection</Link>
          </h2>
          <Link to={"<Shop/>"}>
            <img className="ml-[120px] mt-4" src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
