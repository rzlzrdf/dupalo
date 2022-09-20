import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import { useRouter } from 'next/router';
import style from '../../styles/detail.module.css'
import api from '../api/AllProduk.json'
import Label from '../../Components/Card/Label';
import Deskripsi from '../../Components/Card/Deskripsi';
import CarouselProduk from '../../Components/Card/CarouselProduk';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5'

const Produk = (props) => {
  const router = useRouter()
  const { detail } = router.query //get id from url parameter
  const select = api[detail]
  console.log(select)

  const img = ['https://dummyimage.com/600x600/white/fff.png']


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
        {
          <>
            <Row>
              <Col lg={6} className={style.fotoproduk + ' mt-4'}>
                <button type="button" onClick={() => router.back()} className={style.back}>
                  <IoChevronBack /> Kembali
                </button>
                {/* <Link href='/katalog' className={style.btns}><IoChevronBack size={28} /></Link> */}
                <CarouselProduk id={select ? select.id : '0'} foto={select ? select.foto : img} />
              </Col>
              <Col lg={6} className={''}>
                <Label judul={select ? select.judul : '..'} harga={select ? select.harga : ''} tokped={select ? select.tokped : '#'} bukalapak={select ? select.bukalapak : '#'} shopee={select ? select.shopee : '#'}/>
                <Deskripsi deskripsi={select ? select.deskripsi : '-'} />
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 6, offset: 6 }} className='mb-3'>

              </Col>
            </Row>
          </>
        }

      </Container>
    </>
  )
}

export default Produk