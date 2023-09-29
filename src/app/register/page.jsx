import React from "react";
import FileuploadProfile from "../components/Fileupload/FileuploadProfile";

const page = () => {
  return (
    <div className="bg-white">
      <div className="flex px-56 pt-24 gap-10">
        <div className="left">
          <div className="box_left borderborder-black p-5 rounded-3xl">
            <FileuploadProfile />
            <div className="textUpload">Upload your Photo</div>
            <div className="wrap_user">
              <div className="textUser">User</div>
              <div className="input_left">
                <input
                  className="w-full p-4 text-2xl rounded-xl border border-black"
                  type="text"
                  placeholder="Enter User"
                ></input>
              </div>
              <div className="passwordInput">Password</div>
              <div className="input_left">
                <input
                  className="w-full p-4 text-2xl rounded-xl border border-black"
                  type="text"
                  placeholder="Enter Password"
                ></input>
              </div>
              <div className="reTypepasswordInput">Re-Type Password</div>
              <div className="input_left">
                <input
                  className="w-full p-4 text-2xl rounded-xl border border-black"
                  type="text"
                  placeholder="Re-type Password"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="box_right  border border-black p-5 rounded-3xl">
            <div className="flex gap-4 pb-4">
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="text"
                placeholder="First name"
              ></input>
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="text"
                placeholder="Last name"
              ></input>
            </div>
            <div className="emailInput pb-4">
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className="phoneInput pb-4">
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="phone"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className="phoneInput pb-4">
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="phone"
                placeholder="Address"
              ></input>
            </div>
            <div className="flex gap-4 pb-4">
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="text"
                placeholder="Country"
              ></input>
              <input
                className="w-full p-4 text-2xl rounded-xl border border-black"
                type="text"
                placeholder="City"
              ></input>
            </div>
            <hr className="m-4"></hr>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
              for="file_input"
            >
              Upload Resume
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            ></input>
            <p
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              PDF, DOCX, (MAX. 35MB).
            </p>
            <div className="signUpRegister_btn">
              <button className="btn_register">Sign Up</button>
            </div>
            <div className="ihaveanAccount">
              <button className="btn_ihaveALready">
                I have already an Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
