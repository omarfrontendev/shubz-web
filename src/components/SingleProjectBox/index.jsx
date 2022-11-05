import React from 'react'

import './SingleProjectBox.css'

const SingleProjectBox = ({ name, img, audio }) => {
  return (
    <div className='single__project__box'>
      <div className='project__img__container'>
        <img className='project__img' src={img || ''} alt="" />
      </div>
      <span className='project__name'>{name}</span>
      <audio controls>
        <source src={audio} type='audio/mp3' />
      </audio>
    </div>
  )
}

export default SingleProjectBox;