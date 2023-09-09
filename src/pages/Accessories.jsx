import Category from "../components/Category";
import Footer from "../components/Footer";
import Sort from "../components/Sort";

import photo4 from "../assets/images/Crossbody-Bag.png";
import Diorbag from "../assets/images/Diorbag.png";
import photo10 from "../assets/images/photo-10.svg";

const Accessories = () => {
  return (
    <div>
      <div className="container mx-auto pt-[100px] px-12 w-[1400px]">
        <div className="flex">
          <Category title="ACCESSORIES" />
          <Sort image={photo4} image2={Diorbag} image3={photo10} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessories;
