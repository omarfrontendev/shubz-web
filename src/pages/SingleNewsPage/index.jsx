import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/images/headerlogowhite.png'
import Calendar from 'react-calendar'

import './SingleNewsPage.css'

const SingleNewsPage = ({ news }) => {

  const details = [
    {
      title: 'Tags',
      details: ['Development', 'Mastering', 'Mixing', 'Music', 'Podcast', 'Producer', 'Studio', 'Test 02', 'Test01']
    },
    {
      title: 'Categories',
      details: ['Audios', 'Freelance', 'Links', 'Mobile', 'Quotes', 'Resources', 'Status']
    }
  ];
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const params = useParams('NewsID');

  let currentNews;
  // eslint-disable-next-line array-callback-return
  news.map(n => {
    if(n.id === +params.NewsID) {
      currentNews = n;
    }
  })

  if(!currentNews) {
    return (
      <div className='home__page'>
        <Header 
          page='home' 
          logo={Logo}
        />
          <div className="container">
            <div className="single__news__page">
              <p className='not__fount'>Not Found!</p>
                <Link className='not__fount' to='/'>Back To Home</Link>
            </div>
          </div>
        <Footer type='home' />
      </div>
    )
  }

  return (
    <div className='home__page single__news__page'>
      <Header 
        page='home' 
        logo={Logo}
      />
      <div className='hero__single__news__page'>
        <div className="container">
          <div className='hero__single__news__content'>
            <h2>Blog Post</h2>
            <p>Home - {currentNews.title}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="single__news__page__content">
          <div className="news__left__col">
            <div className="single__news__image">
              <img src={'https://voicer.softali.net/wordpress/voicer/wp-content/uploads/2019/05/blog1-1.jpg'} alt="" />
            </div>
            <div className="single__news__header">
              <div className="single__news__date">{currentNews.date}</div>
              <span>Admin<span>3 comments</span></span>
            </div>
            <div className='signe__news__details'>
              <h4>{currentNews.title}</h4>
              <p>This week I want to answer a question that has come up a few times recently and that is what type of computer do I use, what are the specs and what to consider when making an upgrade.</p>
              <h5>Find your recording space</h5>
              <p>It may seem obvious, but picking a suitable location is critical for setting up a recording studio. Before you start recording, you’ll want to make sure it’s somewhere you feel comfortable, is convenient, and is easily accessible.</p>
            </div>
            <div className='singke__news__details__image'>
              <img src="https://voicer.softali.net/wordpress/voicer/wp-content/uploads/2019/05/single-post-img-1.jpg" alt="" />
              <div>
                <p>Give yourself more space than you think you need, as this can allow for room to acquire new equipment. If your recording studio is in your home or at work, try to use interior rooms because there is less risk of outside noise entering the room.</p>
                <p>Now that you’ve found your recording space, test out the acoustics. Sound bounces off walls, so you may not be happy with how the final sound is in your recorded video. However, you can easily adjust your acoustics by diffusing the sound be done by simply filling the room with furniture such as a sofa, bean bag chair, or pillows.</p>
              </div>
            </div>
            <p>The benefits are clear: you mix faster, use fewer plugins, free up computer power, get a more natural sound and have more confidence along the way. Today I’m showing you how to use the concept of Top Down Mixing with the stock plugins that come with PreSonus Studio One.</p>
            <hr className='line'/>
            <div className='tages__container'>
              {details.map(d => (
                <div className='tage__box' key={d.title}>
                  <h3>{d.title}:</h3>
                  <div className='box__buttons'>
                    {d.details.map((button, i) => (
                    <button key={i}>{button}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="news__rigth__col">
            <h3 className='news__category__title'>Categories</h3>
            <ul>
              {details[1].details.map((c, i) => (
                <li key={i} className='single__category'>
                  {c}
                </li>
              ))}
            </ul>
            <h3 className='news__category__title'>Archives</h3>
            <div className='calendar'>
              <Calendar defaultValue={new Date(2017, 0, 1)} />
            </div>
            <h3 className='news__category__title'>Popular tags</h3>
            <div className='box__buttons'>
              {details[0].details.map((button, i) => (
                <button key={i}>{button}</button>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer type='home' />
    </div>
  )
}

export default SingleNewsPage