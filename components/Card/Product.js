import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Product.module.css'

const Product = (props) => {
  return (
    <Link key={props.id} href={'/katalog/' + props.id}>
      <Card className={'shadow-sm ' + style.container} >
        <Card.Img variant="top" src={props.img} className={style.img}/>
        <Card.Body className={style.body}>
          <Card.Title className={style.title}>{props.title}</Card.Title>
          <Card.Text className={style.desc}>
            {props.desc}
          </Card.Text>
          <Card.Title className={style.price}>
            Rp. {new Intl.NumberFormat("id-ID", {
            currency: "IDR",
            }).format(props.price)}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Product