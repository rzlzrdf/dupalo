/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import style from './Footer.module.css'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { SiTiktok, SiYoutube } from 'react-icons/si'
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
                    <Col>
                         <div className={style.nav}>
                              <Link href='/'><p>Beranda</p></Link>
                              <Link href='/katalog'><p>Katalog</p></Link>
                              <Link href='/testimonial'><p>Testimonial</p></Link>
                              <Link href='/faq'><p>FAQ</p></Link>
                         </div>
                    </Col>
                    <Col>
                         <p>Social Media Kami</p>
                         <div className={style.social}>
                              <Link className={style.link} href='https://m.facebook.com/dupalopusat'><AiFillFacebook /></Link>
                              <Link className={style.link} href='https://www.instagram.com/dupalo_pusat/'><AiOutlineInstagram /></Link>
                              <Link className={style.link} href='https://www.youtube.com/channel/UCmmrKEOMUCyVBsbu1_eHDHQ'><SiYoutube /></Link>
                              <Link className={style.link} href='https://www.tiktok.com/@dupalopusat'><SiTiktok /></Link>
                         </div>
                    </Col>
                    <Col>
                         <p>┬ęCopyright Dupalo 2022</p>
                         <img src='/Group 93.svg' alt='logo-dupalo' width={100} height={50} />
                    </Col>
               </Row>
          </Container>
     )
}

export default Footer