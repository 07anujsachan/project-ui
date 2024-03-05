import MenuSvg from "../assets/menu.svg";
import UserSvg from "../assets/user.svg";
import BellSvg from "../assets/bell.svg";

export const Header = () => {
  return (
    <>
      <div className="flex py-4 sm:py-8 px-3 justify-between border-btm">
        <img
          className="block sm:hidden w-12 h-12 mt-2"
          src="/mobile-logo.png"
          alt="logo"
        />
        <img className="block sm:hidden w-32" src="/logoImage.png" alt="" />

        <div className="pl-2 hidden sm:flex">
          <img src={MenuSvg} alt="menu bar" />
          <h3 className="ml-6 text-lg text-[#969696]">Home</h3>
        </div>
        <div className="flex sm:pr-8 ">
          <img className="hidden sm:block" src={BellSvg} alt="bell" />
          <h3 className="hidden sm:block mx-6 text-lg text-[#BBBBBB]">
            {" "}
            Shrey Rastogi
          </h3>
          <img src={UserSvg} alt="user image" />
        </div>
      </div>
    </>
  );
};
