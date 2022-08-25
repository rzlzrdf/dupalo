import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Testimonial.module.css'


const Testimonial = (props) => {
  return (
    <Card className={style.container + ' shadow-sm'}>
      <div className={style.gambar}>
        <Image src={'/quote.png'} alt='review' width={50} height={50} />
      </div>
      <div className={style.quote}>
        <h4 className='text-muted'>loremCupidatat tempor quis consectetur commodo.</h4>
      </div>
      <div className={style.profil}>
        <div>
          <Image src={'/man (1).png'} alt='review' width={50} height={50} />
        </div>
        <div>
          <h5 className='fw-bold'>Ramdhan</h5>
          <p>Tokopedia</p>
        </div>
      </div>
    </Card>
  )
}

export default Testimonial