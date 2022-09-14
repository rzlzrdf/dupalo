/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiFillCheckCircle } from 'react-icons/ai'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Dupalo | Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Dupalo Official Website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.container}>
        {/* <section id='hero'>
        <Container>
          <Row>
            <Col>
                <Swiper
                // install Swiper modules
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><img src='/hero.png'/></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section> */}
        <section className={styles.hero2}>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className={styles.hero21}>
                <img src={'/hero.png'} alt='dupalo' className={styles.dupa} />
              </Col>
              <Col lg={6} md={12} className={styles.hero22}>
                <h3 className='fw-bold'>Toko dupa khusus produksi Dupalo merk Gentong 3 Dupa, Baladewa dan Atma</h3>
                <p>Penjualan dupa dengan berbagai macam varian dan kualitas yang terbaik</p>
                <p><AiFillCheckCircle className={styles.cek} /> Dupa Stik</p>
                <p><AiFillCheckCircle className={styles.cek} /> Dupa Ulir</p>
                <p><AiFillCheckCircle className={styles.cek} /> Dupa Kerucut</p>
                <p><AiFillCheckCircle className={styles.cek} /> Dupa Pasta</p>
                <p><AiFillCheckCircle className={styles.cek} /> Dupa Asturba</p>
                <p><AiFillCheckCircle className={styles.cek} /> Aksesoris Dupa</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.about}>
          <Container>
            <Row>
              <Col lg={6} md={12} className={styles.about1}>
                <h3 className={'mb-4 fw-bold '}>Tentang Kami</h3>
                <article>
                  Toko dan Pabrik Dupa <b>Dupalo</b> merupakan sebuah industri yang berbasis di <b>Kota Malang</b> dengan memproduksi aneka macam dupa bermerk <b>Gentong Tiga Dupa</b>, <b>Atma</b>, dan <b>Seri 27</b> untuk berbagai jenis keperluan seperti Aromaterapi, Sembahyang, Ritual, Sesaji dan lainnya. <b>Dupalo</b> menggunakan bahan produksi yang berkualitas serta bersertifkat untuk aman digunakan.
                </article>
              </Col>
              <Col lg={6} md={12} className={styles.about2}>
                <img src={'/logo.png'} width={380} height={250} alt='logo-dupalo' className={styles.logo} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.find}>
          <Container>
            <Row>
              <Col lg={12} md={12}>
                <Card className={styles.find_card}>
                  <h3 className='fw-bold'>Cari Produk Dupa</h3>
                  <p>Klik tombol dibawah ini untuk melihat produk dupa favorit dan kesayanganmu dibawah ini</p>
                  <Link href={'/katalog'}>Lihat Produk</Link>
                </Card>
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
