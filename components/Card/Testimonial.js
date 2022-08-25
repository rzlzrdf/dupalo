import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Testimonial.module.css'

const Testimonial = (props) => {
  return (
    <Card className={style.container}>
     <div className={style.left}>
        <img src={props.image} alt={'user-review'} width={50} height={50} />
      </div>
      <div className={style.right}>
        <div></div>
        <div>
          <article>{props.review}</article>
          <p className='fw-bold'>{props.profile}</p>
        </div>
      </div>
    </Card>
  )
}

export default Testimonial