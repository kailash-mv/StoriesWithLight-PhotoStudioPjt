import React from "react";

const ViewTopics = () => {
  const arr = ["Pre-Wedding", "Wedding", "Pets"];

  return (
    <div className="bg-primaryone">
      {arr.map((topic, index) => {
        const link = `https://loremflickr.com/500/500/${topic}`;
        var desc =
          index == 0
            ? "Capture the magic before the 'I do's' with unforgettable moments of love and anticipation."
            : index == 1
            ? "Preserve the elegance and joy of your special day with timeless and breathtaking images."
            : "Celebrate your furry friends with stunning portraits that capture their unique charm and personality.";
        return (
          <div key={index} className="pb-8">
            <h2 className="py-14 rounded text-center font-['Garamond'] text-7xl">
              <span className="bg-backgroundtwo  border-y-2 rounded-xl mx-44 py-2 border-accenttwo opacity-100 hover:opacity-70">
                <a href="">{topic}</a>
              </span>
            </h2>
            <div className="flex flex-row space-x-7">
              <img src={link} className="mx-5 my-16 rounded-xl" alt={topic} />
              <h3 className="my-36 ml-6 font-['Garamond'] text-5xl font-medium">
                <div className="bg-backgroundtwo mr-8 rounded-xl p-6">
                  {desc}
                </div>
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewTopics;
