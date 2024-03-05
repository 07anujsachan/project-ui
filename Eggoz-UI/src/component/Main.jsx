import { Header } from "./Header";
import LineSvg from "../assets/line.svg";
import HutSvg from "../assets/hut.svg";
import BlackHutSvg from "../assets/hut-black.svg";
import PlusHutSvg from "../assets/plus-hut.svg";
import CircleSvg from "../assets/circle.svg";
import { Card } from "./Card";
import { CardTwo } from "./CardTwo";
import { Error } from "./Error";
import { Weather } from "./Weather";
import { MobileMenu } from "./MobileMenu";
import { Rain } from "../assets/rain";
import { Cloud } from "../assets/cloud";
import SunSvg from "../assets/sun.svg";
import PinkSvg from "../assets/pinkcircle.svg";

export const Main = () => {
  return (
    <div className="sm:w-[75%] w-full">
      <Header />
      <div className=" sm:px-12  px-5">
        <div className="flex  py-6 justify-between ">
          <div className="sm:w-[65%] w-full">
            <div className="flex rounded-xl">
              <div className="sm:w-[45%] rounded-xl sm:rounded-none w-full bg-[url('/background.jpg')] bg-no-repeat bg-cover flex justify-between p-6">
                <div className="justify-between">
                  <h4 className="text-white text-xl font-semibold">
                    NECC- Barwala
                  </h4>
                  <p className="text-white text-sm my-2">(23 Oct 2023 6:41 )</p>
                  <p className="text-white text-sm">( White Egg)</p>
                </div>
                <div>
                  <h4 className="text-white text-2xl font-bold">$5.40</h4>
                  <img className="my-2" src={LineSvg} alt="line" />
                  <p className="text-white text-sm">↑ ($0.250)</p>
                </div>
              </div>
              <div className="w-[55%] hidden sm:grid grid-cols-2">
                <div className="bg-[#F5970A] border text-white ">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
                <div className="bg-[#F5970A] border text-white">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
                <div className="bg-[#F5970A] border text-white">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
                <div className="bg-[#F5970A] border text-white">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
                <div className="bg-[#F5970A] border text-white">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
                <div className="bg-[#F5970A] border text-white">
                  <p className="ml-4  mt-3"> Barwala : $5.40</p>
                </div>
              </div>
            </div>
            <div className="sm:flex hidden justify-between py-3">
              <div className="w-[47%]">
                <h3 className="text-xl"> Overall Sheds Progress</h3>
                <div className="flex  ">
                  <img className="w-[83px] mt-3 mr-2" src={HutSvg} alt="#" />
                  <img
                    className="w-[83px] mt-3 mr-2"
                    src={BlackHutSvg}
                    alt="#"
                  />
                  <img
                    className="w-[83px] mt-3 mr-2"
                    src={BlackHutSvg}
                    alt="#"
                  />
                  <img className="w-[83px] mt-1 " src={PlusHutSvg} alt="#" />
                </div>
              </div>
              <div className="w-[47%]">
                <h3 className="text-xl"> Flocks Progress</h3>
                <div className="flex ">
                  <img className="w-[83px] mt-3 mr-2" src={HutSvg} alt="#" />
                  <img
                    className="w-[83px] mt-3 mr-2"
                    src={BlackHutSvg}
                    alt="#"
                  />
                  <img
                    className="w-[83px] mt-3 mr-2"
                    src={BlackHutSvg}
                    alt="#"
                  />
                  <img className="w-[83px] mt-1 " src={PlusHutSvg} alt="#" />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex sm:w-[47%] w-full pr-2 bg-[#ECECEC] sm:mt-2 mt-4 mb-4  rounded-md">
                <div className="mt-5 flex justify-between">
                  <figure className="">
                    <img className="w-[100%] " src={CircleSvg} alt="" />
                    <div className="flex">
                      <p className="text-white relative bottom-[4.7rem] left-11 text-sm">
                        {" "}
                        87.5%
                      </p>
                      <p className="text-[#716DFD] relative bottom-10 left-1">
                        HDEP
                      </p>
                    </div>
                  </figure>
                  <div className="w-[60%] mt-4">
                    <div className="flex justify-between">
                      <p className="text-sm text-[#6F6F6F]">Mortality Rate </p>
                      <p className="text-sm text-[#6F6F6F]">02 </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-[#6F6F6F]">
                        Total Egg Production{" "}
                      </p>
                      <p className="text-sm text-[#6F6F6F]">1120 </p>
                    </div>
                    <button className="bg-[#F5970A] mt-4   w-[100%] py-2 text-sm text-white rounded-md">
                      Add Daily Input
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:w-[47%] w-full pr-2 bg-[#ECECEC]  sm:mt-2 mt-4 mb-4  rounded-md ">
                <div className="mt-5 flex justify-between">
                  <figure className="">
                    <img className="w-[100%] " src={CircleSvg} alt="" />
                    <div className="flex">
                      <p className="text-white relative bottom-[4.7rem] left-11 text-sm">
                        {" "}
                        87.5%
                      </p>
                      <p className="text-[#716DFD] relative bottom-10 left-1">
                        HDEP
                      </p>
                    </div>
                  </figure>
                  <div className="w-[60%] mt-4">
                    <div className="flex justify-between">
                      <p className="text-sm text-[#6F6F6F]">Mortality Rate </p>
                      <p className="text-sm text-[#6F6F6F]">02 </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-[#6F6F6F]">
                        Total Egg Production{" "}
                      </p>
                      <p className="text-sm text-[#6F6F6F]">1120 </p>
                    </div>
                    <button className="bg-[#F5970A] mt-4   w-[100%] py-2 text-sm text-white rounded-md">
                      Add Daily Input
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden block">
              <div className="bg-[url('/weather.png')] bg-no-repeat bg-cover  py-3 px-4 flex justify-between">
                <div className="">
                  <div className="flex align-center ">
                    <Rain width={18} height={14} />
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
            </div>
            {/* mobile card */}
            <div className="sm:hidden block">
              <h3 className="my-3">Temperature & Humidity In Your Farm</h3>
              <div className="flex justify-between">
                <div className="w-[49%] ">
                  <img className="mt-4" src="./orangebg.png" alt="#" />
                </div>
                <div className="w-[49%]">
                  {" "}
                  <img src="./bluebg.png" alt="#" />
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="my-3">Smart Advisories</h3>
              <div className="flex justify-between overflow-scroll">
                <Card /> <Card /> <Card />
              </div>
            </div>
            <div className="">
              <h3 className="my-3">Smart Advisories</h3>
              <div className="flex justify-between overflow-scroll">
                <CardTwo /> <CardTwo /> <CardTwo />
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-[#FAFAFA] p-4 sm:block hidden">
            <Weather />
            <Error text="You have not filled the Daily Input" />
            <Error text="Check Your Shed 2 Mortality Rate" />
            <Error text="Storm Tomorrow Take care of your Farm " />
            <Error text="Check Your Shed 2 Mortality Rate" />
            <Error text="Storm Tomorrow Take care of your Farm " />
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <MobileMenu />
      </div>
    </div>
  );
};
