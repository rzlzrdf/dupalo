import Link from 'next/link'
import React from 'react'
import style from './Footer.module.css'
import { AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
     return (
          <Container fluid className={style.container}>
               <Row className={style.wrap}>
                    <Col>
                         <strong>Dupalo Pusat</strong>
                         <p>Jalan Treusan Sigura Gura No. 166A Sukun Kota Malang</p>
                         <p>dupalo@gmail.com</p>
                         <p>081-233-334-808</p>
                    </Col>
                    <Col className={style.nav}>
                         <Link href='/'>Beranda</Link>
                         <Link href='/katalog'>Katalog</Link>
                         <Link href='/testimonial'>Testimonial</Link>
                         <Link href='/faq'>FAQ</Link>
                    </Col>
                    <Col>
                         <p>Social Media Kami</p>
                         <div className={style.social}>
                              <a href='#'><AiFillFacebook /></a>
                              <a href='#'><AiOutlineInstagram /></a>
                              <a href='#'><AiOutlineWhatsApp /></a>
                              <a href='#'><AiOutlineMail /></a>
                         </div>
                    </Col>
                    <Col>
                         <p>©Copyright Dupalo 2022</p>
                         <img src='/Group 93.svg' alt='logo-dupalo' width={100} height={50} />
                    </Col>
               </Row>
          </Container>
     )
}

export default Footer