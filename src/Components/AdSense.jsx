import React from "react";
import Script from "next/script";
function AdSense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6335035765993896`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export default AdSense;
