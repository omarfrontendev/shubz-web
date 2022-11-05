/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { FaRegClock, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import FooterLogo from '../images/footerlogowhite.png'
import Aos from "aos";

import "aos/dist/aos.css";
import './Footer.css'

const Footer = ({ type, links }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className='footer' id='social'>
      <div className="container">
        {links && <ul>
          {links.map((link, i)=> (
            <li className={`${type === 'TV/FILM' ? 'TVFILM' : type }`} key={link.id}><a data-aos="fade-up" data-aos-delay={`${i}00`} href={`#${link.section}`} rel="noreferrer">{link.text}</a></li>
          ))}
        </ul>}
        {type === 'home' && <img data-aos="fade-up" data-aos-delay='400' className='footer__logo' src={FooterLogo} alt='' />}
        {type !== 'home' && <h2 className={`footer__brand ${type === 'Photography' ? 'ph' : type === 'TV/FILM' ? 'tv' : ''}`} data-aos="fade-up" data-aos-delay='400'>
          <span>{type}</span>
        </h2>}
        <div className='footer__contact' data-aos="fade-up">
          <div>
            <div className="contact__title">
              <MdLocationOn className='c__icon' />Our Address
            </div>
            <div className="contact">
              <p>275, Herbert Macaulay way, Yaba Lagos.</p>
              <p>27/29J Line, Ewet Housing Estate, Uyo, Akwa Ibom.</p>
            </div>
          </div>
          <div>
            <div className="contact__title">
              <BsFillTelephoneFill className='c__icon' /> Contact Phones
            </div>
            <div className="contact">
              <a href='tel:+2349095177470'>+2349095177470</a>
              <a href='mailto:info@shubz.org'>info@shubz.org</a>
            </div>
          </div>
          <div>
            <div className="contact__title">
              <FaRegClock className='c__icon' /> Working Hours
            </div>
            <div className="contact">
              <p>Mon-Fri: 9:00 am - 5:00 pm</p>
              <p>Sat-Sun: 11:00 am - 16:00 pm</p>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <a className={`${type === 'TV/FILM' ? 'TVFILM' : type }`} href='https://web.facebook.com/shubzvisuals?_rdc=1&_rdr' target='_blank' rel="noreferrer"><FaFacebookF /></a>
          <a className={`${type === 'TV/FILM' ? 'TVFILM' : type }`} href='https://twitter.com/shubzvisuals' target='_blank' rel="noreferrer"><BsTwitter /></a>
          <a className={`${type === 'TV/FILM' ? 'TVFILM' : type }`} href='https://www.linkedin.com/company/shubz-entertainment/' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
          <a className={`${type === 'TV/FILM' ? 'TVFILM' : type }`} href='https://www.instagram.com/shubzvisuals/' target='_blank' rel="noreferrer"><FaInstagram /></a>
        </div>
        <p className='copy__rigth'>© 2022 SHUBZ Entertainment. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer