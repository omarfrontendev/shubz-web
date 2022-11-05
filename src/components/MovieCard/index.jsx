import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './MovieCard.css'

const MovieCard = ({
  img,
  video,
  name,
  rating,
  type,
  music,
  date,
  category,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div className={`movie__card ${music ? '' : 'movie__type'}`}>
      <div style={{position: 'relative', width: '100%', height: '250px', overflow: 'hidden'}}>
        <div className='overlay'></div>
        <img src={img} alt="" />
        {video && <video src={video} alt="" controls />}
        {music && (
          <div className="quality">
            <span>{type}</span> <b>{rating}</b>              
          </div>
        )}
        {!music && (
          <div className='quality__rating'>
            <div className="quality">
              <span>Ultra HD</span> <b>4k</b>              
            </div>
            <div className="rating">
              <CircularProgressbar 
              value={rating} 
              maxValue={10} 
              text={`${rating}`}
              styles={{
                path: {
                  stroke: '#753B51',
                  strokeWidth: '10px',
                  borderRadius: '0px',
                  strokeLinecap: 'butt'
                },
                trail: {
                  stroke: '#ddd',
                  strokeWidth: '5px',
                },
                text: {
                  fill: '#ddd',
                  fontSize: '35px',
                  fontWeight: '600',
                  fontFamily: 'font-family: "Poppins",sans-serif'
                },
              }}
               />
            </div>
          </div>
        )}
      </div>
      <div className='card__details'>
        <span>{name}</span>
        {/* <span>{date || 2021}</span> */}
      </div>
      {category && <div className='category'>{category}</div>}
    </div>
  )
}

export default MovieCard