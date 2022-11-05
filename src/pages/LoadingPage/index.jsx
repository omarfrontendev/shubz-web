import React, { useEffect } from 'react'

import './LoadingPage.css'

const LoadingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    // <div className="loading__page">
    //   <div class="wrapper">
    //     <div class="circle"></div>
    //     <div class="circle"></div>
    //     <div class="circle"></div>
    //     <div class="shadow"></div>
    //     <div class="shadow"></div>
    //     <div class="shadow"></div>
    //     <span>Shubz</span>
    //   </div>
    // </div>
<div className='loading__page'>
  <section className="talign-center">
    {/* <div class="spinner spinner--steps icon-spinner" aria-hidden="true"></div> */}
    <div className="spinner icon-spinner-2" aria-hidden="true"></div>
    {/* <div class="spinner icon-spinner-3" aria-hidden="true"></div> */}
    {/* <div class="spinner icon-spinner-4" aria-hidden="true"></div> */}
    {/* <div class="spinner icon-spinner-5" aria-hidden="true"></div> */}
    {/* <div class="spinner icon-spinner-6" aria-hidden="true"></div> */}
  {/* <div class="spinner spinner--steps2 icon-spinner-7" aria-hidden="true"></div> */}
  </section>
</div>
  )
}

export default LoadingPage