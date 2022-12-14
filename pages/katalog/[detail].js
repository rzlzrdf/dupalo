import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import { useRouter } from 'next/router';
import style from '../../styles/detail.module.css'
import api from '../api/AllProduk.json'
import Label from '../../Components/Card/Label';
import Deskripsi from '../../Components/Card/Deskripsi';
import CarouselProduk from '../../Components/Card/CarouselProduk';
import { IoChevronBack } from 'react-icons/io5'

const Produk = (props) => {
  const router = useRouter()
  const { detail } = router.query //get id from url parameter
  const select = api[detail]
  console.log(select)

  const img = ['https://dummyimage.com/600x600/white/fff.png']



  return (
    <>
      <Header />
      <Container>
        {
          <>
            <button type="button" onClick={() => router.back()} className={style.desktop}>
              <IoChevronBack /> Kembali
            </button>
            <Row>
              <Col lg={6} className={style.fotoproduk + ' mt-4'}>
                <button type="button" onClick={() => router.back()} className={style.back}>
                  <IoChevronBack /> Kembali
                </button>
                <CarouselProduk id={select ? select.id : '0'} foto={select ? select.foto : img} />
              </Col>
              <Col lg={6} className={''}>
                <Label judul={select ? select.judul : '..'} harga={select ? select.harga : ''} tokped={select ? select.tokped : '#'} />
                <Deskripsi deskripsi={select ? select.deskripsi : '-'} />
              </Col>
            </Row>
          </>
        }

      </Container>
    </>
  )
}

export default Produk