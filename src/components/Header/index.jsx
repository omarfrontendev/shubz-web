/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { CartIcon } from '../UI/icons'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = ({ page, logo, links, to, booking, setCurrentSectionId }) => {

  const [open, setOpen] = useState(false);
  const onCurrentSectionId = (id) => {
    setCurrentSectionId(id);
    setOpen(false);
    setTimeout(() => {
      setCurrentSectionId(null);
    }, 1000);
  }

  return (
    <header className={`${page} ${!open ? 'backdrop' : ''}`}>
      <div className="container">
        <nav className={`main__header ${page}`}>
          <div className="logo">
            <Link to={to || '/shubz'}>
              <img src={logo || ''} alt="LOGO" />
            </Link>
          </div>
          <ul className={`linkes ${open ? 'opened' : ''}`}>
            <button className='close__btn' onClick={() => setOpen(false)}><AiOutlineClose /></button>
            {page !== 'home' && (<li className={`link ${page}`}>
              <Link to='/shubz'>Home</Link>
            </li>)}
            {links && links.map(link => (
              <li className={`link ${page}`} key={link.id}>
                <button onClick={() => {onCurrentSectionId(link.id)}}>{link.text}</button>
              </li>))}
            {booking && <li className={`link ${page}`}>
              <Link to={booking.endpoint || '/contact-us'} href={`#social`}>{booking.text}</Link>
            </li>}
            <li className={`link car__icon ${page}`}>
              <a href="https://store.shubz.org/" target='_blank' rel="noreferrer"><CartIcon /></a>
            </li>
          </ul>
          <a className='open__btn' onClick={() => setOpen(true)}>
            <HiMenu />
          </a>
        </nav>
      </div>
   </header> 
  )
}

export default Header