import React from 'react'
import { Card } from 'react-bootstrap'
import style from './Deskripsi.module.css'

const Deskripsi = (props) => {
     return (
          <Card className='mt-4 shadow-sm'>
               <Card.Body>
                    <Card.Title>
                         Deskripsi
                    </Card.Title>
                    <Card.Text>
                         {props.deskripsi}
                    </Card.Text>
                    <div className={style.variant}>
                         <button className={[style.btn, style.kelor].join(" ")}>Kelor</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                         <button>AAAAA</button>
                    </div>
               </Card.Body>
          </Card>
     )
}

export default Deskripsi