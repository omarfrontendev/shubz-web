/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Aos from "aos";
import { Link } from 'react-router-dom';

import "aos/dist/aos.css";
import 'react-circular-progressbar/dist/styles.css';
import './TVCommercials.css'

const TVCommercials = ({
  image,
  name,
  description
}) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='commercials__content' style={{backgroundImage: `url(${image})`}}
    >
      <div className="container">
        <div className="content" data-aos="fade-right">
          <span className='commercial__subtitle'>NEW RELEASES</span>
          <h2 className='commercial__name'>{name}</h2>
          <p>{description}</p>
          <Link to="/contact-us">book a session</Link>
        </div>
      </div>
    </div>
  )
}

export default TVCommercials