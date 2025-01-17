import React from "react";
import { TbCircleDashed } from "react-icons/tb";
const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://tse1.mm.bing.net/th?id=OIP.Jxgb9GwfTqedcxJ6yft6YQHaHu&pid=Api&P=0&h=180"
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>UserName</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>Posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>Followes</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semi-bold">Full Name</p>
            <p className="font-thin text-sm">
              🏆|😎Bad Boy☠️|👉Single but not Available ❤️|♍I’m not Rich ßut
              I’m Royal 👑
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
