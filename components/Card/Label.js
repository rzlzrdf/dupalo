import React from 'react'
import { Button, Card } from 'react-bootstrap'
import style from './Label.module.css'

const Label = (props) => {
     return (
          <Card className={style.detail + ' shadow-sm mt-4'}>
               <Card.Body>
                    <div>
                         <Card.Title className='mb-2'>{props.judul}</Card.Title>
                         <Card.Title className={style.harga}>Rp. {' '} 
                              {new Intl.NumberFormat("id-ID", {
                                   currency: "IDR",
                              }).format(props.harga)}
                         </Card.Title>
                         <h6 className='text-muted mt-4'>Tersedia pada</h6>
                    </div>
                    <div className={style.wrap_btn}>
                         <Button variant='secondary' className={style.tokped}><img src='/tokopedia.svg' />Tokopedia</Button>
                         <Button variant='secondary' className={style.bukalapak}><img src='/bl.svg' />Bukalapak</Button>
                         <Button variant='secondary' className={style.shopee}><img src='/shopee.svg' />Shopee</Button>
                    </div>
               </Card.Body>
          </Card>
     )
}

export default Label