import React, { forwardRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import Loader from "./Loader";
import ButtonCancelText from "./ButtonCancelText";
import BothButtonsScale from "./BothButtonsScale";
import useLanguage from "@/HOOKS/useLanguage";

const ModalmageText = forwardRef(function ModalmageText({
  imgSrc,
  text,
  hadleResetImg,
  resetText,
  setScale,
  setCrop,
  handleScale,
  handleMouseDown,
  handleMouseUpOrLeave,
  onDownloadCropClick,
  isMouseDown,
  handleAccept,
  imgRef,
  previewCanvasRef,
  accept,
  scale,
  completedCrop,
  onImageLoad,
  setCompletedCrop,
  crop,
  aspect,
  loadingText,
  setImage,
}) {
  const { spanish } = useLanguage();
  return (
    <>
      {imgSrc && (
        <section className="modal_image_text">
          {/*SET IMAGE AND ITS CONTROL*/}

          <ButtonCancelText
            hadleResetImg={hadleResetImg}
            imgRef={imgRef}
            resetText={resetText}
          />
          <div className="Crop-Controls">
            {imgSrc && !text && !accept && (
              <div className="buttons-scale">
                <label htmlFor="scale-input">Scale: </label>
                <input
                  id="scale-input"
                  type="number"
                  step="0.1"
                  className="input_scale"
                  value={scale}
                  aria-controls="off"
                  disabled={!imgSrc}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log({ value });
                    // Allow empty or partial values like "0."
                    if (value === "" || /^(\d+(\.\d{0,9})?)?$/.test(value)) {
                      const numericValue = Number(value);

                      // Check if the numeric value is within valid range
                      if (numericValue <= 7 || value === "") {
                        setScale(value === "" ? "" : numericValue);
                      }
                    }
                  }}
                />

                <BothButtonsScale
                  handleMouseDown={handleMouseDown}
                  handleMouseUpOrLeave={handleMouseUpOrLeave}
                  handleScale={handleScale}
                  imgSrc={imgSrc}
                  isMouseDown={isMouseDown}
                />
                {/* <section className="both-buttons-scale">
                  <button
                    disabled={!imgSrc}
                    className="button_control_scale"
                    onClick={() => {
                      isMouseDown.current ? false : handleScale(0.1);
                    }}
                    onMouseDown={() => handleMouseDown(0.1)} // Start updating when button is pressed
                    onMouseUp={handleMouseUpOrLeave} // Stop updating when button is released
                    onMouseLeave={handleMouseUpOrLeave} // Stop updating when mouse leaves the button
                  >
                    +
                  </button>

                  <button
                    disabled={!imgSrc}
                    className="button_control_scale"
                    onClick={() => {
                      console.log({ click: "HERE!" });
                      isMouseDown.current ? false : handleScale(-0.1);
                    }}
                    onMouseDown={() => handleMouseDown(-0.1)} // Start updating when button is pressed
                    onMouseUp={handleMouseUpOrLeave} // Stop updating when button is released
                    onMouseLeave={handleMouseUpOrLeave} // Stop updating when mouse leaves the button
                  >
                    -
                  </button>
                </section> */}
              </div>
            )}
          </div>

          <section className="flex justify-center gap-2 items-center">
            {imgSrc && (
              <button
                onClick={() => {
                  handleAccept();
                  resetText();
                }}
                className="button_text"
              >
                {!accept
                  ? spanish
                    ? "Aceptar"
                    : "Accept"
                  : spanish
                  ? "Cancelar"
                  : "Cancel"}
              </button>
            )}

            {imgRef.current && accept && (
              <button
                onClick={async () => {
                  const img = await onDownloadCropClick();
                  await setImage({ img });
                  hadleResetImg();
                  imgRef.current = null;
                }}
                className="button_text"
              >
                {spanish ? "Extraer Texto" : "Get text"}
              </button>
            )}
          </section>
          {/*CURRENT IMAGE EDITING*/}
          <div className="Crop_Relative p-4 gap-4  relative flex flex-col justify-center sm:flex-row  sm:justify-center sm:items-center ">
            {!!imgSrc && (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                // minWidth={400}
                minHeight={20}
                className={`ReactCrop `}

                // circularCrop
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${scale})` }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
            {!!completedCrop && (
              <>
                {/*THIS IS THE IMAGE RESULT USING CANVA TAG*/}
                <div
                  className={`${accept ? "resultImage" : "canva_container"}`}
                >
                  <canvas
                    ref={previewCanvasRef}
                    style={{
                      border: "1px solid black",
                      objectFit: "contain",
                      width: completedCrop.width,
                      height: completedCrop.height,
                      borderRadius: "1rem",
                    }}
                  />{" "}
                  {loadingText && <Loader />}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
});

export default ModalmageText;
