import React from "react";
import Quiz from "./Quiz";

const Background = () => {
  return (
    <>
      <div className="w-100 h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center p-16 text-left flex-col">
        <Quiz />
      </div>
    </>
  );
};

export default Background;
