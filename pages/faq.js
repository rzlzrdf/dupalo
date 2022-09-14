/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import style from '../styles/faq.module.css'

const faq = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Container className={style.section1}>
          <Row>
            <Col lg={6}>
              <h3 className='fw-bold'>Tanya Jawab</h3>
              <p>Berikut merupakan pertanyaan yang sering diajukan</p>
            </Col>
            <Col lg={6}>
              <Accordion defaultActiveKey="0" className={style.item}>
                <Accordion.Item eventKey="0" className={style.btn}>
                  <Accordion.Header>Apa itu Dupalo?</Accordion.Header>
                  <Accordion.Body>
                    Dupalo adalah toko dan pabrik dupa yang berbasis di Kota Malang, Jawa Timur.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={style.btn}>
                  <Accordion.Header>Bagaimana cara memesan atau membeli produk secara online</Accordion.Header>
                  <Accordion.Body>
                    Pemesanan atau pembelian produk Dupalo dapat tersedia di ketiga E-Commerce terbesar di Indonesia seperti Tokopedia, Shopee, dan Bukalpak. Atau anda juga dapat menekan 3 tombol tersedia pada katalog produk untuk diarahkan langsung ke halaman produk di e-commerce.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={style.btn}>
                  <Accordion.Header>Apa perbedaan seri Gold, Premium, dan Special</Accordion.Header>
                  <Accordion.Body>
                    Pada seri Gold kondisi minyak pada dupa sangat basah, sedangkan Premium memiliki kondisi basah, dan Spesial memiliki kondisi minyak cukup basha. Minyak dupa memiliki efek pada durasi nyala suatu dupa dan tingkat kekuatan aroma.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={style.btn}>
                  <Accordion.Header>Berapa biaya dan lama ongkir yang dibutuhkan ?</Accordion.Header>
                  <Accordion.Body>
                    Durasi serta biaya pengiriman memiliki nilai yang relatif dengan jarak tempuh dan berat produk sesuai Ekspedisi pilihan pelanggan pada saat memesan di E-Commerce.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Container className={style.section2}>
          <Row>
            <Col lg={6} className={style.text}>
              <h3>Whatsapp Center</h3>
              <p>Ajukan pertanyaanmu seputar Dupalo kepada admin kami melalui Whatsapp Center kami dibawah ini</p>
              <Button className={style.wa}><BsWhatsapp /> Whatsapp</Button>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default faq