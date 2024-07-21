import React from "react";
import CardSvg1 from "./svgs/CardSvg1";
import CardSvg2 from "./svgs/CardSvg2";
import CardSvg3 from "./svgs/CardSvg3";

import productMap from "../assets/home/productmap.svg";

const HomeSection2 = () => {
    
  return (
    <div className="lg:p-[80px_120px] md:p-0 sm:p-0 opacity-100 transform-none">
      <div className=" m-auto flex flex-col gap-4 mb-[48px]">
        <p className="text-white text-center font-medium text-[30px] lg:text-[45px] leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree m-auto">
          Built for Marketers to create Campaigns and drive Impact faster than
          ever
        </p>
        <p className=" text-center text-[13px] lg:text-[17px] font-normal leading-[28px] text-[#B9B9B9] font-[Figtree] m-auto">
          Connect your data and let our AI find the best segments and variants
          to drive hyper-personalized messaging at scale
        </p>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className="flex p-[14px] justify-center items-center content-start gap-[14px] flex-wrap rounded-xl w-fit border border-solid border-gray-300 border-opacity-20 bg-[#181818]">
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <img
              src="https://www.questlabs.ai/assets/snowflack-X_nYrDCM.svg"
              alt=""
            />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <CardSvg1 />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <CardSvg2 />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <img
              src="https://www.questlabs.ai/assets/AMPL-MScmEe7Q.svg"
              alt=""
            />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <CardSvg3 />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <img
              src="https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg"
              alt=""
            />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <img
              src="https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg"
              alt=""
            />
          </div>
          <div className="w-11 h-11 p-2.5 flex justify-center items-center rounded-[10px] bg-[#323232]">
            <img
              src="https://www.questlabs.ai/assets/stack-MxdB7c0M.svg"
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.questlabs.ai/assets/LogoWithOutLine-rVY2legJ.svg"
            alt=""
          />
        </div>
        <div className="relative w-full flex align-middle items-center justify-center">
          <div className="absolute -top-[10px]">
            <img src={productMap} alt="" />
          </div>
          <div className="flex flex-row mt-[165px] gap-6">
                      <div className="productMapCardStyle">
                          <div className=""></div>
            </div>
            <div className="productMapCardStyle"></div>
            <div className="productMapCardStyle"></div>
            <div className="productMapCardStyle"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomeSection2;
