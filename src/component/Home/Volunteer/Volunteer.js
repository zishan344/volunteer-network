import React from "react";

const Volunteer = ({ volunteer }) => {
  const { image, description, _id } = volunteer;
  return (
    <div className=" h-96 relative my-2 mx-auto">
      <img className="w-full h-full" src={image} alt="" />
      <h2 className="w-full rounded py-1 h-20 flex justify-center items-center font-bold text-1xl text-white bg-yellow-500 absolute bottom-0 cursor-pointer">
        {description}
      </h2>
    </div>
  );
};

export default Volunteer;
