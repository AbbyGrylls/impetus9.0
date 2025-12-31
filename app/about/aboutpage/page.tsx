"use client";

import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AboutImpetus from "../aboutImpetus/page";
import AboutDepartmentSME from "../aboutSME/page";

export default function AboutPage() {
  //   const videoRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const theme = useTheme();

  const [muted] = useState(true);
  //   const [propertyValue, setPropertyValue] = useState("absolute");
  const [propertyValue, setPropertyValue] =
    useState<React.CSSProperties["position"]>("absolute");

  const [topValue, setTopValue] = useState("45vh");
  const [heightValue, setHeightValue] = useState("50%");

  //   const videoStyle = {

  //     position: propertyValue,
  //     top: topValue,
  //     width: "100%",
  //     height: heightValue,
  //     objectFit: "contain",
  //     zIndex: 1,

  //   };

  const videoStyle: React.CSSProperties = {
    position: propertyValue,
    top: topValue,
    width: "100%",
    height: heightValue,
    objectFit: "cover",
    zIndex: 1,
  };

  const styles = {
    width: "100vw",
    ".videos": {
      width: "100vw",
      filter: "brightness(80%)",
    },
    "#trailer": {
      width: "100vw",
      height: "100vh",
      objectFit: "contain",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    ".aboutImpetus, .aboutDept": {
      margin: "50px 0",
      marginTop: "170px",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 900) {
        setPropertyValue("relative");
        setTopValue("0");
        setHeightValue("40vw");
        videoRef.current?.pause();
      } else {
        setPropertyValue("absolute");
        setTopValue("45vh");
        setHeightValue("50%");
        videoRef.current?.play().catch(() => {});
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      videoRef.current?.pause();
    };
  }, []);

  return (
    <div>
    <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
  <video
    ref={videoRef}
    muted
    autoPlay
    loop
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "80%",
      objectFit: "cover",
    }}
  >
    <source src="/images/about/teaser.mp4" type="video/mp4" />
  </video>
  
</Box>
<AboutImpetus/>
<AboutDepartmentSME/>
</div>

  );
}
