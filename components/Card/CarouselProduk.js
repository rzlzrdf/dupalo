import React from 'react'
import style from './CarouselProduk.module.css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper'


const CarouselProduk = (props) => {
     return (
          <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className={"mySwiper " + style.foto_container}>
               {props.foto !== null && props.foto.map(fotoproduk => {
                    return (
                         fotoproduk !== null &&
                         <SwiperSlide key={props.id} className={style.itemfoto}>
                              <img
                                   alt='dupalo product pict'
                                   src={fotoproduk}
                                   onError={e => e.target.style.display = 'none'}
                              />
                         </SwiperSlide>
                    )
               })}
               {/* <SwiperSlide><img src='/gold/1.jpg' className={style.itemfoto} /></SwiperSlide>
               <SwiperSlide>Slide 2</SwiperSlide>
               <SwiperSlide>Slide 3</SwiperSlide>
               <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
     )
}

export default CarouselProduk