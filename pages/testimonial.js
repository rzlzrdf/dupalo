import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import style from '../styles/testimonial.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Testimonial from '../components/Card/Testimonial'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import api from '../pages/api/Testimonial.json'




const testimonial = () => {
  return (
    <>
      <Head>
        <title>Dupalo | Testimonial</title>
        <meta name="description" content="Testimonial of Dupalo" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <Container className='d-flex justify-content-center my-5'>
        <Row>
          <Col lg={12}>
            <h3 className='fw-bold text-center'>Testimonial</h3>
            <p className='text-center'>Berbagai review positif dari para pelanggan kami</p>
          </Col>

          <Col lg={12} className={style.review_container}>
            <div className={style.swuipe}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"3"}
                coverflowEffect={{
                  rotate: 20,
                  stretch: 0,
                  depth: 80,
                  modifier: 2,
                  slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
              >
                {/* <SwiperSlide><Testimonial testi={'Barang Bagus'} profil={'/man (1).png'} nama={'Abdul Mufakir'} platform={'Tokopedia'}/></SwiperSlide> */}
                {api.map(data => {
                  return (
                    <SwiperSlide key={data.id}><Testimonial testi={data.testi} profil={data.foto} nama={data.nama} platform={data.platform} /></SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={12} className='d-flex justify-content-center'>
            <h3 className='fw-bold text-center'>Partner Kami</h3>
          </Col>
          <Col lg={12} className={style.logo}>
            <img src='/krisna.png' width={100} height={55} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default testimonial