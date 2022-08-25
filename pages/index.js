import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, Col, Container, Row } from 'react-bootstrap'
import {AiFillCheckCircle} from 'react-icons/ai'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dupalo | Homepage</title>
        <meta name="description" content="Dupalo Official Website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header> 
        <Header/>
      </header>
      <main>
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
              <Image src={'/dupa.png'} alt='dupalo'width={300} height={300} className={styles.dupa}/>
            </Col>
            <Col lg={6} md={12} className={styles.hero22}>
              <h3 className='fw-bold'>Toko dupa khusus produksi Dupalo merk Gentong 3 Dupa, Baladewa dan Atma</h3>
              <p>Penjualan dupa dengan berbagai macam varian dan kualitas yang terbaik</p>
              <p><AiFillCheckCircle className={styles.cek}/> Dupa Stik</p>
              <p><AiFillCheckCircle className={styles.cek}/> Dupa Ulir</p>
              <p><AiFillCheckCircle className={styles.cek}/> Dupa Kerucut</p>
              <p><AiFillCheckCircle className={styles.cek}/> Dupa Pasta</p>
              <p><AiFillCheckCircle className={styles.cek}/> Dupa Asturba</p>
              <p><AiFillCheckCircle className={styles.cek}/> Aksesoris Dupa</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.about}>
        <Container>
          <Row>
            <Col lg={6} md={12} className={styles.about1}>
              <h3 className={'mb-4 fw-bold '}>Tentang Kami</h3>
              <article>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</article>
            </Col>
            <Col lg={6} md={12} className={styles.about2}>
              <Image src={'/logo.png'} width={380} height={250} alt='logo-dupalo' className={styles.logo}/>
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
        <Footer/>
      </footer>
    </div>
  )
}
