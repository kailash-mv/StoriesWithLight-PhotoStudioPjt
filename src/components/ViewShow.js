import image1 from "./assets/photo1.jpg";
import image2 from "./assets/photo2.jpg";
import image3 from "./assets/photo3.jpg";
const ViewShow = () => {
  // Array of image URLs for the slideshow
  // const images = [
  //   "https://loremflickr.com/3840/2160/wedding",
  //   "https://loremflickr.com/3840/2160/love",
  //   "https://loremflickr.com/3840/2160/romance",
  //   "https://loremflickr.com/3840/2160/couple",
  // ];

  // // State to keep track of the current image index
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [fadeClass, setFadeClass] = useState("fade-in");

  // // Update the current image every 3 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setFadeClass("fade-out"); // Trigger fade-out effect
  //     setTimeout(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setFadeClass("fade-in"); // Trigger fade-in effect
  //     }, 500); // Match this to the CSS transition duration
  //   }, 3000); // Change image every 3 seconds

  //   return () => clearInterval(intervalId); // Clean up on unmount
  // }, [images.length]);

  return (
    <div className="grid grid-cols-3 grid-rows-1 bg-backgroundone p-10 ">
      <p className="col-span-1 ml-32 pt-1 flex flex-col">
        <p className="text-5xl font-extrabold ">
          {/* Every Frame, <br /> a Story to Be Told <br /> <br /> Every Moment,
          <br />a Memory to Hold */}
          Cherished Moments, <br /> <span> Lasting Memories </span>
        </p>
        <br />
        <br />
        <span className="text-2xl my-8">
          At <span className="text-accentone">Stories With Light</span>, we
          believe that the best memories are those you can relive, time and
          again.
        </span>
        <br />
        <br />
        <button className="py-3 px-3 max-w-32 rounded-md bg-accentone text-xl opacity-100 hover:opacity-70 font-light">
          EXPLORE
        </button>
      </p>

      <div className="mt-10 col-span-2 flex flex-col">
        <div className="relative pl-56 pr-48 pt-24">
          <img
            src={image2}
            className="rounded-md absolute z-0 w-72 h-auto -mt-36 ml-80 "
            alt=""
          />
          <img src={image1} className="rounded-md relative z-10" alt="" />
          <img
            src={image3}
            className="rounded-md absolute z-20 w-96 h-auto -mt-40 -ml-16 pb-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ViewShow;

// <p className="bg-backgroundtwo rounded-xl px-4 py-4 mx-56 text-xl border-y-2 pb-8 border-spacing-y-14 border-accenttwo">
// At <strong>Stories With Light</strong>, we believe that the best
// memories are those you can relive, time and again. We’re passionate
// about capturing the essence of love, joy, and companionship—whether it's
// the warmth of a pre-wedding shoot, the elegance of a wedding day, or the
// playful charm of your furry friends. Specializing in authentic and
// timeless photography, our team brings an artistic approach to each
// moment, making it as vivid in years to come as it is today. Let us
// preserve the story of your celebration, one frame at a time.
// </p>
// <img
// src={images[currentIndex]}
// className={`mx-5 my-16 rounded-xl border-accenttwo ${fadeClass}`}
// alt="Slideshow"
// />
// <style jsx>{`
// .fade-in {
//   opacity: 1;
//   transition: opacity 0.5s ease-in;
// }
// .fade-out {
//   opacity: 0;
//   transition: opacity 0.5s ease-out;
// }
// `}</style>
