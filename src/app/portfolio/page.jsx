"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tabs_data = {
  tab1: ["/sure.png", "/DIT.jpg", "/DIT.png", "/DIT.jpg"],
  tab2: ["/works/tab11.jpg", "/works/tab12.jpg", "/works/tab13.jpg"],
  tab3: ["/works/tab21.jpg", "/works/tab22.jpg", "/works/tab23.jpg"],
};

const PortfolioPage = () => {
  const [pc, setImage] = useState(tabs_data.tab1);
  const [isPhone, setIsPhone] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 768) {
      setImage(tabs_data.tab2);
      setIsPhone(true);
    } else setImage(tabs_data.tab1);
  }, [size]);

  return (
    <motion.div
      className="h-full no-scrollbar justify-center items-center "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className="pt-12 flex justify-center items-center flex flex-col ">
        <div className="container mt-8 justify-center items-center">
          <Swiper
            navigation
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-[96%] md:h-96 w-[95%] rounded-lg bg-gray-400/30 rounded-lg shadow-md backdrop-blur border border-gray-400/30 flex justify-center items-center"
          >
            {pc.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full ">
                  {isPhone ? (
                    <Image
                      src={image}
                      height={100}
                      width={100}
                      alt={image.alt}
                      className="flex justify-center items-center h-full w-full object-cover "
                    />
                  ) : (
                    <Image
                      src={image}
                      fill
                      alt={image.alt}
                      className="flex justify-center items-center h-full w-full object-contain "
                    />
                  )}
                </div>
                <div>hello</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="h-fit w-full flex justify-center px-8 pt-4">
        <div className="flex-1 h-fit lg:w-1/2 self-center flex flex-col gap-8 items-center justify-center bg-gray-400/30 rounded-lg shadow-md backdrop-blur border border-gray-400/30 p-4 ">
          {size.width}
        </div>
      </div>
    </motion.div>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default PortfolioPage;
