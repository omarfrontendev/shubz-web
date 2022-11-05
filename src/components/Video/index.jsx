import React from 'react'

import './Video.css'

const Video = ({ video }) => {
  return (
    <section className='video__section'>
      <video src={video} controls />
    </section>
  )
}

export default Video