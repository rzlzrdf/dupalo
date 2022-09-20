import Image from 'next/image'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import style from './Label.module.css'
import Link from 'next/link'

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
                         <Link href={props.tokped}>
                              <Button variant='secondary' className={style.tokped}><Image alt='' width={20} height={20} src='/brand/tokopedia.svg' />Tokopedia</Button>
                         </Link>
                         <Link href={'props.bukalapak'}>
                              <Button variant='secondary' className={style.bukalapak}><Image alt='' width={20} height={20}  src='/brand/bl.svg' />Bukalapak</Button>
                         </Link>
                         <Link href={'props.shopee'}>
                              <Button variant='secondary' className={style.shopee}><Image alt='' width={20} height={20}  src='/brand/shopee.svg' />Shopee</Button>
                         </Link>
                    </div>
               </Card.Body>
          </Card>
     )
}

export default Label