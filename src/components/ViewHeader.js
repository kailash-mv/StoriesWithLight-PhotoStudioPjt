import React from "react";
import logoswl from "./assets/logosmall.png";

const Viewheader = ({ onHandleContactClick }) => {
  const arr = ["instagram", "facebook", "youtube", "twitter"];
  return (
    <div className="">
      <header className="mt-4 flex min-w-8 justify-center bg-backgroundtwo">
        <div className="flex flex-row text-accentthree items-center justify-center px-7 pl-10 h-20 ">
          <button className="mx-3 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light">
            HOME
          </button>
          <button
            onClick={onHandleContactClick}
            className="mx-3 mr-4 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light"
          >
            ABOUT
          </button>
          <img src={logoswl} className="mt-4 pb-6 max-h-28 w-auto"></img>
          <button
            onClick={onHandleContactClick}
            className="mx-3 ml-4 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light"
          >
            CONTACT
          </button>
          <div className="flex space-x-2 mt-3 px-3 text-2xl pb-3">
            {arr.map((topic) => {
              var link = `https://www.${topic}.com/storieswithlight`;
              var srclink = `https://img.icons8.com/color/48/${topic}.png`;
              return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={srclink}
                    alt={topic}
                    className="w-8 h-8 object-cover hover:opacity-80"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Viewheader;
