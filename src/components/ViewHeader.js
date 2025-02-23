//

import React from "react";
import logoswl from "./assets/logosmall.png";

const Viewheader = ({ onHandleContactClick }) => {
  const arr = ["instagram", "facebook", "youtube", "twitter"];
  return (
    <div className="hidden md:block">
      <header className="mt-4 flex justify-center bg-backgroundtwo">
        <div className="flex flex-row items-center justify-center px-7 pl-10 h-20 text-accentthree md:flex-nowrap md:h-20 md:px-7">
          <button className="mx-3 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light md:text-xl">
            HOME
          </button>
          <button
            onClick={onHandleContactClick}
            className="mx-3 mr-4 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light md:text-xl"
          >
            ABOUT
          </button>
          <img
            src={logoswl}
            className="hidden md:block mt-4 pb-6 max-h-28 w-auto"
          />
          <button
            onClick={onHandleContactClick}
            className="mx-3 ml-4 px-3 py-2 bg-backgroundone rounded-md text-xl opacity-100 hover:opacity-70 font-light md:text-xl"
          >
            CONTACT
          </button>
          <div className="flex space-x-2 mt-3 px-3 text-2xl pb-3 md:mt-3">
            {arr.map((topic) => {
              var link = `https://www.${topic}.com/storieswithlight`;
              var srclink = `https://img.icons8.com/color/48/${topic}.png`;
              return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={srclink}
                    alt={topic}
                    className="w-6 h-6 md:w-8 md:h-8 object-cover hover:opacity-80"
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
