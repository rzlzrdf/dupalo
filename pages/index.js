/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import style from '../styles/testimonial.module.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import 'swiper/css';
import { Card, Col, Container, Row, Accordion, Button } from 'react-bootstrap'
import Link from 'next/link'
import Testimonial from '../Components/Card/Testimonial'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { BsWhatsapp, BsChevronDoubleDown } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import api from '../pages/api/Testimonial.json'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Dupalo Pusat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Dupalo Official Website" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.container}>
        <section id='hero' className={styles.hero}>
          <Container>
            <Row>
              <Col lg={6} className={styles.hero11}>
                <h1 className={styles.tagline}>Wangikan</h1>
                <h1 className={styles.tagline2}>Nusantara</h1>
              </Col>
              <Col lg={6} className='d-flex justify-content-center align-items-center'>
                <div className={styles.cards}>
                  <img src='/1.jpg' className={styles.gold} alt='Gentong 3 Dupa Gold Series' />
                  <img src='/2.jpg' className={styles.premium} alt='Gentong 3 Dupa Premium Series' />
                  <img src='/3.jpg' className={styles.special} alt='Gentong 3 Dupa Special Series' />
                  <img src='/4.jpg' className={styles.atma} alt='Atma Series' />
                </div>
              </Col>
              <Col lg={12}  className={styles.more}>
                <a href={'/#2'}>
                  <BsChevronDoubleDown className={styles.chevron}/>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section id={2} className={styles.hero2}>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className={'d-flex justify-content-center align-items-center'}>
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
                <img src={'/logo.png'} alt='logo-dupalo' className={styles.logo} />
              </Col>
            </Row>
          </Container>
        </section>
        <section id='testimonial' className={style.testi}>
          <Container className='d-flex justify-content-center '>
            <Row>
              <Col lg={12}>
                <h3 className='fw-bold text-center'>Testimonial</h3>
                <p className='text-center'>Berbagai review positif dari para pelanggan kami</p>
              </Col>

              <Col lg={12} className={style.review_container}>
                <div className={style.swuipe}>
                  <Swiper
                    loop={true}
                    speed={1000}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"3"}
                    coverflowEffect={{
                      rotate: 20,
                      stretch: 0,
                      depth: 80,
                      modifier: 1,
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
        </section>
        <section className={style.partner}>
          <Container>
            <Row>
              <Col lg={12} className='d-flex justify-content-center'>
                <h3 className='fw-bold text-center'>Partner Kami</h3>
              </Col>
              <Col lg={12} className={'d-flex justify-content-center my-4 gap-3 flex-wrap'}>
                <img src='/brand/krisna.png' width={100} height={55} alt='Krisna Logo' />
                <img src='/brand.png' width={100} height={55} alt='' />
              </Col>
              <Col lg={12} className={'d-flex justify-content-center mb-2 gap-3 flex-wrap'}>
                <img src='/brand.png' width={100} height={55} alt='' />
                <img src='/brand.png' width={100} height={55} alt='' />
                <img src='/brand.png' width={100} height={55} alt='' />
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
        <section id='faq'>
          <Container className={style.section1}>
            <Row>
              <Col lg={4} className={'d-flex flex-column justify-content-evenly ' + style.tulisan}>
                <h3 className='fw-bold'>Tanya Jawab</h3>
                <p>Berikut merupakan pertanyaan yang sering diajukan atau Ajukan pertanyaanmu seputar Dupalo kepada admin kami melalui Whatsapp Center kami dibawah ini</p>
                <Button variant='success' className={styles.wa}><a href='https://api.whatsapp.com/send?phone=6281382575758'><BsWhatsapp /> Whatsapp</a></Button>
              </Col>
              <Col lg={8}>
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
