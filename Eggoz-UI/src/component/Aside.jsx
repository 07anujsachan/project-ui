import LogoSvg from "../assets/logo.svg";
import HomeSvg from "../assets/home.svg";
import FarmSvg from "../assets/farm.svg";
import FeedSvg from "../assets/farm-history.svg";
import HistorySvg from "../assets/feed.svg";
import ProfileSvg from "../assets/profile.svg";

export const Aside = () => {
  return (
    <div className="w-1/4 h-screen border-left hidden sm:block">
      <img className="p-4" src={LogoSvg} alt="logo" />
      <div className="px-8 py-2  flex active">
        <img src={HomeSvg} alt="home icon" />
        <h3 className="ml-2 ">Home</h3>
      </div>
      <div className=" px-8 py-2 mt-3 flex">
        <img src={FarmSvg} alt="home icon" />
        <h3 className="ml-2">My Farm</h3>
      </div>
      <div className="px-8 py-2 mt-3 flex">
        <img src={FeedSvg} alt="home icon" />
        <h3 className="ml-2">Feed Folmulation</h3>
      </div>
      <div className="px-8 py-2 mt-3 flex">
        <img src={HistorySvg} alt="home icon" />
        <h3 className="ml-2">Farm History</h3>
      </div>
      <div className="px-8 py-2 mt-3 flex">
        <img src={ProfileSvg} alt="home icon" />
        <h3 className="ml-2">Profile</h3>
      </div>
      <div className="relative top-96">
        <div className="px-8 py-2 mt-3 flex">
          <img src={ProfileSvg} alt="home icon" />
          <h3 className="ml-2">Settings</h3>
        </div>
        <div className="px-8 py-2 mt-3 flex">
          <img src={ProfileSvg} alt="home icon" />
          <h3 className="ml-2">Logout</h3>
        </div>
      </div>
    </div>
  );
};
