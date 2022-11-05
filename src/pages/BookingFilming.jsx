import React from 'react'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/images/tvwhite.png'

const BookingFilming = () => {

  const fileds = [
    {
      id: 'first__name',
      placeholder: 'First Name',
      type: 'text'
    },
    {
      id: 'last__name',
      placeholder: 'Last Name',
      type: 'text'
    },
    {
      id: 'email',
      placeholder: 'Email',
      type: 'email'
    },
    {
      id: 'number',
      placeholder: 'Phone Number',
      type: 'number'
    },
    {
      id: 'address',
      placeholder: 'Address',
      type: 'text'
    },
    {
      id: 'date',
      placeholder: 'Date',
      type: 'date'
    },
    {
      id: 'select__box',
      label: 'Studio Service:',
      options: ['Weddings', 'TV Shows', 'Video Ads', 'Music Videos', 'Film Production']
    },
    {
      id: 'select__box',
      label: 'Time:',
      options: ['1 Hour', '2 Hour', '4 Hour', '6 Hour']
    },
  ];

  return (
    <div className='home__page'>
      <Header 
        to='/filming' 
        page='tv' 
        logo={Logo}
      />
      <ContactUs fileds={fileds} />
      <Footer type='TV/FILM' />
    </div>
  )
}

export default BookingFilming