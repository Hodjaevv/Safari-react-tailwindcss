import Category from "../components/Category";
import Footer from "../components/Footer";
import Sort from "../components/Sort";
import heels from "../assets/images/heels.png"
import Slides from "../assets/images/Slides.png"
import Keds from "../assets/images/Keds.png"


const Shoes = () => {
  return (
    <div className="container px-12 mx-auto pt-[100px] w-[1400px]">
      <div className="flex">
        <Category title="SHOES" />
        <Sort image={heels} image2={Keds} image3={Slides}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Shoes;
