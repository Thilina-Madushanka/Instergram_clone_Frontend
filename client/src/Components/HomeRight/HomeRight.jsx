import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://tse1.mm.bing.net/th?id=OIP.nEJsLhy4bcOQ1f6UM0-iYQHaEK&pid=Api&P=0&h=180"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>Full Name</p>
              <p className="opacity-70">User Name</p>
            </div>
          </div>

          <div>
            <p className="text-blue-700 font-semibold">Switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1, 1].map((item) => (
            <SuggetionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
