import React, { use, useEffect } from "react";
import StoryViwer from "../../Components/StoryComponents/StoryViwer";
import { findStoryByuserId } from "../../Redux/Story/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Story = () => {
  const { userId } = useParams();
  const jwt = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { story } = useSelector((store) => store);

  useEffect(() => {
    const data = { jwt, userId };
    dispatch(findStoryByuserId(data));
  }, [userId]);

  return (
    <div>
      <StoryViwer stories={story.stories} />
    </div>
  );
};

export default Story;
