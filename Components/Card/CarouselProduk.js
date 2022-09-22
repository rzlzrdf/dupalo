import React from 'react'
import style from './CarouselProduk.module.css'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const CarouselProduk = (props) => {

     const pict = props.foto
     return (
          <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className={"mySwiper " + style.foto_container}>
               {pict.map(fotoproduk => {
                    return (
                         fotoproduk !== null &&
                         <SwiperSlide key={fotoproduk} className={style.itemfoto}>
                              <Zoom>
                                   <img
                                        alt='dupalo product pict'
                                        src={fotoproduk}
                                        onError={e => e.target.style.display = 'none'}
                                   />
                              </Zoom>
                         </SwiperSlide>
                    )
               })}
          </Swiper>
     )
}

export default CarouselProduk