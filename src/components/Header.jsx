import { useState } from "react";
import qLogo from "../assets/header/logo.svg";

const Header = () => {
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="w-full lg:px-[100px] py-6 fixed flex align-middle top-0 z-50 rounded h-[88px] backdrop-blur-3xl">
      <div className="w-[1440px] backdrop-blur-sm nav-box px-5 rounded-b-xl m-auto flex flex-col relative boxClose">
        <div className="w-full flex self-center justify-between items-center pr-3 md:px-0 cursor-pointer">
          <div className="flex align-middle text-home-1 w-[224px] cursor-pointer text-white">
            <img
              src={qLogo}
              alt="Quest Labs Logo"
              className="mr-1 self-center w-[18.6px] h-[18.6px]"
            />
            <p className="text-center font-bold text-[22px] leading-[24px]">
              Quest
            </p>
          </div>
          <div className="hidden md:flex gap-[22px] justify-between items-center text-white">
            <div className="dropdown-container hover:text-[#d7255e]">
              <div className="text-center font-medium text-sm leading-5">
                Playbook
              </div>
            </div>
            <div className="dropdown-container relative hover:text-[#d7255e]">
              <div
                className="text-center font-medium text-sm leading-5"
                onMouseEnter={() => setShowResources(true)}
                onMouseLeave={() => setShowResources(false)}
              >
                Resources
              </div>
              <div
                className={`dropdown-content w-48 ${
                  showResources ? "flex" : "hidden"
                } text-white flex-col absolute top-4 -left-2.5 text-sm font-medium leading-5`}
                onMouseEnter={() => setShowResources(true)}
                onMouseLeave={() => setShowResources(false)}
              >
                <p>Docs</p>
                <p>Newsletter</p>
                <p>Join Quest Club</p>
              </div>
            </div>
            <div className="dropdown-container hover:text-[#d7255e]">
              <div className="text-center font-medium text-sm leading-5">
                Blogs
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button className="p-[8px_12px] rounded-[4px] text-white font-semibold text-sm leading-5 border border-[#8C43EC] cursor-pointer">
              Get Started
            </button>
            <button className="book-demo p-[8px_12px] rounded-[4px] text-white font-semibold text-sm leading-5 border cursor-pointer">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
