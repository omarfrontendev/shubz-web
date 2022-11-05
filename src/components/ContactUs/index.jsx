import React, { useEffect } from 'react'
import Image from '../images/25.10.2022_02.03.20_REC.png'

import './ContactUs.css'

const ContactUs = ({ page, fileds, type }) => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <>
    <div className="container">
      <section className='contact__us'>
        <h2 className='section__title'>Contact Us</h2>
        <div className="contact__content">
          <div className="left">
            <img src={Image} alt="" />
          </div>
          <form onSubmit={e => e.preventDefault()} className={`contact__form ${type === 'contact__us' ? 'main__contact' : ''}`}>
            <div>
              {type === 'contact__us' && 
              <>
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <textarea placeholder='Your Message'/>
              </>}
              {type !== 'contact__us' && fileds.map(filed => {
                if(filed.id === 'select__box') {
                  return (
                      <div className='select__box' key={filed.label}>
                        <label htmlFor={filed.id}>{filed.label}</label>
                        <select id={filed.id} defaultValue={filed.options[0]}>
                          {filed.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    )
                  }else {
                    return (
                    <input key={filed.id} type={filed.type} placeholder={filed.placeholder}/>
                  )
                }
              })}
            </div>
            <button className='submit__btn' type='submit'>Send</button>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}

export default ContactUs