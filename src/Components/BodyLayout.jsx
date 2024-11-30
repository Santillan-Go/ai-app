"use client";
import React from "react";

import useTheme from "@/HOOKS/useTheme";

function BodyLayout({ children, montserratAlternates }) {
  const Theme = useTheme();
  return (
    <body
      className={`${montserratAlternates.className} ${Theme.bg} h-screen-[90vh] sm:min-h-screen`}
    >
      <main>{children}</main>
    </body>
  );
}

export default BodyLayout;
