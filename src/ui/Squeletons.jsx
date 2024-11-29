export const HeaderSqueleton = () => {
  return (
    <div className="flex justify-between   w-full">
      <section
        className={`
        bg-slate-400 rounded-3xl   flex flex-col gap-3 sm:gap-5 
    w-8/12 mt-0 ml-0  sm:w-1/3  sm:mt-0 sm:ml-0 p-2 pl-4  animate-pulse`}
      >
        <p className=" skeleton-text w-75% skeleton skeleton-text-header-1"></p>

        <p className=" skeleton-text skeleton w-60% skeleton-text-header-2"></p>
      </section>

      <div
        className={` bg-slate-400 rounded-full text-3xl skeleton text-center h-12 w-12 animate-pulse`}
      ></div>
    </div>
  );
};

export const TutorsSqueleton = ({ fadeOut }) => {
  return (
    <article
      className={`flex flex-wrap justify-center gap-6px sm:p-8 sm:gap-8 mt-6 mb-6 ${fadeOut} animate-pulse`}
    >
      <div
        className={`  flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer  `}
      >
        <div
          className={` bg-slate-400 w-full h-full p-2 sm:p-4 rounded-lg shadow-md flex flex-col gap-4`}
        >
          <section className="squeleton-image bg-slate-500 rounded-3xl skeleton"></section>

          <p className=" skeleton-text skeleton"></p>
        </div>
      </div>

      <div
        className={`  flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer  `}
      >
        <div
          className={` bg-slate-400 w-full h-full p-2 sm:p-4 rounded-lg shadow-md flex flex-col gap-4`}
        >
          <section className="squeleton-image bg-slate-500 rounded-3xl skeleton"></section>

          <p className=" skeleton-text skeleton"></p>
        </div>
      </div>

      <div
        className={`  flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer  `}
      >
        <div
          className={` bg-slate-400 w-full h-full p-2 sm:p-4 rounded-lg shadow-md flex flex-col gap-4`}
        >
          <section className="squeleton-image bg-slate-500 rounded-3xl skeleton"></section>

          <p className=" skeleton-text skeleton"></p>
        </div>
      </div>

      <div
        className={`  flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer  `}
      >
        <div
          className={` bg-slate-400 w-full h-full p-2 sm:p-4 rounded-lg shadow-md flex flex-col gap-4`}
        >
          <section className="squeleton-image bg-slate-500 rounded-3xl skeleton"></section>

          <p className=" skeleton-text skeleton"></p>
        </div>
      </div>

      <div
        className={`  flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer  `}
      >
        <div
          className={` bg-slate-400 w-full h-full p-2 sm:p-4 rounded-lg shadow-md flex flex-col gap-4`}
        >
          <section className="squeleton-image bg-slate-500 rounded-3xl skeleton"></section>

          <p className=" skeleton-text skeleton"></p>
        </div>
      </div>
    </article>
  );
};

export const TutorSqueleton = ({ BackTo }) => {
  return (
    <article className="animate-pulse w-full h-screen">
      <div className="flex justify-between p-2">
        {BackTo}
        <div className="bg-slate-400 rounded-full h-10 w-10 skeleton "></div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="skeleton  rounded-full w-36 h-36 sm:w-64 sm:h-64  bg-slate-400 "></div>

        <article className=" sm:w-1/2 flex justify-around sm:justify-between sm:gap-0 sm:p-0 ">
          <h1 className="squeleton-info basis-5/12 bg-slate-400 rounded-3xl skeleton">
            {/* Tutor: Loading... */}
          </h1>
          <div
            className={`bg-slate-400   basis-5/12  squeleton-info rounded-3xl skeleton `}
          >
            {/* Start */}
          </div>
        </article>
      </div>

      <h1 className="squelon-h1  rounded-3xl bg-slate-400 mt-11 sm:mt-8 skeleton"></h1>

      <section className="flex justify-center gap-4  mt-8 sm:mt-4">
        <div className="bg-slate-400 rounded-3xl  block squelon-tags skeleton"></div>
        <div className="bg-slate-400 rounded-3xl   squelon-tags skeleton"></div>
        <div className="bg-slate-400 rounded-3xl  squelon-tags  skeleton"></div>
      </section>
    </article>
  );
};
