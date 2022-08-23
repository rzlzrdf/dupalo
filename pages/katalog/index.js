import Head from 'next/head'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const katalog = () => {
  return (
    <>    
      <Head>
        <title>Dupalo | Katalog</title>
        <meta name="description" content="Dupalo Produk Katalog" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
        <Container>
          <Row>
            <Col>Katalog Page</Col>
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default katalog