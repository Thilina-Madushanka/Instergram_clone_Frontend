import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
  };

  return (
    //when page scrolling side bat doesnot scroll
    <div className="stickey top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10">
            <img
              className="w-40"
              src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180"
              alt=""
            />
          </div>
          <div className="mt-10">
            {/* handle click methods to navigate */}
            {menu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {/* when we click the tab it become bold and effect left */}
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`${
                    activeTab === item.title ? "font-bold" : "font-semibold"
                  }`}
                  // style={{
                  //   minWidth: "100px", // Ensures consistent width
                  //   textAlign: "left", // Aligns text properly
                  // }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* this dev tag mention tne more icon */}
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThree className="text-2xl" />
          <p className="ml-5">more</p>
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
