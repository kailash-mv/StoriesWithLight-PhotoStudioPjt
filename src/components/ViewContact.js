import React from "react";
import logo from "./assets/logoswl.png";
const ViewContact = () => {
  const arr = ["instagram", "facebook", "youtube", "twitter"];
  return (
    <div className="bg-backgroundtwo pt-4 h-auto">
      <div className=" bg-backgroundtwo grid grid-cols-3 grid-rows-1 gap-x-7 pt-2">
        <img src={logo} className="mt-4 ml-10 rounded-lg col-span-1"></img>
        <div className="place-items-start rounded-3xl h-auto ml-10">
          <p className="mt-3 px-7 text-2xl pt-3">
            <strong>Reach Us At: </strong>
            <br />
            #35, 5th Main,
            <br />
            Vidya Layout, Banashankari 1st Stage,
            <br />
            Bengaluru - 560 085.
            <br />
            <strong>info@storieswithlight.com</strong>
            <br />
            <strong>+91 95861 53296</strong>
          </p>

          <div className="flex space-x-2 mt-3 px-7 text-2xl pt-3">
            {arr.map((topic) => {
              var link = `https://www.${topic}.com/storieswithlight`;
              var srclink = `https://img.icons8.com/color/48/${topic}.png`;
              return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={srclink}
                    alt={topic}
                    className="w-8 h-8 hover:opacity-80"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="col-span-1 px-7 py-4">
          <h2 className="text-2xl font-semibold mb-3">Leave A Message!</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border-2 border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:border-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-primary hover:bg-primarydark text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              <span className="rounded-xl border-y-2 py-3 mt-4 border-accenttwo">
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-backgroundtwo text-center mt-0">
        <hr className="border-accenttwo border-t-2 pb-5" />
        <p className="text-gray-600 text-sm">
          &copy; 2024 Stories with Light Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ViewContact;
