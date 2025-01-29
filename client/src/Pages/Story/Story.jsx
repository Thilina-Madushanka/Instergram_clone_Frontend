import React from "react";
import StoryViwer from "../../Components/StoryComponents/StoryViwer";

const Story = () => {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/19377629/pexels-photo-19377629/free-photo-of-bunch-of-flowers-in-a-vase-and-fruits.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/30372288/pexels-photo-30372288/free-photo-of-fashionable-steps-amidst-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/29792177/pexels-photo-29792177/free-photo-of-aerial-view-of-historic-building-in-munich.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/30411544/pexels-photo-30411544/free-photo-of-casual-coffee-break-with-newspaper-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div>
      <StoryViwer stories={story} />
    </div>
  );
};

export default Story;
