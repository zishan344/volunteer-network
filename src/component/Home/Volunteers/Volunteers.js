import React, { useEffect, useState } from "react";
import Volunteer from "../Volunteer/Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    const url = "https://vast-castle-72712.herokuapp.com/volunteers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div>
      <h2 className="text-center font-bold my-4 text-2xl">
        Total Volunteer {volunteers.length}
      </h2>
      <div className=" gap-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 justify-center ">
        {volunteers.map((volunteer) => (
          <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
