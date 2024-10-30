import { useEffect, useRef, useState } from "react";

import {
  centerCrop,
  makeAspectCrop,
  // Crop,
  // PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
// import { canvasPreview } from "../Components/canvasPreview";
// import { useDebounceEffect } from "../useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import { useDebounceEffect } from "./useDebounceEffect";
import { canvasPreview } from "@/Components/canvasPreview";

function UseImageCrop() {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const hiddenAnchorRef = useRef(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1.0);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(16 / 9);

  const [accept, setAccept] = useState(false);

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      //    e.target.value = null; // Reset the input field after selection

      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgSrc(reader.result?.toString() || "");
        console.log({ src: reader.result?.toString() || "" });
      });
      console.log({ url: e.target.files[0] });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/png",
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);

    return blobUrlRef.current ? blobUrlRef.current : "";
    // if (hiddenAnchorRef.current) {
    //   hiddenAnchorRef.current.href = blobUrlRef.current;
    //   hiddenAnchorRef.current.click();
    // }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  // function handleToggleAspectClick() {
  //   if (aspect) {
  //     setAspect(undefined);
  //     console.log({ aspect: undefined });
  //   } else {
  //     setAspect(16 / 9);

  //     if (imgRef.current) {
  //       const { width, height } = imgRef.current;
  //       const newCrop = centerAspectCrop(width, height, 16 / 9);
  //       console.log({ newCrop });
  //       setCrop(newCrop);
  //       // Updates the preview
  //       setCompletedCrop(convertToPixelCrop(newCrop, width, height));
  //     }
  //   }
  // }

  useEffect(() => {
    setAspect(undefined);
  }, [imgSrc, imgRef.current]);

  const hadleResetImg = () => {
    setImgSrc("");
    setCrop(undefined);
    setCompletedCrop(undefined);
    setScale(1.0);
    setRotate(0);
    setAspect(undefined);
    setAccept(false);
  };
  const handleAccept = () => setAccept((prev) => !prev);
  const intervalRef = useRef(null);
  const isMouseDown = useRef(false);

  const handleScale = (value) => {
    setScale((prevScale) => {
      const newScale = prevScale ? prevScale + value : 0 + 1;
      if (newScale > 7 || newScale < 0.5)
        return prevScale ? Number(prevScale.toFixed(1)) : prevScale;
      return newScale ? Number(newScale.toFixed(1)) : newScale;
    });
  };

  const handleMouseDown = (value) => {
    isMouseDown.current = true;

    intervalRef.current = setInterval(() => {
      handleScale(value);
    }, 100); // 100ms interval like the input number behavior
  };

  const handleMouseUpOrLeave = () => {
    isMouseDown.current = false;
    clearInterval(intervalRef.current);
  };

  return {
    imgSrc,
    onSelectFile,
    crop,
    setCrop,
    completedCrop,
    setCompletedCrop,
    accept,
    scale,
    setScale,
    rotate,
    setRotate,
    aspect,
    setAspect,
    blobUrlRef,
    hiddenAnchorRef,
    imgRef,
    previewCanvasRef,
    canvasPreview,
    onImageLoad,
    onDownloadCropClick,

    handleAccept,
    hadleResetImg,
    handleMouseDown,
    handleMouseUpOrLeave,

    isMouseDown,
    handleScale,
  };
}

export default UseImageCrop;
