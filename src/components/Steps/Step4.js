import React, { useState, useEffect } from "react";
import Loader from "../UI/Loader";

const Step4 = () => {
  const [buttonState, setButtonState] = useState(""); // Set the initial state to an empty string

  // Event handler for the button click
  const handleButtonClick = () => {
    setButtonState("confirming");

    setTimeout(() => {
      setButtonState("");
    }, 10000);
  };

  useEffect(() => {
    if (buttonState === "confirming") {
      // You can initiate an API call here or perform other actions as needed
    }
  }, [buttonState]);

  return (
    <div className="relative h-full">
      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[32px]">Confirm</h4>
        <div className="flex flex-row gap-[10px] rounded-xl p-4 ring ring-indigo-50 bg-[#B8B8FF40] w-[550px] mx-auto">
          <img src="/icons/pdf.svg" className="h-[150px]" alt="" />
          <div className="flex flex-col gap-[10px]">
            <h4 className="font-bold text-[20px]">
              Space Imagery: Hubble's Finest
            </h4>
            <p>
              A mesmerizing dataset featuring some of the best images captured
              by the Hubble Space Telescope. Dive into the depths of space,
              explore distant galaxies, nebulae, and star clusters that offer a
              glimpse of the vastness of our universe.
            </p>
            <span>
              <i className="fa-regular fa-file"></i> 5 files
            </span>
          </div>
        </div>
        <label className="label cursor-pointer w-max flex flex-row gap-[10px] mx-auto">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span className="label-text text-[20px]">
            I Agree to the terms and conditions{" "}
          </span>
        </label>
        <button
          className="btn btn-outline btn-primary rounded-xl mx-auto mt-[10px] w-[550px]"
          onClick={handleButtonClick}
        >
          Confirm
        </button>
      </div>

      {buttonState === "confirming" && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Step4;
