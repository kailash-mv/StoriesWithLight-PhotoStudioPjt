import React from "react";
import logosmall from "./assets/logosmall.png";

const SlideShow = () => {
  return (
    <div>
      <header className="mb-14 mt-2 flex min-w-8 flex-col items-center justify-center text-center bg-backgroundtwo">
        <img src={logosmall} className="pb-6"></img>
        <div className="flex flex-row text-accentthree items-center justify-center px-7 pl-10">
          <button className="border-y-2 mx-9 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-medium">
            <strong>Home </strong>
          </button>
          <button className="border-y-2 mx-9 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-medium">
            <strong>About </strong>
          </button>
          <button
            onClick={() => window.open("https://www.google.com")}
            formtarget="_blank"
            className="border-y-2 mx-9 ml-4 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-medium2"
          >
            <strong> Pre-Wedding</strong>
          </button>
          <button className="border-y-2 mx-9 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-medium">
            <strong>Pets</strong>
          </button>
          <button className="border-y-2 mx-9 bg-backgroundone px-3 py-2 rounded-md text-xl opacity-100 hover:opacity-70 font-medium">
            <strong> Wedding</strong>
          </button>
        </div>
      </header>
    </div>
  );
};

export default SlideShow;
