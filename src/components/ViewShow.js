import image1 from "./assets/photo1.jpg";
import image2 from "./assets/photo2.jpg";
import image3 from "./assets/photo3.jpg";

const ViewShow = ({ onHandleClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 bg-backgroundone p-6 lg:p-10 mb-7 pb-12 lg:pb-24">
      <p className="lg:col-span-1 lg:ml-32 pt-10 lg:pt-[100px] flex flex-col text-center md:text-left">
        <p className="text-4xl lg:text-5xl font-extrabold">
          Cherished Moments, <br /> <span> Lasting Memories </span>
        </p>
        <br />
        <span className="text-lg lg:text-2xl my-4 lg:my-6">
          At <span className="text-accentone">Stories With Light</span>, we
          believe that the best memories are those you can relive, time and
          again.
        </span>
        <br />
        <button
          onClick={onHandleClick}
          className="py-3 px-3 max-w-32 mx-auto lg:mx-0 rounded-md bg-accentone text-lg lg:text-xl opacity-100 hover:opacity-70 font-light"
        >
          EXPLORE
        </button>
      </p>

      <div className="mt-0 sm:mt-10 lg:col-span-2 flex flex-col">
        <div className="relative px-4 lg:pl-56 lg:pr-48 pt-12 lg:pt-24">
          <img
            src={image2}
            className=" hidden lg:block rounded-md absolute z-0 w-48 lg:w-64 h-auto -mt-[60px] lg:-mt-[140px] ml-28 lg:ml-[480px]"
            alt=""
          />
          <img
            src={image1}
            className=" w-full rounded-md relative z-10 lg:w-auto pt-12 mx-auto lg:mx-0"
            alt=""
          />
          <img
            src={image3}
            className="hidden lg:block rounded-md absolute z-20 w-64 lg:w-96 h-auto -mt-20 lg:-mt-40 -ml-10 lg:-ml-16 pb-12 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ViewShow;
