function SkeletonLoader() {
  return (
    <div className="animate-pulse  basis-90% flex flex-col pl-24 pr-24 overflow-y-auto scrollbar-thin pb-4">
      <div className=" bg-gray-300 rounded-3xl self-start w-80 h-28 shadow-lg shadow-gray-400 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-80 h-28  flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-start w-60 h-28 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-60 h-28 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-start w-80 h-28 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
      <div className=" bg-gray-300 rounded-3xl self-end w-80 h-28 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-1-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-2-message  skeleton"></div>
        <div className="h-4 bg-slate-400 rounded skeleton-text-header-3-message  skeleton"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
