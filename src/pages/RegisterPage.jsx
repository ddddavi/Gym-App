import React from 'react'
import Nav from '../components/Nav.jsx'
import RegisterForm from '../components/RegisterForm.jsx'
import bgImg from "../images/chris-kendall-sJ6az6-T1u8-unsplash.jpg"

const RegisterPage = () => {
  return (
    <>
      <Nav/>

<div className='w-full h-screen relative'>

  <div className='fixed h-screen inset-0 bg-black opacity-75 z-10
overflow-hidden'></div>

  <img className='w-full h-screen md:h-fit fixed object-cover z-0 blur-sm' src={bgImg}
  alt="Boxer"></img>

  <RegisterForm/>
  
  
</div>
  
    </>
  )
}

export default RegisterPage
