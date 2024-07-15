import { useState } from "react";

const Index = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div
        className={`md:hidden flex flex-col justify-between duration-700 p-4 w-screen h-screen fixed z-[999] bg-[#ecece2] ${
          openMenu ? `top-0` : `top-[-150%]`
        }`}>
        <button
          className="absolute right-6 top-6"
          onClick={() => setOpenMenu(!openMenu)}>
          close
        </button>
        <div className="flex flex-col justify-center text-[3rem] h-[70vh]">
          <a>Home</a>
          <a>Technology</a>
          <a>About Us</a>
          <a>Project</a>
          <a>Contact Us</a>
        </div>
        <button className="p-4 bg-[#f1ffbd] mb-[100px] font-bold w-full">
          Discuss Project
        </button>
      </div>
      <nav className="flex items-center text-[#022D42] justify-between p-4 border-b-[0.4px] border-b-[#d8d8d8]">
        <h1 className="font-bold text-[1.4rem]">DePloy</h1>
        <span className="hidden md:flex items-center gap-[3rem] font-bold text-[12px]">
          <a>Technology</a>
          <a>About Us</a>
          <a>Project</a>
          <a>Contact Us</a>
          <button className="px-4 py-2 bg-[#F1FFBD] rounded-lg w-[150px] h-[40px] flex flex-col items-center justify-center discuss--project--btn">
            <div className="w-[100%] h-[100%] overflow-hidden relative flex items-center justify-center">
              <p className="absolute duration-[400ms] top-[15%] btn--msg-1">
                Discuss Project
              </p>
              <p className="absolute duration-[400ms] text-[#f1ffbd] top-[100%] btn--msg-2">
                Discuss Project
              </p>
            </div>
          </button>
        </span>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden px-4 py-1 bg-[#F1FFBD] rounded-xl">
          menu
        </button>
      </nav>
    </>
  );
};

export default Index;
