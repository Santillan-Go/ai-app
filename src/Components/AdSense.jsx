import React from "react";
import Script from "next/script";
function AdSense({ pId }) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export default AdSense;
