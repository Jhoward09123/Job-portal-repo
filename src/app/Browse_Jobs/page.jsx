import { Input } from "postcss";
import React from "react";

const page = () => {
  return (
    <section>
      {/* .spacing-pad justify-center p-24 bg-white */}
      <div className="spacing-pad justify-center p-24 bg-white">
        <div className="flex gap-11">
          <div className="job_title">
            <input
              className="Job_title_input"
              type="text"
              placeholder="Enter Job Title"
            />
          </div>
          <div>
            <select className="location_input" name="cars" id="cars">
              <option value="Select none">Select Location</option>
              <option value="volvo">USA, CALIFORNIA</option>
              <option value="saab">DAVAO, PHILIPPINES</option>
              <option value="mercedes">NAIROBI, KENYA</option>
            </select>
          </div>
          <div className="find_button">
            <button>Find jobs</button>
          </div>
        </div>
        <br></br>
      </div>
    </section>
  );
};

export default page;
