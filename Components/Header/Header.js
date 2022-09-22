/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import style from './Header.module.css'
import { Navbar, Container, Dropdown, DropdownButton, Form, Button, Offcanvas } from 'react-bootstrap'
import Link from 'next/link'
import { AiOutlineGlobal } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { useRouter } from 'next/router';



const Header = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useRouter()

  return (
    <Navbar className={style.nav}>
      <Container>
        <Link href='/'><img src={'/logo.png'} className={style.logo} alt='logo-dupalo' /></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className={"justify-content-end align-items-center gap-4 " + style.links}>
          <Link href='/'><a className={location.pathname == '/' ? style.active : ''}>Beranda</a></Link>
          <Link href='/katalog'><a className={location.pathname == '/katalog' ? style.active : ''}>Katalog</a></Link>
          <Link href='/#testimonial' className={location.pathname == '/#testimonial' ? style.active : '/'}>Testimonial</Link>
          <Link href='/#faq' className={location.pathname == '/#faq' ? style.active : ''}>FAQ</Link>
          <Form.Select aria-label="Default select example" className={style.lang}>
            <option value="1">ID</option>
            <option value="2">EN</option>
          </Form.Select>
        </Navbar.Collapse>
        <Button variant="white" onClick={handleShow} className={style.mobnav}>
          <HiMenuAlt4 className={style.menumob} />
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton className='mx-4'>
            <Offcanvas.Title><Link href='/'><img src={'/logo.png'} width={90} height={60} alt='logo-dupalo' /></Link></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='d-flex justify-content-start flex-column gap-5 fs-lg-6 fs-sm-4 fw-bold m-4'>
          <Link href='/'><a className={location.pathname == '/' ? style.active : ''}>Beranda</a></Link>
          <Link href='/katalog'><a className={location.pathname == '/katalog' ? style.active : ''}>Katalog</a></Link>
          <Link href='/#testimonial' className={location.pathname == '/#testimonial' ? style.active : '/'}>Testimonial</Link>
          <Link href='/#faq' className={location.pathname == '/#faq' ? style.active : ''}>FAQ</Link>
            <div className='d-flex justify-content-center gap-4 mt-4'>
              <Link href='#'><img src='/indonesia.png' alt='id' className={style.languange} /></Link>
              <Link href='#'><img src='/uk.png' alt='uk' className={style.languange} /></Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header