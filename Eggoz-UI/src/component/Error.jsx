import RedCross from "../assets/redcross.svg";
import Cross from "../assets/cross.svg";

export const Error = ({ text }) => {
  return (
    <div className="bg-[#FFF1F0] border border-red-500 flex justify-between px-4 py-3 mb-4">
      <div className="flex">
        <img src={RedCross} />
        <div className="text-xs mt-1 ml-5">{text}</div>
      </div>
      <img src={Cross} alt="cross" />
    </div>
  );
};
