import React from "react";
import { useNavigate } from "react-router-dom";

const SearchUserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${user.username}`)}
      className="py-2 cursor-pointer"
    >
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={
            user.image ||
            "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png"
          }
          alt=""
        />
        <div className="ml-3">
          <p>{user.name}</p>
          <p className="opacity-70">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
