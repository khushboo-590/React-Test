import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imageData } from "../utils/helper";

const Carousel = () => {
    return (
        <div className="max-w-5xl  py-8">
            <Swiper
                modules={[Autoplay]}
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
                        <div className="relative group rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent text-white text-center py-5 px-3 min-h-24 transition-all duration-500 group-hover:translate-y-full">
                                <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
