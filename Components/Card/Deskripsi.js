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
               </Card.Body>
          </Card>
     )
}

export default Deskripsi