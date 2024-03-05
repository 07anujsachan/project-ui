import HomeSvg from "../assets/home.svg";
import FarmSvg from "../assets/farm.svg";
import FeedSvg from "../assets/farm-history.svg";
import HistorySvg from "../assets/feed.svg";

export const MobileMenu = () => {
  return (
    <div className="flex absolute top-100 px-5 py-5 border-t border-t-[#DAD8D8]">
      <div className="flex flex-col justify-center items-center">
        <img src={HomeSvg} alt="home" />
        <p className="text-xs">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center ml-8">
        <img src={FarmSvg} alt="home" />
        <p className="text-xs">My Farm</p>
      </div>
      <div className="flex flex-col justify-center items-center ml-8">
        <img src={FeedSvg} alt="home" />
        <p className="text-xs">Feed Formulation</p>
      </div>
      <div className="flex flex-col justify-center items-center ml-8">
        <img src={HistorySvg} alt="home" />
        <p className="text-xs">Farm History</p>
      </div>
    </div>
  );
};
