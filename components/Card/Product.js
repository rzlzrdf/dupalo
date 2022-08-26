import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Product.module.css'

const Product = (props) => {
  return (
    <Card className={'shadow-sm ' + style.container}>
      <Card.Img variant="top" src={props.img} className={style.img}/>
      <Card.Body>
        <Card.Title className={style.title}>{props.title}</Card.Title>
        <Card.Text className={style.desc}>
          {props.desc}
        </Card.Text>
        <Card.Title className={style.price}>
          {props.price}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Product