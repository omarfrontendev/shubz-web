import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = ({ children, type, page, to }) => {
  return (
    <Link to={ to || '/'} type={type || ''} className={`main__button ${page === 'photography' ? 'ph' : page === 'filming' ? 'tv' : ''} ${page}`}>
      {children}
    </Link>
  )
}

export default Button