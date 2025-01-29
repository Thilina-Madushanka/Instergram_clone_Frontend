import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
import SearchComponents from "../SearchComponents/SearchComponents";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    } else if (title === "Search") {
      setIsSearchVisible(true);
    } else setIsSearchVisible(false);
  };

  return (
    // Sidebar stays fixed on the left
    <div className="fixed top-0 left-0 h-screen w-[250px] bg-white z-50 overflow-hidden shadow-md flex">
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px-2" : "px-10"
        }`}
      >
        {
          <div>
            {activeTab !== "Search" && (
              <div className="pt-10">
                <img
                  className="w-40"
                  src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180"
                  alt="Logo"
                />
              </div>
            )}
            <div className="mt-10">
              {/* Handle click methods to navigate */}
              {menu.map((item) => (
                <div
                  key={item.title}
                  onClick={() => handleTabClick(item.title)}
                  className="flex items-center mb-5 cursor-pointer text-lg"
                >
                  {/* Active tab styling */}
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== "Search" && (
                    <p
                      className={`ml-3 ${
                        activeTab === item.title ? "font-bold" : "font-semibold"
                      }`}
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        }

        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThree className="text-2xl" />
          {activeTab !== "Search" && <p className="ml-5">More</p>}
        </div>
      </div>

      <CreatePostModal onClose={onClose} isOpen={isOpen} />

      {/* search bar modification using onClose method */}
      {isSearchVisible && (
        <SearchComponents onClose={() => setIsSearchVisible(false)} />
      )}
    </div>
  );
};

export default Sidebar;
