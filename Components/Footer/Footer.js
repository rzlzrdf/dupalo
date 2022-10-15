/* eslint-disable @next/next/no-img-element */
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
                         <Link className={style.link} href='/'>Beranda</Link>
                         <Link className={style.link} href='/katalog'>Katalog</Link>
                         <Link className={style.link} href='/testimonial'>Testimonial</Link>
                         <Link className={style.link} href='/faq'>FAQ</Link>
                    </Col>
                    <Col>
                         <p>Social Media Kami</p>
                         <div className={style.social}>
                              <Link className={style.link} href='#'><AiFillFacebook /></Link>
                              <Link className={style.link} href='#'><AiOutlineInstagram /></Link>
                              <Link className={style.link} href='#'><AiOutlineWhatsApp /></Link>
                              <Link className={style.link} href='#'><AiOutlineMail /></Link>
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