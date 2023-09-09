import closeicon from "../assets/images/close-icon.svg";

const Category = ({ props, title }) => {
  return (
    <div className="w-[25%]">
      <h1 className="text-3xl mb-16 font-bold tracking-wider">{title}</h1>
      <h2 className="font-medium tracking-wider text-2xl">CATEGORY</h2>
      <span className="w-100 block h-[1px] my-4 bg-gray-400"></span>
      <ul className="categoryUl">
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Facemask</button>
        </li>
        <li>
          <button>Jewelry</button>
        </li>
        <li>
          <button>Watches</button>
        </li>
        <li>
          <button>Hair accessories</button>
        </li>
        <li>
          <button>Belts</button>
        </li>
        <li>
          <button>Backpacks</button>
        </li>
        <li>
          <button>Handbags</button>
        </li>
        <li>
          <button>Fragrances</button>
        </li>
        <li>
          <button>Sunglasses & eyewears</button>
        </li>
        <li>
          <button>Socks</button>
        </li>
        <li>
          <button>Hats and beanies</button>
        </li>
        <li>
          <button>Gloves</button>
        </li>
      </ul>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">SIZE</h2>
        <div className="flex w-[60px] justify-between items-center">
          <button className="w-[60px] flex items-center justify-between">
            <h3 className="text-[#C4C4C4]">Clear</h3>
            <img src={closeicon} alt="" />
          </button>
        </div>
      </div>
      <span className="w-100 block h-[1px] my-4 bg-gray-400"></span>
      <ul className="flex py-6 sizeUl flex-wrap gap-5">
        <li>XXS</li>
        <li>XS</li>
        <li>S</li>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
      </ul>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">COLOR</h2>
        <div className="flex w-[60px] justify-between items-center">
          <button className="w-[60px] flex items-center justify-between">
            <h3 className="text-[#C4C4C4]">Clear</h3>
            <img src={closeicon} alt="" />
          </button>
        </div>
      </div>
      <span className="w-100 block h-[1px] my-4 bg-gray-400"></span>
      <ul className="flex py-6 colorUl flex-wrap gap-5">
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#F3ECDB] rounded"></span>
          <p>Beige</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#465BA3] rounded"></span>
          <p>Blue</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#000] rounded"></span>
          <p>Black</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#F07B4E] rounded"></span>
          <p>Orange</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#41854D] rounded"></span>
          <p>Green</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#665147] rounded"></span>
          <p>Brown</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#893D88] rounded"></span>
          <p>Purple</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 gold h-8 bg-[#CAC1B8] rounded"></span>
          <p>Gold</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#CAC1B8] rounded"></span>
          <p>Taupe</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 border border-black bg-[#FFF] rounded"></span>
          <p>White</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#F2A1B1] rounded"></span>
          <p>Pink</p>
        </li>
        <li className="flex justify-between">
          <span className="w-8 h-8 bg-[#D23C47] rounded"></span>
          <p>Red</p>
        </li>
      </ul>
    </div>
  );
};

export default Category;
