import React from 'react'
import Nav from '../components/Nav.jsx'
import ContactForm from '../components/ContactForm.jsx'
import bgImgDesktop from '../images/johann-walter-bantz-Clv9DfJLwac-unsplash.jpg'
import bgImgMobile from '../images/gantas-vaiciulenas-Br3AsUklQEY-unsplash.jpg'

const Contatti = () => {
  return (
    <>
        <Nav/>

        <div className='w-full h-screen relative'>

        <div className='fixed h-screen inset-0 bg-black opacity-75 z-10
      overflow-hidden'></div>


        {/*desktop*/}
        <img className='hidden md:block md:w-full w-fit h-screen md:h-fit fixed object-cover z-0 blur-sm' src={bgImgDesktop}
        alt="Boxer"></img>

        {/*mobile*/}
        <img className='block md:hidden md:w-full w-fit h-screen md:h-fit 
        fixed object-cover z-0 blur-sm' src={bgImgMobile}
        alt="Boxer"></img>
        <ContactForm/>
        
      </div>
    </>
  )
}

export default Contatti
