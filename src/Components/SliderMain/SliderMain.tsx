"use client"
import "swiper/css"
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/react";
import { Scrollbar, EffectFade, Navigation, EffectCards, EffectCoverflow, Pagination , Autoplay } from "swiper/modules";
import {  dataSlidesMain } from "./SliderMain.data";


export function SliderMain (){
  return (
    <div className=" h-fit md:h-fit mt-12">

        <Swiper
               
               spaceBetween={30}
               effect={'fade'}
               navigation={true}
              
               scrollbar={{
                hide: true,
                draggable: true,
                
                
               
                
              }}
               loop={true}
               autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
               
               modules={[EffectFade, Navigation, Pagination,Autoplay]}

             >
             {dataSlidesMain.map(({image, id}) => (
               <SwiperSlide key={id} className="">
                   <img  src={image} alt='Service Card'  />
               </SwiperSlide>
               
             ))}
             
               
             

        </Swiper>
    </div>
        
  )
}

