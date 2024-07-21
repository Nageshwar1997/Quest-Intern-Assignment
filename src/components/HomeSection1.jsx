const HomeSection1 = () => {
  return (
    <div className="w-full relative m-auto overflow-hidden main-top-background">
      <div className="flex flex-col gap-7 mt-[136px]">
        <div className="opacity-100 transform-none">
          <div className="leading-[72px] opacity-100 transform-none">
            <p className=" text-[42px] lg:text-[64px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold font-figtree w-[358px] md:w-[650px] lg:w-[940px] m-auto">
              AI-Powered Hyper-Personalization at Scale is Here
            </p>
          </div>
          <div className="opacity-100 transform-none">
            <p className="text-[16px] md:text-lg text-center text-white leading-[26px] mg:leading-7 w-[350px] md:w-[618px] m-auto mt-7">
              Unlock the Power of AI to turn user interactions into Real-Time
              Hyper-Personalized Experiences that engage and convert users
              faster than ever
            </p>
          </div>
          <div className="opacity-100 transform-none flex flex-col md:flex-row gap-3 items-center justify-center">
            <div className="book-demo flex lg:w-[405px] my-7 py-3 pr-3 pl-[16px] justify-between items-center rounded-xl border border-gray-600 backdrop-blur-sm">
              <input
                type="email"
                className="bg-transparent focus:outline-none text-white w-[200px]"
                placeholder="Enter your mail address"
              />
              <button className="py-[6px] px-3 text-white text-center font-semibold text-sm leading-[20px] font-figtree rounded-[4px] border border-[#8C43EC] cursor-pointer">
                Book Demo
              </button>
            </div>
          </div>
          <div className="opacity-100 transform-none">
            <div className=" w-[290px] m-auto">
              <p className="text-[#EFEFEF] text-center font-normal text-sm leading-[20px] font-figtree m-auto">
                No credit card required
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-28 md:min-h-52 relative lg:mt-[60px]">
          <div className="min-h-[40vw] md:min-h-[30vw] relative">
            <img
              src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg"
              alt="Evolution of customer engagement"
              className=" mt-4 w-[90%] md:w-[70%] m-auto rounded-t-2xl text-white opacity-100 transform-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
