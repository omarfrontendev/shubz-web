import React from 'react'
import { GiFilmSpool, GiMusicSpell } from 'react-icons/gi'
import { MdOutlineVideoSettings } from 'react-icons/md'

import './OtherServices.css'

const OtherServices = () => {
  return (
    <section className='our__services'>
      <div className="container">
        <h2 className='section__title'><span>Other Services</span></h2>
        <p className='section__subtitle'>If there's a story, we can shoot it. We capture your vision</p>
        <div className="other__servcies__content">
          <div className='box'>
            <GiFilmSpool className='box__icon' />
            <h3>FILM PRODUCTION</h3>
            <p>Our team comes with years of experience in shooting a variety of different films.From feature/short films, documentary, to minimalistic corporate ads.</p>
          </div>
          <div className='box'>
            <MdOutlineVideoSettings className='box__icon' />
            <h3>EVENT FILMING</h3>
            <p>From weddings to large events, conference, and corporate events, we film it. Whatever the event we turn it to a beautiful story.</p>
          </div>
          <div className='box'>
            <GiMusicSpell className='box__icon' />
            <h3>MUSIC VIDEO</h3>
            <p>Each song tells a story and we help that story come alive ensuring that your audience get to see the imagery behind the music.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherServices