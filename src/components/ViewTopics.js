import React, { forwardRef } from "react";
import image4 from "./assets/photo4.jpg";
import image5 from "./assets/photo5.jpg";
import image6 from "./assets/photo6.jpg";
import image7 from "./assets/photo7.jpg";
import image8 from "./assets/photo8.jpg";
import image9 from "./assets/photo9.jpg";
import image10 from "./assets/photo10.jpg";
import image11 from "./assets/photo11.jpg";
import image12 from "./assets/photo12.jpg";
import image13 from "./assets/photo13.jpg";
import image14 from "./assets/photo14.jpg";
import image15 from "./assets/photo15.jpg";
import image16 from "./assets/photo16.jpg";
import image17 from "./assets/photo17.jpg";
import image18 from "./assets/photo18.jpg";
import image19 from "./assets/photo19.jpg";
import image20 from "./assets/photo20.jpg";
import image21 from "./assets/photo21.jpg";

const ViewTopics = forwardRef((props, ref) => {
  const sections = [
    {
      title: "Pre-Wedding",
      description:
        "Capture the magic before the 'I do's' with unforgettable moments of love and anticipation.",
      images: [image4, image5, image6, image7, image8, image9],
    },
    {
      title: "Wedding",
      description:
        "Preserve the elegance and joy of your special day with timeless and breathtaking images.",
      images: [image10, image11, image12, image13, image14, image15],
    },
    {
      title: "Pets",
      description:
        "Celebrate your furry friends with stunning portraits that capture their unique charm and personality.",
      images: [image16, image17, image18, image19, image20, image21],
    },
  ];

  return (
    <div ref={ref} className="mt-0 sm:mt-20 flex flex-col items-center">
      {sections.map((section, index) => (
        <div key={index} className="mb-10 w-full px-6 sm:px-12 lg:mx-56">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center my-8">
            {section.title}
          </h1>

          <p className="text-2xl sm:text-2xl text-center py-8">
            {section.description.split(" ").map((word, i) =>
              [
                "love",
                "anticipation",
                "elegance",
                "joy",
                "charm",
                "personality",
              ].includes(word) ? (
                <span key={i} className="text-accentone">
                  {" " + word + " "}
                </span>
              ) : (
                word + " "
              )
            )}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-20 md:px-40 md:py-10 ">
            {section.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                className="rounded-md w-full"
                alt={`${section.title} ${imgIndex + 1}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default ViewTopics;
