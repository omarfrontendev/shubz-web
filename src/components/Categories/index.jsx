import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../images/audwhite.png'
import Logo2 from '../images/photogwhite.png'
import Logo3 from '../images/tvwhite.png'
import Button from '../UI/Button'

import './Categories.css'

const Categories = ({ id }) => {
  return (
    <section id={id} className='categories__section'>
      <div className="container">
        <h3 className='categories__subtitle'>HOW TO DO BUSINESS WITH US</h3>
        <h2 className='categories__title'><span>EVERYTHING YOU NEED TO GET CREATIVE DIGITAL MEDIA PROJECTS DONE.</span></h2>
        <div className='categories__content'>
          <Link to='/audio-page'>
            <img src={Logo1} alt="" />
            <Button to='/audio-page'>Go To Audio Studio</Button>
          </Link>
          <Link to='/photography-page'>
            <img src={Logo2} alt="" />
            <Button to='/photography-page' page='photography'>Go To Photography Studio</Button>
          </Link>
          <Link to='/filming'>
            <img src={Logo3} alt="" />
            <Button to='/filming' page='filming'>Go To TV/Film Studio</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories