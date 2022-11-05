import React from 'react'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/images/headerlogowhite.png'

const ContactUsPage = () => {

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
      options: ['Recording', 'Productions', 'Mixing', 'Engineering']
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
        page='home' 
        logo={Logo}
      />
      <ContactUs type='contact__us' fileds={fileds} />
      <Footer type='home' />
    </div>
  )
}

export default ContactUsPage