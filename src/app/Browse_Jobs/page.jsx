import Image from "next/image";
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
      </div>
      <div className="line-divider h-1 "></div>

      <div className="recommendedSection p-10 bg-white ">
        <div className="RecommendedForYou text-center">Recommended For you</div>
      </div>

    <div className="box_3Grid flex items-center px-10 bg-white">
    <div className="grid_cotiner_3 flex px-5">
        <div className="grid_apply">
          <div className="applyboxborder p-8">
            <div className="inside_border_apply">
              <div className="flex gap-5">
                <div className="icon_logo_apply">
                  <Image
                    width={88}
                    height={88}
                    src="/Assets/Images/BrowseJobs/Logo_company_browse.png"
                  />
                </div>
                <div className="title_description_apply">
                  <div className="title_company_apply">Customer Service Representative - Chat and Call Support</div>
                  <div className="location_apply">location_apply</div>
                  <div className="category_apply">category_apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_cotiner_3 flex px-5">
        <div className="grid_apply">
          <div className="applyboxborder p-8">
            <div className="inside_border_apply">
              <div className="flex gap-5">
                <div className="icon_logo_apply">
                  <Image
                    width={88}
                    height={88}
                    src="/Assets/Images/BrowseJobs/Logo_company_browse.png"
                  />
                </div>
                <div className="title_description_apply">
                  <div className="title_company_apply">Customer Service Representative - Chat and Call Support</div>
                  <div className="location_apply">location_apply</div>
                  <div className="category_apply">category_apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_cotiner_3 flex px-5">
        <div className="grid_apply">
          <div className="applyboxborder p-8">
            <div className="inside_border_apply">
              <div className="flex gap-5">
                <div className="icon_logo_apply">
                  <Image
                    width={88}
                    height={88}
                    src="/Assets/Images/BrowseJobs/Logo_company_browse.png"
                  />
                </div>
                <div className="title_description_apply">
                  <div className="title_company_apply">Customer Service Representative - Chat and Call Support</div>
                  <div className="location_apply">location_apply</div>
                  <div className="category_apply">category_apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      
      
    </section>
  );
};

export default page;
