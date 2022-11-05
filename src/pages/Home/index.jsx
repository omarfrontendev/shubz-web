import React, { useEffect } from 'react'
import { useState } from 'react'
import Categories from '../../components/Categories'
import Clients from '../../components/Clients'
import DigitalMedia from '../../components/DigitalMedia'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/images/headerlogowhite.png'
import MainHero from '../../components/MainHero'
import OtherServices from '../../components/OtherServices'
import PhotographyBlogs from '../../components/PhotographyBlogs'
import PhotographyTeam from '../../components/PhotographyTeam'
import Wanted from '../../components/Wanted'
import WhyUs from '../../components/WhyUs'
import LoadingPage from '../LoadingPage'

import './Home.css'

const Home = ({ news }) => {

  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [offsetTop, setOffsetTop] = useState(null);
  const [isLoading, setIslLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIslLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  useEffect(() => {
    if(currentSectionId !== null) {
      window.scrollTo({
        top: offsetTop,
      })
    }
  }, [currentSectionId, offsetTop]);

  const links = [
    {
      id: 2,
      text: 'Why Us',
      section: 'WhyUs-section'
    },
    {
      id: 3,
      text: 'Our Clients',
      section: 'clients'
    },
    {
      id: 5,
      text: 'Our Team',
      section: 'our-team'
    },
    {
      id: 6,
      text: 'Blogs',
      section: 'news'
    },
  ];

  if(isLoading) {
    return <LoadingPage />
  };

  return (
    <div className='home__page'>
      <Header
        page='home'
        logo={Logo}
        links={links}
        booking={{ text: 'Contact Us', endpoint: '/contact-us' }}
        setCurrentSectionId={setCurrentSectionId}
      />
      <MainHero />
      <Categories id='categories-section' />
      <WhyUs 
        id={2} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
      />
      <OtherServices />
      <DigitalMedia id='our-categories' />
      <Clients 
        id={3} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
      />
      <Wanted />
      <PhotographyBlogs 
        id={6} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        data={news}
        type='news'
        title='Latest News' 
        subtitle='Find out about everything happening here at Voicer. Keep an eye out here for all of our upcoming events' 
      />
      <PhotographyTeam 
        id={5}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        type='home' 
      />
      <Footer type='home' links={links} />
    </div>
  )
}

export default Home