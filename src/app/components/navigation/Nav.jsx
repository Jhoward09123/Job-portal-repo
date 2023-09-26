import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="p-5 primary-darkblue px-28">
      <ul className="ul_nav items-center">
        <li className="nav_left">
          <a className="active" href="#home">
            <div className="flex items-center gap-4">
              <div className="logo">
                <Image
                  width={55}
                  height={56}
                  src="/Assets/Images/Nav/LOGO JOB PORTAL.png"
                />
              </div>
              <div className="job-portal-name text-2xl">
                <b>Job Portal</b>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_left mt-4">
          <a className="font-normal" href="Browse_Jobs">
            Home
          </a>
        </li>
        <li className="about-float-right mt-4">
          <div className="flex">
            <Image
              width={36.75}
              height={38}
              src="/Assets/Images/Nav/user-solid 1.png"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
