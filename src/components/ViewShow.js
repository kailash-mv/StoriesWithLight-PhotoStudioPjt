import image1 from "./assets/photo1.jpg";
import image2 from "./assets/photo2.jpg";
import image3 from "./assets/photo3.jpg";

const ViewShow = ({ onHandleClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 bg-backgroundone p-6 md:p-10 mb-7 pb-12 md:pb-24">
      <p className="md:col-span-1 md:ml-32 pt-10 md:pt-[100px] flex flex-col text-center md:text-left">
        <p className="text-4xl md:text-5xl font-extrabold">
          Cherished Moments, <br /> <span> Lasting Memories </span>
        </p>
        <br />
        <span className="text-lg md:text-2xl my-4 md:my-6">
          At <span className="text-accentone">Stories With Light</span>, we
          believe that the best memories are those you can relive, time and
          again.
        </span>
        <br />
        <button
          onClick={onHandleClick}
          className="py-3 px-3 max-w-32 mx-auto md:mx-0 rounded-md bg-accentone text-lg md:text-xl opacity-100 hover:opacity-70 font-light"
        >
          EXPLORE
        </button>
      </p>

      <div className="mt-10 md:col-span-2 flex flex-col">
        <div className="relative px-4 md:pl-56 md:pr-48 pt-12 md:pt-24">
          <img
            src={image2}
            className="rounded-md absolute z-0 w-48 md:w-72 h-auto -mt-[60px] md:-mt-[140px] ml-28 md:ml-[570px]"
            alt=""
          />
          <img
            src={image1}
            className="rounded-md relative z-10 w-64 md:w-auto pt-12 mx-auto md:mx-0"
            alt=""
          />
          <img
            src={image3}
            className="rounded-md absolute z-20 w-64 md:w-96 h-auto -mt-20 md:-mt-40 -ml-10 md:-ml-16 pb-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ViewShow;
