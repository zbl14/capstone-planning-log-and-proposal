import React from "react";
import { useEffect, useState } from "react";
import bg1 from "../../../assets/bg-1.jpg";
import bg2 from "../../../assets/bg-2.jpg";
import bg3 from "../../../assets/bg-3.jpg";
import bg4 from "../../../assets/bg-4.jpg";
import bg5 from "../../../assets/bg-5.jpg";
import bg6 from "../../../assets/bg-6.jpg";

export function BackgroundSlideshow() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 5000);

    const change = () => {
      if (photo === 6) {
        setPhoto(1);
        return;
      }
      setPhoto((prev) => prev + 1);
    };

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return bg1;
      case 2:
        return bg2;
      case 3:
        return bg3;
      case 4:
        return bg4;
      case 5:
        return bg5;
      case 6:
        return bg6;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${returnPhotoURL()})`,
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        position: "fixed",
        zIndex: "-1",
      }}
    ></div>
  );
}
