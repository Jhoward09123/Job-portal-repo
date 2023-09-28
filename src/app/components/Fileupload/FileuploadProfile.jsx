import React from "react";

const FileuploadProfile = () => {
  return (
    <div>
    
    <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
       PNG, JPG,(10 MB).
      </p>
    </div>
  );
};

export default FileuploadProfile;
