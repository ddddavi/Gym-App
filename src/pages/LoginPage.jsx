import React from 'react'
import Nav from '../components/Nav.jsx'
import bgLogin from '../images/login_bg.jpg'
import RegisterForm from '../components/RegisterForm.jsx'

const LoginPage = () => {
  return (
    <>

      <Nav/>

      <div className='w-full h-screen relative'>

        <div className='fixed h-screen inset-0 bg-black opacity-75 z-10
      overflow-hidden'></div>

        <img className='w-full h-screen md:h-fit fixed object-cover z-0 blur-sm' src={bgLogin}
        alt="Boxer"></img>

        <RegisterForm/>
        
      </div>
        

    </>
  )
}

export default LoginPage
