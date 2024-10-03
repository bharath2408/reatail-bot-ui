import Image from "next/image";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { PiUserCircle } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header className="shadow-lg bg-white fixed top-0 right-0 left-0 z-50">
        {/* Logo */}
        <div className="p-2 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center flex-grow sm:flex-grow-0 text-black text-sm p-2 font-bold">
            Logo
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex md:flex xl:flex items-center h-10 bg-[#d40029] rounded-full cursor-pointer mx-2 flex-grow max-w-3xl shadow-md">
            <input
              className="p-2 h-full bg-gray-100 flex-grow rounded-l-full focus:outline-none px-4"
              type="text"
              placeholder="Search"
            />
            <div className="p-4">
              <FaSearch className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 mx-2 text-black">
            {/* Account */}
            <div className="hidden sm:flex link items-start justify-center gap-2">
              <div>
                <PiUserCircle className="h-6 w-6 text-primary font-bold" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Hello, User</p>
                <p className="font-light md:text-sm">Sign In</p>
              </div>
            </div>

            {/* Cart */}
            <div className="hidden relative link sm:flex items-center space-x-1 p-2 rounded-full hover:bg-primary-light cursor-pointer transition-colors">
              {/* Cart Icon */}
              <FaShoppingCart className="h-6 w-6 text-gray-600 " />

              {/* Cart Badge */}
              <span className="absolute bg-[#d40029] -top-1 -right-1 h-5 w-5  text-center text-xs text-white rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 text-sm shadow-md bg-[#d40029] fixed w-full h-8 flex items-center gap-2 text-white">
          {/* <div>Top Brands</div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
