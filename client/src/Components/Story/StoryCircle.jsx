import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/story");
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        className="w-16 h-16 rounded-full"
        src="https://miro.medium.com/v2/resize:fit:1024/1*-kMBbiLZJoxi6CZOL8UIcw.png"
        alt=""
      />
      <p>UserName</p>
    </div>
  );
};

export default StoryCircle;
