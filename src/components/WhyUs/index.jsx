import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

import './why_us.css'

export default function WhyUs({ setOffsetTop, id, currentSectionId }) {
  
  const WhyUsSection = useRef(null);

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(WhyUsSection.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);

  return (
    <section ref={WhyUsSection} className='why__us__section'>
      <div className="container">
        <div className="why__us__content">
          <div>
            <div className="why__us__content__text">
                <img src="https://voicer.softali.net/wordpress/voicer/wp-content/uploads/2019/05/studio-2.jpg" alt="" />
              </div>
              <div className="why__text">
                <h2 className='section__title'>We Are The <span>Best</span></h2>
                <p className='why__us__p'>With a team consisting of some of Nigeria's most talented filmmakers we capture your vision and turn it into a mind blowing film/video. Our experience in the exciting African film market, our team brings not only passion and talent, but also in-depth professional knowledge. </p>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}
