import React from "react";
import FileuploadProfile from "../components/Fileupload/FileuploadProfile";

const page = () => {
  return (
    <div className="">
      <div className="flex px-56 pt-24 gap-10">
        <div className="left">
          <div className="box_left border border-red-500">
            <FileuploadProfile />
            <div className="textUpload">
            Upload your Photo
            </div>

            <div className="wrap_user">
                <div className="textUser">
                    User
                </div>
                <div className="input_left">

                </div>
                
            </div>
          </div>
        </div>

        <div className="right">
          <div className="box_right border border-blue-500">boxRight</div>
        </div>
      </div>
    </div>
  );
};

export default page;
