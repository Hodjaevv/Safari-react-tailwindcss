import Category from "../components/Category";
import Sort from "../components/Sort";
import Footer from "./../components/Footer";

import photo4 from "../assets/images/photo-4.svg"
import photo2 from "../assets/images/photo-2.svg"
import photo3 from "../assets/images/photo-3.svg"

const Clothes = () => {
  return (
    <div>
      <div className="container px-12 mx-auto pt-[100px] w-[1400px]">
        <div className="flex">
          <Category title="CLOTHES" />
          <Sort image={photo4} image2={photo2} image3={photo3}/>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Clothes;
