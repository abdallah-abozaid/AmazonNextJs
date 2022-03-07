import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/images/pannar1.png";
import img2 from "../../public/images/panner2.png";
const Banner = () => {
  return (
    <div className="relative container mx-auto  ">
      <Carousel
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className="mt-4"
      >
        <div
          className="h-[200px] md:h-[300px]"
          style={{ width: "100%", position: "relative" }}
        >
          <Image src={img2} alt="panner img" layout="fill" />
        </div>
        <div
          style={{ width: "100%", position: "relative" }}
          className="h-[200px] md:h-[300px]"
        >
          <Image src={img1} alt="panner img" layout="fill" />
        </div>
        <div
          className="h-[200px] md:h-[300px]"
          style={{ width: "100%", position: "relative" }}
        >
          <Image src={img2} alt="panner img" layout="fill" />
        </div>
        <div
          style={{ width: "100%", position: "relative" }}
          className="h-[200px] md:h-[300px]"
        >
          <Image src={img1} alt="panner img" layout="fill" />
        </div>
      </Carousel>
      <div className="absolute w-full h-60 bottom-0 left-0 bg-gradient-to-b from-[#dddddd00] to-[#000000e3]"></div>
    </div>
  );
};

export default Banner;
