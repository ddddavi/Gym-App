import React from 'react';
import { useState }  from 'react';
import { Link } from 'react-router-dom';
import LoginBtn from './LoginBtn';
import RegisterBtn from './RegisterBtn';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div className='w-full h-20 absolute z-30'>
      <div className="flex items-center justify-between w-full h-full px-5">
        
        
          <FontAwesomeIcon onClick={() => handleOpen()}
            icon={faHandFist} 
            size='4x' 
            color='#ff6b6b'
          />
      
        
        {/*desktop nav*/}
        <div className='hidden md:flex items-center gap-6 text-xl 
        uppercase text-white tracking-tighter'>
          <Link to={'/'}>Home</Link>
          <Link to={'/info'}>Info Palestra</Link>
          <Link to={'/contatti'}>Contatti</Link>
          <Link to={'/login'}><LoginBtn /></Link>
          <Link to={'/register'}><RegisterBtn /></Link>
        </div>

        {/*mobile nav*/}
        <div className={`block md:hidden fixed top-0 
          ${open ? 'right-0': '-right-full'}
        w-full h-screen bg-black bg-opacity-95 text-white uppercase
         text-xl 
        transition-all duration-300 overflow-hidden
        z-40`}>
          {open ? (
            <>
            <FontAwesomeIcon
            icon={faCircleXmark}
            size='2x' 
            color='#ff6b6b'
            className='absolute p-5'
            onClick={() => setOpen(!open)}
            />
            <div className='flex flex-col items-center gap-3
            absolute left-1/2 top-[40%] transform 
          -translate-x-1/2 -translate-y-1/2'>
            <Link to={'/'}>Home</Link>
            <Link to={'/info'}>Info Palestra</Link>
            <Link to={'/contatti'}>Contatti</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Registrati</Link>
            </div>
            </>
          ) : (<></>)}
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
