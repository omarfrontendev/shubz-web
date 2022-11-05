import React from 'react'
import Slider from "react-slick";
import HeroContent from '../HeroContent';
import TVCommercials from '../TVCommercials';
import AudioPlayer from '../AudioPlayer';
import Wave from '../audios/tracks/NEW.wav';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'

const HeroSection = ({ data, page, to }) => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: `hero__slick ${page === 'photography' ? 'ph' : page === 'tv' ? 'tv' : '' }`,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className={`hero__sectoin ${page}`}>
        <Slider {...settings}>
          {page !== 'tv' && data?.map(d => (
            <HeroContent
              key={d.id} 
              page={page}
              title={d.title}
              title2={d.title2}
              subtitle={d.subtitle}
              img={d.img}
              to={to}
            />
          ))}
          {page === 'tv' && data.map(d => (
            <TVCommercials 
              key={d.id}
              page={page}
              image={d.img}
              name={d.name}
              rating={d.rating}
              date={d.date}
              duration={d.duration}
              category={d.category}
              description={d.desc}
            />
          ))}
        </Slider>
        {page === 'audio' && (
          <div className='audio__player__box'>
            <div className="container">
              <AudioPlayer audio={Wave} />
            </div>
          </div>
        )}
    </section>
  )
}

export default HeroSection