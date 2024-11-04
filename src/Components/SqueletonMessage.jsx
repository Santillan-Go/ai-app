import useTheme from "@/HOOKS/useTheme";
import React, { forwardRef } from "react";

// Use forwardRef to pass down the ref correctly

// Enhanced Skeleton Loader Component
const SqueletonMessage = forwardRef((props, ref) => {
  const Theme = useTheme();

  const getColorBG = () => {
    if (Theme.theme === "default")
      return "bg-purple-dark text-white  animate-pulse";
    if (Theme.theme === "blue fade")
      return "bg-dark-blue text-black animate-pulse ";
    if (Theme.theme === "dark mode")
      return " style_message_you text-white border border-slate-400";
  };
  return (
    <div
      ref={ref}
      className={` rounded-3xl shadow-2xl sm:w-full w-60 sm:max-w-sm h-auto p-6 ${getColorBG()} backdrop-blur-md border border-white-10  self-end space-y-4`}
    >
      {/* Header (simulating profile image or icon) */}

      {/* Body (simulating lines of text) */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-300 rounded skeleton skeleton-text-header-3 "></div>
        <div className="h-4 bg-slate-300 rounded  skeleton skeleton-text-header-4 w-5/6"></div>
        <div className="h-4 bg-slate-300 rounded w-4/6 skeleton skeleton-text-header-4"></div>
      </div>

      {/* Footer (simulating buttons or smaller elements) */}
      <div className="flex space-x-3">
        <div className="h-6 bg-slate-300 rounded w-1/3 skeleton skeleton-text-header-4"></div>
        <div className="h-6 bg-slate-300 rounded w-1/5 skeleton skeleton-text-header-4"></div>
      </div>

      <div className="space-y-3">
        <div className="h-4 bg-slate-300 rounded skeleton skeleton-text-header-3"></div>
        <div className="sm:block sm:visible   h-4 bg-slate-300 rounded w-5/6 skeleton skeleton-text-header-4"></div>
        <div className="sm:block sm:visible   h-4 bg-slate-300 rounded w-4/6 skeleton skeleton-text-header-4"></div>
      </div>

      <div className="flex space-x-3">
        <div className="h-6 bg-slate-300 rounded w-1/3 skeleton skeleton-text-header-4"></div>
        <div className="h-6 bg-slate-300 rounded w-1/5 skeleton skeleton-text-header-4"></div>
      </div>
    </div>
  );
});

export default SqueletonMessage;

// import React from "react";

// function SqueletonMessage({ ref }) {
//   return (
//     <div
//       ref={ref}
//       className="animate-pulse rounded-3xl shadow-2xl w-80 h-80 p-12 bg-slate-400 self-end"
//     >
//       <div className="text-center text-2xl text-gray-600">Loading...</div>
//     </div>
//   );
// }

// export default SqueletonMessage;
