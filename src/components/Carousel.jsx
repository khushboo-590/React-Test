import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { imageData } from "../utils/helper";

const Carousel = () => {
    return (
        <div className="max-w-5xl mx-auto py-8">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12" 
            >
                {imageData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-4 bg-white shadow-md rounded-md text-center h-full flex flex-col justify-between">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-64 object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mb-8">
                                {item.title}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
