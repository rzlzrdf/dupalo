import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import style from '../../styles/detail.module.css'
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from 'next/router';
import api from '../api/Produk.json'


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
        <Col>
        
        </Col>
        <Col lg={4}>
          <Card className={style.detail + ' shadow-sm mt-4'}>
            <Card.Body>
              <Card.Title className='mb-2'>Dupa Gold 108 Batang</Card.Title>
              <Card.Title className={style.harga}>Rp. 72.000</Card.Title>
              <div className='d-grid gap-2'>
                <Button variant='secondary' className={style.tokped}><img src='/tokopedia.svg' />Beli Melalui Tokopedia</Button>
                <Button variant='secondary' className={style.bukalapak}><img src='/bl.svg' />Beli Melalui Bukalapak</Button>
                <Button variant='secondary' className={style.shopee }><img src='/shopee.svg' />Beli Melalui Shopee</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className='mb-3'>
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
    </Container>
    </>
  )
}

export default produk