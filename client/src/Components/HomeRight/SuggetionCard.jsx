import React from "react";

const SuggetionCard = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src={
            user.image ||
            "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg"
          }
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">{user.username}</p>
          <p className="text-sm font-semibold opacity-70">Populer</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggetionCard;
