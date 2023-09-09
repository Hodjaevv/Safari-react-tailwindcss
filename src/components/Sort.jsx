import photo3 from "../assets/images/photo-3.svg"
import photo5 from "../assets/images/photo-5.svg"
import photo15 from "../assets/images/photo-15.svg"

import rasm1 from "../assets/images/rasm1.png"
import rasm2 from "../assets/images/rasm2.png"
import rasm3 from "../assets/images/rasm3.png"
import rasm4 from "../assets/images/rasm4.png"
import rasm5 from "../assets/images/rasm5.png"
import rasm6 from "../assets/images/rasm6.png"

const Sort = ({props, image,image2,image3}) => {
  return (
    <div className="w-[75%] pl-12">
      <div className="w-100 flex pt-[95px] justify-end">
        <select
          className="border float-right block outline-none border-black p-2"
          name=""
          id=""
        >
          <option value="">Sort by: Most popular</option>
          <option value="">Jumpsuits</option>
          <option value="">Leather</option>
          <option value="">Sweaters & knits</option>
          <option value="">Jackets and coats</option>
        </select>
      </div>
      <span className="w-100 block h-[1.5px] my-4 bg-gray-400"></span>
      <ul className="flex ul flex-wrap pt-6 pb-40 gap-x-[15px] gap-y-[130px]">
      <li><img src={image} alt="" />
      <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={image2} alt="" />
      <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={image3} alt="" />
      <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={photo3} alt="" />
      <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={photo5} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={photo15} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm1} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm2} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm3} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm4} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm5} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
    <li><img src={rasm6} alt="" />
     <p className="text-center">Multicolored armless top</p>
      <p className="text-center">$ 10,000</p>
    </li>
      </ul>
    </div>
  );
};

export default Sort;
