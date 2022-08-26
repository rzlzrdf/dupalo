import React from 'react'
import Image from 'next/image'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap'
import {BsWhatsapp} from 'react-icons/bs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import style from '../styles/faq.module.css'

const faq = () => {
  return (
    <div>
      <header>
        <Header/>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={style.btn}>
                  <Accordion.Header>Accordion Item 2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={style.btn}>
                  <Accordion.Header>Accordion Item 3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={style.btn}>
                  <Accordion.Header>Accordion Item 4</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
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
              <Button className={style.wa}><BsWhatsapp/> Whatsapp</Button>
            </Col>
            <Col lg={6} className={style.gambar}>
              <img src='/model1.png' width={280} height={320} />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default faq