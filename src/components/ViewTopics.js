import React from "react";
import image4 from "./assets/photo4.jpg";

const ViewTopics = () => {
  const arr = ["Pre-Wedding", "Wedding", "Pets"];

  return (
    <>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-5xl my-14 font-extrabold">Pre-Wedding</h1>
        <p className=" mx-52 mt-6 text-3xl">
          Capture the magic before the 'I do's' with <br />
          unforgettable moments of
          <span className="text-accentone"> love </span>
          and <span className="text-accentone">anticipation.</span>
        </p>
        <div className=" mt-20 flex justify-center flex-wrap gap-28 mx-56">
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
        </div>
        <div className="mt-20 flex flex-col items-center">
          <h1 className="text-5xl my-14 font-extrabold">Wedding</h1>
          <p className=" mx-52 mt-6 text-3xl">
            Preserve the <span className="text-accentone">elegance</span> and
            <span className="text-accentone"> joy </span> of your special day
            <br />
            with timeless and breathtaking images.
          </p>
          <div className=" mt-20 flex justify-center flex-wrap gap-28 mx-56">
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
            <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-5xl my-14 font-extrabold">Pets</h1>
        <p className=" mx-52 mt-6 text-3xl">
          Celebrate your furry friends with stunning portraits
          <br /> that capture their unique{" "}
          <span className="text-accentone"> charm </span> and{" "}
          <span className="text-accentone"> personality. </span>
        </p>
        <div className=" mt-20 flex justify-center flex-wrap gap-28 mx-56">
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
          <img src={image4} className="rounded-md h-1/4 w-1/4" alt="" />
        </div>
      </div>
    </>
  );
};

export default ViewTopics;

// return (
//   <div className="mt-20">
//     {arr.map((ele, index) => {
//       return (
// <div className="flex flex-col items-center">
//   <h1 className="text-5xl my-14 font-extrabold">{ele}</h1>
//   <p className=" mx-52 mt-10  text-3xl">
//     Capture the magic before the
//     <span className="text-accentone"> 'I do's'</span> with <br />
//     unforgettable moments of
//     <span className="text-accentone"> love </span>
//     and anticipation.
//   </p>
//   <div className=" mt-20 flex justify-center flex-wrap gap-28 mx-56">
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//     <img src={image4} className="rounded-md h-1/4 w-1/4" />
//   </div>
// </div>
//       );
//     })}
//   </div>
// );

// export default ViewTopics;

{
  // const arr = ["Pre-Wedding", "Wedding", "Pets"];
  /* {arr.map((topic, index) => {
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
                  <div className="mr-8 rounded-xl p-6">{desc}</div>
                </h3>
              </div>
            </div>
          );
        })} */
}
