/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Slider from "react-slick";
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { useRef } from 'react';
import Aos from "aos";

import "aos/dist/aos.css";
import './PhotographyTeam.css'

const PhotographyTeam = ({ id, type, currentSectionId, setOffsetTop }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const section = useRef(null);

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(section.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "60px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const team = [
    {
      id: 1,
      img: 'https://i1.wp.com/shubz.org/wp-content/uploads/2019/03/Uti-1.png?w=384&ssl=1',
      name: 'Uti Peace',
      job: 'WRITER | MUSIC ARTISTE',
      desc: 'Passionate young lady whose heart and hands present her as a perfect word smith. Spoken Words/Poetry, Fiction writing and Song writing are her areas of specialty.',
      facebook: 'https://web.facebook.com/utty.pwetty',
    },
    {
      id: 2,
      img: 'https://i2.wp.com/shubz.org/wp-content/uploads/2019/03/Ogolo.jpg?w=568&ssl=1',
      name: 'Abraham Gift',
      job: 'PRODUCTION MANAGER',
      desc: 'popularly known as Ogolo Concept is a Nollywood Props and Set Designer (CDGN) also a Production Manager.',
      facebook: 'https://web.facebook.com/giftogolos'
    },
    {
      id: 3,
      img: 'https://i1.wp.com/shubz.org/wp-content/uploads/2019/02/Lydia.jpg?w=716&ssl=1',
      name: 'Lydia Iwegbue',
      job: 'STRATEGY & PLANNING',
      desc: 'Multi talented lady who can professionally script any ideas, concepts and stories into papers. Either for commercial video adverts, documentaries or that feature film you even dream of making',
      facebook: 'https://shubz.org/crew/#'
    },
    {
      id: 4,
      img: 'https://i2.wp.com/shubz.org/wp-content/uploads/2019/03/Ella.png?w=480&ssl=1',
      name: 'Nwaneto Ella',
      job: 'PROFESSIONAL ACTOR | MODEL',
      desc: "a professional actor and model, I'm based in Nigeria with experience in stage & screen. Always looking for the next exciting creative opportunity.",
      facebook: 'https://web.facebook.com/emmanuella.nwaneto'
    },
    {
      id: 5,
      img: 'https://i2.wp.com/shubz.org/wp-content/uploads/2018/04/Majic-Manfred-copy-.jpg?resize=768%2C768&ssl=1',
      name: 'Majic Manfred',
      job: 'CREATIVE WRITER',
      desc: 'A Creative Writer (Screenwriter) and a Recording Artist (Songwriter). A Communication Arts (BROADCASTING), Majic  hails from Eastern Obolo Local Government Area of Akwa Ibom State.s',
      facebook: 'https://web.facebook.com/majic.gwunireama'
    },
    {
      id: 6,
      img: 'https://i0.wp.com/shubz.org/wp-content/uploads/2018/04/pp-1.jpg?w=640&ssl=1',
      name: 'Diamond Chukwuma',
      job: 'SCREENWRITER | ACTOR | MODEL',
      desc: 'A Lagos based screenwriter, poet, model and actress. passionate about gracing the TV screens as a child and been famous for a writing prowess...',
      facebook: 'https://web.facebook.com/akam.chiamakadiamond'
    },
    {
      id: 7,
      img: 'https://i1.wp.com/shubz.org/wp-content/uploads/2019/03/Kanzy.png?resize=768%2C755&ssl=1',
      name: 'Joseph Amos',
      job: 'ART DIRECTOR | SPOKEN WORD ARTIST',
      desc: 'Multi talented Kanzy Smith a.k.a KING OF THE LINES, as he’s popularly known, kept on grooming himself in the art and you can almost bet how flawless he is in the game now',
      facebook: 'https://web.facebook.com/profile.php?id=100006667081540'
    },
    {
      id: 8,
      img: 'https://i1.wp.com/shubz.org/wp-content/uploads/2018/04/51635294-5E21-4B04-B71E-412CD165B43B.jpeg?w=640&ssl=1',
      name: 'Victor Atakpa',
      job: 'PHOTOGRAPHER',
      desc: "I'm a creative photographer who loves the art of photography. I take my shot with great details, each frame and composition tells a story. Check out more of my portfolio on my social media’s I specialize more on portrait photography, wedding photography.",
      facebook: 'https://mobile.facebook.com/victoratakpa?_rdc=1&_rdr'
    },
  ]

  return (
    <section ref={section} className={`photography__team ${type === 'home' ? 'home' : ''}`} id={id}>
      <div className="container">
      <h2 data-aos="fade-up" className={`section__title ${type === 'audio' ? '' : 'ph'}`}>Meet Our Team</h2>
      <p data-aos="fade-up" className='team__ph__subtitle'>We are a team of talented, passionate, driven crew to deliver the best work.</p>
      </div>
      <div className="team__ph__slider">
        <Slider {...settings}>
          {team.map((t, i) => (
            <div 
              className='single__team__ph__box' 
              key={t.id} 
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              <img src={t.img} alt='' />
              <div className="single__team__data">
                <h5>{t.name}</h5>
                <h6>{t.job}</h6>
                <p className='single__team__desc'>{t.desc}</p>
                <div className="team__links">
                  <a href={t.facebook} target='_blank' rel="noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="#" target='_blank'>
                    <FaLinkedinIn />
                  </a>
                  <a href="#" target='_blank'>
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default PhotographyTeam;