"use client"
import "swiper/css"
import {Swiper, SwiperSlide} from "swiper/react";
import { dataServices } from "./Services.data";
import { MotionTransition } from "../MotionTransition";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export function Services (){
  return (
    <div className="mt-5 " id="servicios">
        <MotionTransition className="flex items-center justify-center py-20 ">
            <div className="max-w-full lg:mx-40 md:mx-28  px-5 py-20 sm:mx-5 bg-slate-800" >
                
                <div className="md:px-40 py-5">
                    <p className="md:text-3xl text-xl  text-white py-5 pb-10 text-center">
                            Nuestros servicios
                    </p>
                    <p className="md:text-xl text-lg text-whotepy-5 text-[#6EB7CD]">
                            Gran parte de nuestra vida como prestadores de:
                    </p>
                </div>
                
                <div className="relative w-full overflow-hidden md:px-40">
                        <Swiper
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            310: { slidesPerView: 1},
                        }}
                        
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false
                        }}
                        grabCursor = {true}
                        modules={[EffectFade, Navigation, Pagination,Autoplay]}
                        speed={5000}
                        >
                            <div className="absolute flex ">
                                {dataServices .map(({id, image, text}) => (
                                    <SwiperSlide key={id} className="flex items-center slider-horizontal">
                                        
                                        <div className="w-60 h-72 group">
                                                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: `url("/assets/${image}")`}}>
                                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 hover:bg-opacity-20"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 text-center py-4 ">
                                                        <p className="sm:text-sm  text-2xl md:font-semibold  group-hover:bg-black group-hover:bg-opacity-30">{text}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </div>
                        </Swiper>

                </div>

                    
                    

                    
            </div>
        </MotionTransition>
    </div>
   
  )
}
