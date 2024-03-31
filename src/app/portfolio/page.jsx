"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
 
import { useEffect, useState } from "react";
 import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "@/components/windowSize";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tabs_data = {
  tab1: ["/works/rentalApp.png", "/works/pcProductDesign.png", "/works/pcLogoDesign.png" ],
  tab2: ["/works/mobLogoDesign.png", "/works/Product Design.png", "/works/mobRental.png"],
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
                      height={621}
                      width={414}
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
               </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="h-fit w-full flex justify-center px-8 pt-4">
        <div className="flex-1 h-fit lg:w-1/2 self-center flex flex-col gap-8 items-center justify-center bg-gray-400/30 rounded-lg shadow-md backdrop-blur border border-gray-400/30 p-4 ">
         </div>
      </div>
    </motion.div>
  );
};
 

export default PortfolioPage;
