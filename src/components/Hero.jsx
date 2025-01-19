import React from 'react';
import VideoDesktop from "../videos/bg_hero.mp4";
import VideoMobile from '../videos/bg_hero_mobile.mp4'
import DiscoverBtn from './DiscoverBtn';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <div className="fixed h-screen inset-0 bg-black opacity-75 z-10
      overflow-hidden"></div>
      
      {/*video desktop*/ }
      <video className='hidden md:block
      w-full h-screen fixed object-cover z-0 blur-[4px]' 
        autoPlay loop muted>
            <source src={VideoDesktop} type='video/mp4'></source>
      </video>

      {/*video mobile*/}
      <div
        dangerouslySetInnerHTML={{
          __html:
            `<video className='block md:hidden w-full h-screen fixed object-cover
                z-0 blur-[4px]'
                autoplay loop muted>
                <source src={VideoMobile} type="video/mp4"></source>
            </video>
            `
        }}
        />
      

        <div className="relative z-20 flex flex-col gap-2 md:gap-6 items-center 
        justify-center h-screen">
        <h1 className='text-white text-center md:text-7xl text-3xl font-bold 
        uppercase tracking-tighter '>
          Mena,forte,sempre
        </h1>
        <Link to={'/info'}><DiscoverBtn/></Link>
      </div>

  
    </div>
  );
};

export default Hero
