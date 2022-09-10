import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import { useRouter } from 'next/router';
import style from '../../styles/detail.module.css'
import api from '../api/AllProduk.json'
import Label from '../../components/Card/Label';
import Deskripsi from '../../components/Card/Deskripsi';
import CarouselProduk from '../../components/Card/CarouselProduk';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5'

const Produk = (props) => {
  const router = useRouter()
  const { detail } = router.query //get id from url parameter
  const select = api[detail]
  console.log(select)




  // const [judul, setJudul] = useState(null)
  // const [harga, setHarga] = useState(null)

  // let myReq = new Request("./AllProduk.json")

  // fetch(allProduct)
  //   .then(res => {
  //     console.log(res)
  //   })

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={6} className={style.fotoproduk + ' mt-4'}>
            <Link href='/katalog'><button className={style.btns}><IoChevronBack size={28} />Back</button></Link>

            {/* <CarouselProduk foto={select.foto}/> */}
          </Col>
          <Col lg={6}>
            <Label judul={select ? select.judul : 'Loading...'} harga={select ? select.harga : 0} />
            <Deskripsi deskripsi={select ? select.deskripsi : '-'} />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 6 }} className='mb-3'>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Produk