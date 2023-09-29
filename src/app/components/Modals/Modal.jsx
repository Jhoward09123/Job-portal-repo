import React from "react";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Modal toggle button */}
      <button
        onClick={openModal}
        className="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
      >
        <Image
          width={36.75}
          height={38}
          src="/Assets/Images/Nav/user-solid 1.png"
        />
      </button>
      {/* Main modal */}
      {isModalOpen && (
        <div
          id="defaultModal"
          className="fixed top-0 left-0 right-0 z-50 w-full p-28 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="relative w-full flex justify-center">
            {/* Modal content */}
            <div className="modal_size relative bg-white rounded-lg shadow dark:bg-gray-700 ">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <u>Close</u>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6">
                <div className="logo_account text-black flex justify-center">
                  <Image
                    width={136}
                    height={136}
                    src="/Assets/Images/modal images/do you have an acc profile.png"
                  />
                </div>
                <div className="question text-black pb-4">
                  Do you have an account?
                </div>
                <div className=" gap-10 flex justify-center">
                  <div className="">
                    <Link href="/login">
                      <button
                        onClick={closeModal}
                        type="button"
                        className="btn_signin hover:bg-blue-800"
                        data-modal-hide="defaultModal"
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>

                  <div className="idonthave">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="btn_signin_signup"
                      data-modal-hide="defaultModal"
                    >
                      <Link href="/register">Sign up</Link>
                    </button>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-6 space-x-2 "></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
