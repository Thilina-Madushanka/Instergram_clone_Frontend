import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/story/${user.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        className="w-16 h-16 rounded-full"
        src={
          user.image ||
          "https://tse1.mm.bing.net/th?id=OIP.nEJsLhy4bcOQ1f6UM0-iYQHaEK&pid=Api&P=0&h=180"
        }
        alt=""
      />
      <p>{user.username}</p>
    </div>
  );
};

export default StoryCircle;
