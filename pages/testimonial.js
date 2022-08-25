import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import style from '../styles/testimonial.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Testimonial from '../components/Card/Testimonial'

const testimonial = () => {
  return (
    <>
      <Head>
        <title>Dupalo | Testimonial</title>
        <meta name="description" content="Testimonial of Dupalo" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header/>
        <Container className='d-flex justify-content-center'>
          <Row>
            <Col lg={12}>
             <h3 className='fw-bold text-center'>Testimonial</h3>
             <p className='text-center'>Berbagai review positif dari para pelanggan kami</p>
            </Col>
              
            <Col lg={12} className={style.card_container}>
              <Testimonial image={'/review.png'} review={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'} profile={'Jack, Malangs'} />
              <Testimonial image={'/review.png'} review={'Lorem ipsum'} profile={'Jack, Malangs'} />
              <Testimonial image={'/review.png'} review={'Lorem ipsum'} profile={'Jack, Malangs'} />
              <Testimonial image={'/review.png'} review={'Lorem ipsum'} profile={'Jack, Malangs'} />
            </Col>
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default testimonial