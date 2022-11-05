import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

import './Wanted.css'

const Wanted = () => {
  return (
    <section className='wanted__section'>
      <div className="container">
        <h2 className='wanted__title'>Want to Record Your Own Hit?</h2>
        <p>We are a full service studio featuring the latest technology for our all your projects.</p>
        <a href="tel:+2349095177470"><BsFillTelephoneFill className='icon' />+2349095177470</a>
      </div>
    </section>
  )
}

export default Wanted