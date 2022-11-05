import React, { useEffect, useRef } from 'react'
import Aos from "aos";
import { useNavigate } from 'react-router-dom';

import "aos/dist/aos.css";
import './PhotographyBlogs.css'

const PhotographyBlogs = ({ 
  id, 
  data, 
  subtitle, 
  title, 
  currentSectionId, 
  setOffsetTop, 
  type
}) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const section = useRef(null);
  const Navigate = useNavigate(); 

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(section.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);

  return (
    <section ref={section} className='photography__blogs' id={id}>
      <div className="container">
        <h2 data-aos="fade-up" className="section__title ph">{title}</h2>
        {subtitle && <p data-aos="fade-up" className='section__subtitle'>{subtitle}</p>}
        <div className="blogs__container">
          {data.map((b, i) => (
            <div 
              key={b.id}
              className='blog__box'
              style={{
                cursor: type === 'news' ? 'pointer' :''
              }}
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
              onClick={() => type === 'news' ? Navigate(`/news/${b.id}`) : ''}
            >
              <div>
                <img src={b.img} alt="" />
              </div>
              <h3><span>{b.title}</span></h3>
              <p className='news__desc'>{b.desc}</p>
              <span>{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyBlogs