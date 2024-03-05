import { Rain } from "../assets/rain";
import { Cloud } from "../assets/cloud";
import SunSvg from "../assets/sun.svg";
import PinkSvg from "../assets/pinkcircle.svg";

export const Weather = () => {
  return (
    <div>
      <div className="bg-[url('/weather.png')] bg-cover bg-no-repeat  py-3 px-4 flex justify-between">
        <div className="">
          <div className="flex align-center ">
            <div className="mt-1">
              <Rain width={18} height={14} />
            </div>
            <p className="text-white text-md">Heavy Rain</p>
          </div>
          <h1 className="text-white text-6xl  "> 24°</h1>
          <p className="text-white">27° / 25°</p>
        </div>
        <div>
          <h4 className="text-white text-2xl mt-2">13:26</h4>
          <p className="text-white text-sm mt-1"> MON 08:23</p>
          <h6 className="text-white text-lg mt-4">BARWALA</h6>
        </div>
      </div>
      <div className="bg-[#4D4F96] flex justify-between   border border-white ">
        <div className="text-white text-sm border-r border-[#1b1d62] text-center w-[25%] p-2">
          TUE
        </div>
        <div className="text-white flex text-sm border-r text-center border-[#1b1d62] p-2 w-[25%]">
          WED <Rain width={12} height={12} />
        </div>
        <div className="text-white flex text-sm border-r border-[#1b1d62] p-2 w-[25%] text-center ">
          THU <Cloud width={12} height={12} />{" "}
        </div>
        <div className="text-white flex text-sm border-r border-[#1b1d62] p-2 w-[25%]  ">
          FRI <img src={SunSvg} alt="" />
        </div>
      </div>
      <div className="flex bg-[#2A3258] p-4  text-white text-sm ">
        <img src={PinkSvg} alt="#" />
        <p className="ml-2">Rain tomorrow take care of your farm</p>
      </div>
      <div className="flex justify-between border border-b-white  bg-[#2A3258] px-5 py-3 mt-1 text-white text-xs font-light">
        <div>
          <p className="mb-1 ml-2">13/12/23</p>
          <p>Tuesday</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">10 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">01 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">03 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">05 AM</p>
        </div>
      </div>
      <div className="flex justify-between border border-b-white bg-[#2A3258] px-5 py-3  text-white text-xs font-light">
        <div>
          <p className="mb-1 ml-2">14/12/23</p>
          <p>Wednesday</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">10 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">01 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">03 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">05 AM</p>
        </div>
      </div>
      <div className="flex justify-between border rounded-b-md mb-6 border-b-white bg-[#2A3258] px-5 py-3  text-white text-xs font-light">
        <div>
          <p className="mb-1 ml-2">14/12/23</p>
          <p>Wednesday</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">10 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">01 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">03 AM</p>
        </div>
        <div>
          <div className="flex mt-1 flex-col justify-center items-center">
            <Cloud width="18" height="12" />
          </div>
          <p className="mt-1 text-xs">05 AM</p>
        </div>
      </div>
    </div>
  );
};
