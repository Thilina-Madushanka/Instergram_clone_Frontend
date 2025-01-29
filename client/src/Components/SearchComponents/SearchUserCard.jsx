import React from "react";

const SearchUserCard = () => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.freepik.com/free-vector/funky-monkey-with-gold-watch-cartoon_43623-1535.jpg"
          alt=""
        />
        <div className="ml-3">
          <p>Full Name</p>
          <p className="opacity-70">username</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
