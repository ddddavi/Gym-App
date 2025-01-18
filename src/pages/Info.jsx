import React from 'react'
import Nav from '../components/Nav.jsx'
import InfoCard from '../components/InfoCard.jsx'
import bgLezioni from '../images/orari_bg.jpg'
import bgCoaching from '../images/coaching_bg.jpg'
import bgAbbonamento from '../images/abbonamento_bg.jpg'

const Info = () => {
  return (
    <>
      <Nav/>

      <div className='fixed h-screen inset-0 bg-black opacity-90 z-10
      overflow-hidden'></div>

      <h1 className='uppercase text-2xl block
      md:hidden text-white z-20'>I nostri servizi</h1>

      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 
      md:top-1/2 md:-translate-y-1/2
      z-20 flex flex-col items-center md:flex-row gap-10 
      justify-center md:w-[1200px] w-full px-5 mt-8">

      <h1 className='uppercase text-2xl block
      md:hidden text-white z-20 mt-3'>I nostri servizi</h1>
      
        <InfoCard
          title="Lezioni"
          img={bgLezioni}
          description="Dal lunedì al venerdì, orari 18:30-19:30 e 19:45-21:00.
          Non siamo aperti nei giorni di festività."
        />
      
        <InfoCard
          title="Coaching"
          img={bgCoaching}
          description="Istruttori preparati, con anni di esperienza, pronti
          a seguirti in ogni allenamento. "/>
        
        <InfoCard
          title="Abbonamento"
          img={bgAbbonamento}
          description="L'abbonamento è di tipo mensile, al costo di €60
          al mese. È possible effettuare una lezione di prova."/>
      </div>  
      
    </>
  )
}

export default Info
