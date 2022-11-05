import React, { useEffect, useState, useRef } from 'react'
import Aos from "aos";
import { TbArrowsDiagonal } from 'react-icons/tb'
import MainSlider from '../MainSlider';

import "aos/dist/aos.css";
import './OurPhotographyWorks.css'

const OurPhotographyWorks = ({ id, title, images, subtitle, ph, currentSectionId, setOffsetTop }) => {

  const [all, setAll] = useState(false);
  const [openSlider, setOpenSider] = useState(false);
  const [img, setImage] = useState('');
  const section = useRef(null);
  
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(section.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);
 

  return (
    <>
      <section ref={section} className='photography__works__section' id={id}>
        <div className="ph__works__title" data-aos="fade-right">
          <h2 className="section__title ph">{title}</h2>
          <p className='ph__works__subtitle'>{ph ? ph : 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THEOCEAN'}.</p>
          {/* <Button page='photography'>VIEW ALL WORKS</Button> */}
        </div>
        <div style={{overflow: 'hidden'}}>
          <div className="works__imgs__container">
            {images.slice(0, `${all ? images.length : 6}`).map(w => (
              <div
                key={w.id}
                className='work__box'
                data-aos="fade-up"
                data-aos-delay={w.delay}
              >
                <img src={w.img} alt={subtitle + " Image"} loading='lazy' />
                <div>
                  <button onClick={() => {
                      setOpenSider(prev => !prev)
                      setImage(w.img)
                    }}
                  >
                    <TbArrowsDiagonal className='resize__icon' />
                  </button>
                  <h4>{subtitle}</h4>
                  {/* <span>{w.type}</span> */}
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setAll(prev => !prev)} 
            data-aos="fade-up" 
            data-aos-duration='600' 
            className='load__more__btn'
          >
            {all ? 'LESS' : 'LOAD MORE'}
          </button>
        </div>
      </section>
      {openSlider && <MainSlider img={img} setOpenSider={setOpenSider} />}
    </>
  )
}

export default OurPhotographyWorks;