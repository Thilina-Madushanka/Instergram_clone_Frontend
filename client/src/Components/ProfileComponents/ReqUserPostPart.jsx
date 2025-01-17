import React from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";

const ReqUserPostPart = () => {
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
    },
    {
      tab: "saved",
      icon: <BiBookmark />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
    },
  ];

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => (
          <div className="flex items-center cursor-pointer py-2 text-sm">
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReqUserPostPart;
