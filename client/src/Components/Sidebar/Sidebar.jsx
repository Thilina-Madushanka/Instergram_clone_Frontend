import React from "react";
import { IoReorderThree } from "react-icons/io5";
import { menu } from "./SidebarConfig";

const Sidebar = () => {
  return (
    //when page scrolling side bat doesnot scroll
    <div className="stickey top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="pt-10">
            <img
              className="w-40"
              src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180"
              alt=""
            />
          </div>
          <div className="mt-10">
            {menu.map((item) => (
              <div className="flex items-center mb-5 cursor-pointer text-lg">
                {item.icon}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer pb-10">
        <IoReorderThree />
        <p className="ml-5">more</p>
      </div>
    </div>
  );
};

export default Sidebar;
