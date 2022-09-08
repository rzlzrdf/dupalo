import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import style from '../../styles/detail.module.css'
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from 'next/router';
import api from '../api/Produk.json'
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from 'swiper'
// const data = api[]

const produk = (props) => {
  // const router = useRouter()
  // const {product} = router.query
  // console.log(product)

  return (
    <>
    <Header/>
    <Container>
      <Row>
        <Col lg={6} className={style.fotoproduk + ' mt-4'}>
          <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide><img src='/gold/1.jpg' className={style.itemfoto} /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </Col>
        <Col lg={6}>
          <Card className={style.detail + ' shadow-sm mt-4'}>
            <Card.Body>
              <div>
              <Card.Title className='mb-2'>Dupa Gold 108 Batang</Card.Title>
              <Card.Title className={style.harga}>Rp. 72.000</Card.Title>
              <h6 className='text-muted mt-4'>Tersedia pada</h6>
              </div>
              <div className={style.wrap_btn}>
                <Button variant='secondary' className={style.tokped}><img src='/tokopedia.svg' />Tokopedia</Button>
                <Button variant='secondary' className={style.bukalapak}><img src='/bl.svg' />Bukalapak</Button>
                <Button variant='secondary' className={style.shopee }><img src='/shopee.svg' />Shopee</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className='mt-4 shadow-sm'>
            <Card.Body>
              <Card.Title>
                Deskripsi
              </Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col  lg={{span: 6, offset: 6}} className='mb-3'>
          
        </Col>
      </Row> */}
    </Container>
    </>
  )
}

export default produk