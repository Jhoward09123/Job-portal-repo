import React from "react";
import CustomButton from "../components/Button/CustomButton";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="spacing-pad justify-center p-24 bg-white">
        <div className="box border_login">
          <div className="pb-12 title-text-login text-center ">ADMIN LOGIN</div>

          <div className="title-text-login pb-9">
            User <br></br>
            <input
              className="input_login"
              type="text"
              name="user"
              id=""
              placeholder=""
            />
          </div>
          <div className="title-text-login pb-9">
            Password <br></br>
            <input
              className="input_login"
              type="password"
              name="password"
              id=""
              placeholder=""
            />
          </div>

          <div className="flex gap-10 justify-center">
            <CustomButton backgroundColor="#040D54" color="#fff" text="Login" />

            <CustomButton color="#000" text="Register" underline={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
