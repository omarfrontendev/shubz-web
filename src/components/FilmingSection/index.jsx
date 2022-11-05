import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import MovieCard from '../MovieCard'

const FilmingSection = ({ 
  videos, 
  title, 
  special, 
  currentSectionId, 
  setOffsetTop,
  id,
  dark
}) => {

  const section = useRef(null);

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(section.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);

  return (
    <section ref={section} className={`filming__section ${dark ? 'dark' : ''}`}>
    <div className="container">
      <h2 className='section__title tv'>{title} <span>{special}</span></h2>
      <div className="cards__container" data-aos="fade-up">
        {videos.map(m => (
          <MovieCard 
            key={m.id}
            video={m.src}
            name={m.name}
            rating={m.rating}
            date={m.date}
            category={m.category}
          />
        ))}
      </div>
      {/* <Button page='tv'>Show All Movies</Button> */}
    </div>
  </section> 
  )
}

export default FilmingSection