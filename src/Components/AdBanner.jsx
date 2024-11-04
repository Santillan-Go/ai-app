import React from "react";

function AdBanner({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  client,
}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={`ca-pub-${client}`}
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive}
    ></ins>
  );
}

export default AdBanner;
