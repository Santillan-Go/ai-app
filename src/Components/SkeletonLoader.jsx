function SkeletonLoader() {
  return (
    <div className="animate-pulse basis-[85%] sm:basis-[90%] flex flex-col sm:pl-24 sm:pr-24 overflow-y-auto scrollbar-thin pb-4 gap-6   sm:gap-2 pt-2 border border-purple-700">
      <div className=" bg-gray-300 rounded-3xl self-start w-44 sm:w-80 sm:h-28 p-2  flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-44 sm:w-80 sm:h-28 p-2  flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div
        className=" bg-gray-300 rounded-3xl self-start w-60 sm:h-28   
 p-2 flex flex-col gap-2 justify-center"
      >
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-60 sm:h-28 p-2  flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-start w-44 sm:w-80 sm:h-28 p-2 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-44 sm:w-80 sm:h-28 p-2 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
