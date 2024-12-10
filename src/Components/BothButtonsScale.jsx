"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { forwardRef } from "react";

const BothButtonsScale = forwardRef(function BothButtonsScale({
  handleScale,
  handleMouseDown,
  handleMouseUpOrLeave,
  imgSrc,
  isMouseDown,
}) {
  return (
    <section className="both-buttons-scale">
      <button
        disabled={!imgSrc}
        className="button_control_scale"
        onClick={() => {
          isMouseDown?.current ? false : handleScale(0.1);
        }}
        onMouseDown={() => handleMouseDown(0.1)} // Start updating when button is pressed
        onMouseUp={handleMouseUpOrLeave} // Stop updating when button is released
        onMouseLeave={handleMouseUpOrLeave} // Stop updating when mouse leaves the button
      >
        <AddIcon fontSize="inherit" />
      </button>

      <button
        disabled={!imgSrc}
        className="button_control_scale"
        onClick={() => {
          isMouseDown.current ? false : handleScale(-0.1);
        }}
        onMouseDown={() => handleMouseDown(-0.1)} // Start updating when button is pressed
        onMouseUp={handleMouseUpOrLeave} // Stop updating when button is released
        onMouseLeave={handleMouseUpOrLeave} // Stop updating when mouse leaves the button
      >
        <RemoveIcon fontSize="inherit" />
      </button>
    </section>
  );
});

export default BothButtonsScale;
