/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsMusicNote, BsStack, BsThreeDots } from 'react-icons/bs'
import { IoMdPhotos } from 'react-icons/io'
import { HiVideoCamera } from 'react-icons/hi'
import { FaBox } from 'react-icons/fa'

import './DigitalMedia.css'

const DigitalMedia = ({ id }) => {
  return (
    <section className='digital__section' id={id}>
      <div className="container">
        <div className="digital__content">
          <h2 className="section__title">
            Download <span>Creative</span> Digital Media Assets ?
          </h2>
          <div className="digital__btns">
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><BsMusicNote className='digital__icon' />royalty-free music</a>
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><BsStack className='digital__icon' />graphic templates</a>
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><FaBox />web templates</a>
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><IoMdPhotos className='digital__icon' />stock photos</a>
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><HiVideoCamera className='digital__icon' />stock videos</a>
            <a href='https://store.shubz.org/' target='_blank' rel="noreferrer"><BsThreeDots className='digital__icon' />browse all</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalMedia