import React from 'react'
import Image from 'next/image'
import style from './Header.module.css'
import { Navbar, Container, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import Link from 'next/link'
import {AiOutlineGlobal} from 'react-icons/ai'

const Header = () => {
  return (
     <Navbar className={style.nav}>
     <Container>
       <Link href='/'><Image src={'/logo.png'} width={100} height={60} alt='logo-dupalo'/></Link>
       <Navbar.Toggle />
       <Navbar.Collapse className={"justify-content-end align-items-center gap-4 "+style.links}>
         <Link href='/'>Beranda</Link>
         <Link href='/katalog'>Katalog</Link>
         <Link href='/testimonial'>Testimonial</Link>
         <Link href='/katalog'>FAQ</Link>
         <Form.Select aria-label="Default select example"className={style.lang}>
            <option value="1">ID</option>
            <option value="2">EN</option>
          </Form.Select>
       </Navbar.Collapse>
     </Container>
   </Navbar>
  )
}

export default Header