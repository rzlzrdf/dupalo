import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Testimonial.module.css'


const Testimonial = (props) => {
  return (
    <Card className={style.container + ' shadow-sm'}>
      <div className={style.gambar}>
        <img src={'/quote.png'} alt='review' width={50} height={50} />
      </div>
      <div className={style.quote}>
        <h4 className='text-muted'>{props.testi}</h4>
      </div>
      <div className={style.profil}>
        <div>
          <img src={props.profil} alt='review' width={50} height={50} />
        </div>
        <div>
          <h5 className='fw-bold'>{props.nama}</h5>
          <p>{props.platform}</p>
        </div>
      </div>
    </Card>
  )
}

export default Testimonial