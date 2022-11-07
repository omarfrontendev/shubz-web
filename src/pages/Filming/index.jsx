import React ,{ useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import WeddingSection from '../../components/WeddingSection'
import Logo from '../../components/images/tvwhite.png'
import Video from '../../components/Video'
import Aos from "aos";
import Banner1 from '../../components/images/Photography/banner/musicvideo.jpg'
import Banner2 from '../../components/images/Photography/banner/3.jpg'
import Banner3 from '../../components/images/Photography/banner/videoproduction2.jpg'
import Pricing from '../../components/Pricing'
import FilmingSection from '../../components/FilmingSection'

import "aos/dist/aos.css";
import './Filming.css'

const Filming = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0);
  }, []);

  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [offsetTop, setOffsetTop] = useState(null);

  useEffect(() => {
    if(currentSectionId !== null) {
      window.scrollTo({
        top: offsetTop,
      })
    }
  }, [currentSectionId, offsetTop]);

  const movies = [
    {
      id: 1,
      img: Banner3,
      name: 'Wedding Filming',
      desc: 'Are You Engaged? Delight Your Weddings With the best photography + cinematography for brides and grooms'
    },
    {
      id: 2,
      img: Banner1,
      name: 'Music Video',
      desc: "HOW TO GET MORE AMAZING FANS WITH MUSIC VIDEO FOR MUSICIANS"
    },
    {
      id: 3,
      img: Banner2,
      name: 'Film Production',
      desc: 'TOP MOST AFRICAN TALENT FILM PRODUCTION, Watch best of African Art, Films, and TV Shows'
    },
  ];

  const music = [
    {
      id: 1,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/Na+So+-+Wyllz+master+HD.mkv',
      name: 'Na So - Wyllz master HD',
      rating: 7.1,
      type: 'Music Videos'
    },
    {
      id: 2,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/Utibe+Ima+-+Wyllz+master+HD.mkv',
      name: 'Utibe Ima - Wyllz master HD',
      rating: 7.1,
      type: 'Music Videos'
    },
    {
      id: 3,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/peace+final+mhd.mkv',
      name: 'peace final mhd',
      rating: 7.1,
      type: 'Music Videos'
    }
  ];

  const allMovies = [
    {
      id: 2,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/main+montage+new.mp4',
      name: 'Montage',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 3,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/You+are+watching+cor+1.mp4',
      name: 'UMO ENO TV',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 4,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/basumoh.mp4',
      name: 'Basumoh',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 5,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/blow+pos.mp4',
      name: 'Blow Pos',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 6,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/Ketiano.mp4',
      name: 'Ketiano',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 7,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/LATONNE+SIGNATURES.mp',
      name: 'LATONNE SIGNATURES',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 8,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/Westgate+fhd.mp4',
      name: 'Westgate fhd',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 9,
      src: 'https://bloggydjango.s3.amazonaws.com/videos/made+in+aks.mp4',
      name: 'made in aks',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
  ];

  const prices = [
    {
      id: 1,
      title: 'Basic',
      subtitle: 'Starter',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
    {
      id: 2,
      title: 'Standard',
      subtitle: 'Better results',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space'],
      popular: true
      
    },
    {
      id: 3,
      title: 'Premium',
      subtitle: 'Go all in one',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Weddings',
      section: 'wedding' 
    },
    {
      id: 2,
      text: 'Commercial',
      section: 'movies' 
    },
    {
      id: 3,
      text: 'Music',
      section: 'movies' 
    },
    {
      id: 4,
      text: 'Movies',
      section: 'music' 
    },
    {
      id: 5,
      text: 'Pricing',
      section: 'price-section' 
    },
  ];

  return (
    <div className='tv__page'>
      <Header 
        to='/filming' 
        page='tv' 
        logo={Logo} 
        links={headerLinks} 
        booking={{text: 'Booking', endpoint: '/booking-filming'}}
        setCurrentSectionId={setCurrentSectionId}
      />
      <HeroSection page='tv' data={movies} to='/booking-filming' />
      <WeddingSection 
        id={1} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
      />
      <FilmingSection 
        id={2} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
        videos={allMovies}
        title='Watch'
        special='Commercial'
        dark={true}
      />
      <FilmingSection 
        id={3} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
        videos={music}
        title='Listen And Watch'
        special='Music'
      />
      <FilmingSection 
        id={4} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
        videos={allMovies}
        title='Watch'
        special='Movies'
        dark={true}
      />
      <Video video='https://bloggydjango.s3.amazonaws.com/videos/THE+FISHER+MAN+MAKING_2.mkv' />
      <Pricing 
        id={5} 
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}
        prices={prices} 
        page='tv' 
       to='/booking-filming'
      />
      <Footer type='TV/FILM' links={headerLinks} />
    </div>
  )
}

export default Filming