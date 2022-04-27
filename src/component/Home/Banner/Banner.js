import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <h2>I grow by helping people in need.</h2>
        <div className="relative w-1/3 mx-auto">
          <input type="text" name="name" id="name" placeholder="search..." />
          <button className="bg-cyan-500 px-8 py-1 rounded-sm absolute">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
