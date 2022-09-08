import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import style from '../../styles/katalog.module.css'
import Product from '../../components/Card/Product'
import gold from '../api/Produk.json'
import premium from '../api/Premium.json'
import special from '../api/Special.json'
import atma from '../api/Atma.json'
import seri27 from '../api/Seri27.json'


const katalog = ({ produk }) => {
  return (
    <>
      <Head>
        <title>Dupalo | Katalog</title>
        <meta name="description" content="Dupalo Produk Katalog" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Row>
            <Col lg={12} className={'d-flex justify-content-center ' + style.banner}>
              <Swiper navigation={true} modules={[Navigation]} className={style.mySwiper}>
                <SwiperSlide className={style.card}><img src='/bg1.jpg' /></SwiperSlide>
                <SwiperSlide className={style.card}><img src='/bg2.jpg' /></SwiperSlide>
                <SwiperSlide className={style.card}><img src='/bg3.jpg' /></SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
        <section id='gold' className={style.gold}>
          <Container>
            <Row>
              <Col>
                <h3 className='fw-bold'>Gold</h3>
                <p className='text-muted'>Dupa Gold merupakan dupa dengan kualitas wangi paling kuat dan kondisi yang sangat basah dan berminyak dengan ketahanan hingga 1.5 jam</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={style.product}>
                {gold.map(data => {
                  return (
                    <Product key={data.id} id={data.id} img={data.foto[0]} title={data.judul} desc={data.tipe} price={data.harga} />
                  )
                })}
              </Col>
            </Row>
          </Container>
        </section>
        <section id='premium' className={style.premium}>
          <Container>
            <Row>
              <Col lg={12}>
                <h3 className='fw-bold'>Premium</h3>
                <p className='text-muted'>Dupa Premium merupakan dupa dengan kualitas wangi paling kuat dan kondisi yang setengah basah dan berminyak dengan ketahanan hingga 1 jam</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={style.product}>
                {premium.map((data) => {
                  return (
                    <Product key={data.id} id={data.id} img={data.foto[0]} title={data.judul} desc={data.tipe} price={data.harga} />
                  )
                })}
              </Col>
            </Row>
          </Container>
        </section>
        <section id='special' className={style.special}>
          <Container>
            <Row>
              <Col lg={12}>
                <h3 className='fw-bold'>Premium</h3>
                <p className='text-muted'>Dupa Premium merupakan dupa dengan kualitas wangi paling kuat dan kondisi yang setengah basah dan berminyak dengan ketahanan hingga 1 jam</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={style.product}>
                {special.map((data) => {
                  return (
                    <Product key={data.id} id={data.id} img={data.foto[0]} title={data.judul} desc={data.tipe} price={data.harga} />
                  )
                })}
              </Col>
            </Row>
          </Container>
        </section>
        <section id='special' className={style.atma}>
          <Container>
            <Row>
              <Col lg={12}>
                <h3 className='fw-bold'>Atma</h3>
                <p className='text-muted'>Dupa Premium merupakan dupa dengan kualitas wangi paling kuat dan kondisi yang setengah basah dan berminyak dengan ketahanan hingga 1 jam</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={style.product}>
                {atma.map((data) => {
                  return (
                    <Product key={data.id} id={data.id} img={data.foto[0]} title={data.judul} desc={data.tipe} price={data.harga} />
                  )
                })}
              </Col>
            </Row>
          </Container>
        </section>
        <section id='special' className={style.atma}>
          <Container>
            <Row>
              <Col lg={12}>
                <h3 className='fw-bold'>Seri 27</h3>
                <p className='text-muted'>Dupa Premium merupakan dupa dengan kualitas wangi paling kuat dan kondisi yang setengah basah dan berminyak dengan ketahanan hingga 1 jam</p>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className={style.product}>
                {seri27.map((data) => {
                  return (
                    <Product key={data.id} id={data.id} img={data.foto[0]} title={data.judul} desc={data.tipe} price={data.harga} />
                  )
                })}
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default katalog