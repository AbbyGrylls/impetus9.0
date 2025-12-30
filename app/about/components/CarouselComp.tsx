'use client';

import { Box } from "@mui/system";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function CarouselComp() {
  const urls = [
    "/iam/iam1.jpg",
    "/iam/iam2.jpg",
    "/iam/iam3.jpg",
    "/iam/iam4.jpg",
    "/iam/iam5.jpg",
    "/iam/iam6.jpg",
  ];

  return (
    <Box sx={{ width: "100vw", mt: "120px" }} className="center1">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {urls.map((url) => (
          <SwiperSlide key={url}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                aspectRatio: "16 / 9",
              }}
            >
              <Image
                src={url}
                alt="iam image"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}