import SaveSvg from "../assets/save.svg";
import ShareSvg from "../assets/share1.svg";

export const Card = () => {
  return (
    <div className="bg-[url('/card.png')] bg-no-repeat bg-cover py-2 px-4 mr-3">
      <div className="flex justify-between w-60  ">
        <p className="text-white text-md">2 min ago</p>
        <div className="flex">
          <img src={ShareSvg} alt="#" />
          <img src={SaveSvg} alt="#" />
        </div>
      </div>
      <p className="width-[100%] text-white mt-14 text-sm">
        Why egg white are recommended
      </p>
      <p className="width-[100%] text-white ">for bodybuilders</p>
    </div>
  );
};
