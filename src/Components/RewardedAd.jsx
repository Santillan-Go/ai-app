import { useState } from "react";
import Script from "next/script";

export default function RewardedAd() {
  const [showAd, setShowAd] = useState(false);
  const [rewardGiven, setRewardGiven] = useState(false);

  const handleShowAd = () => {
    setShowAd(true);
  };

  const handleAdClose = () => {
    setShowAd(false);
    setRewardGiven(true); // Give tokens or rewards here
  };

  return (
    <div>
      {/* Button to show ad */}
      <button onClick={handleShowAd} disabled={rewardGiven}>
        {rewardGiven ? "Reward Claimed!" : "Watch Ad to Earn Tokens"}
      </button>

      {/* Show Ad when `showAd` is true */}
      {showAd && (
        <div>
          <div className="ad-placeholder">
            <p>Your Ad Here</p>
            <button onClick={handleAdClose}>Close Ad</button>
          </div>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
          ></ins>
          <Script
            id="AdsenseScript"
            strategy="afterInteractive"
            onLoad={() => {
              // Ad is loaded and ready to be shown
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            }}
          />
        </div>
      )}
    </div>
  );
}
