import React from 'react'
import style from './Landing.module.css'
import ninja from './assets/ninja.svg'
import group from './assets/Group.svg'
import filler from './assets/filler.svg'
import arrow from './assets/arrow.svg'
import num1 from './assets/01.svg'
import num2 from './assets/02.svg'
import num3 from './assets/03.svg'
import img from './assets/Img1.svg'
import codekaze from './assets/CodeKaze 1.svg'
import ninja2 from './assets/Ninja img.svg'
import {motion} from 'framer-motion'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Landing() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
        <div>
            <div className="mx-auto left-6 max-w-screen-lg overflow-hidden justify-center container pb-10 ">
                <img src={ninja} className="inset-0 object-cover mx-auto mt-10"  alt="Ninja"/>
                <img src={group} className="md:w-auto w-2/3 animate-spin animate-slow-spin absolute inset-0 object-cover mx-auto mt-20 top-7 md:mt-20 md:bottom-2 md:top-16 "  alt="Group"/>    
            </div>
        </div>

        {/* About */}
        <div className='bg-stone-800 bg-opacity-40'>
            <div className='md:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black md:text-left text-center md:ml-14 ml-5 font-extrabold md:mb-10 mb-5 md:pb-12 pb-2 md:pt-20 pt-10 mt-10'>ABOUT US</div>
            <div className='grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 pb-20'>
                <div className='text-white md:text-left text-center mx-2 md:pl-5 md:ml-7 pl-3 pr-3 md:text-2xl text-1 md:pb-20 mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus. Cras facilisis ullamcorper magna .
                Lorem ipsum dolor sit amet.
                </div>
                <div className='hidden md:block pl-20 pr-0'>
                    <img src={filler} className="md:w-2/3 ml-10 pb-5"/>
                </div>
            </div>
        </div>

        {/* Domains */}
        <div>
            <div className='md:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black md:text-left text-center md:ml-14 ml-5 font-extrabold md:mb-10 mb-5 md:pb-12 pb-2 md:pt-20 pt-10 mt-10'>DOMAINS</div>
        </div>
        <div className='grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 mt-20 mb-20'>
            {/* Technical */}
            <div>
                
                <div className='relative'>
                    <h3 className='text-orange-700 text-4xl font-light text-left ml-11 pt-20 pb-5'>Technical</h3>
                    <div className='absolute inset-0 justify-center '>
                        <img className="md:w-25 pl-5 md:h-25 md:pl-10" src={num1}/>
                    </div>
                </div>
                <p className='text-white text-left md:ml-12 md:pr-20 md:mr-10 md:pb-10 ml-12 mb-5 mr-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementumconsectetur adipiscing elit. Morbi elementum</p>
                <a href='/' className='flex pb-20'>
                    <div className='flex-none text-orange-700 text-left ml-12 mr-0 font-bold'>VIEW DETAILS</div>
                    <img className='flex-intial w-4 h-4 mt-1 ml-5' src={arrow}/>
                </a>
                
            </div>
            {/* image */}
            <div className='hidden md:block xl:ml-20 xl:pl-14 ml-10 pr-5'>
                <img className="lg:pl-10 pl-0" src={img}/>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 mt-20 mb-20'>
            {/* image */}
            <div className='hidden md:block xl:ml-1 xl:pl-1 ml-10 pr-5'>
                <img className="lg:pl-10 pl-0" src={img}/>
            </div>
             {/* Corporates */}
             <div>
                
                <div className='relative'>
                    <h3 className='text-orange-700 text-4xl font-light text-left ml-11 pt-20 pb-5'>Corporates</h3>
                    <div className='absolute inset-0 justify-center '>
                        <img className="md:w-25 pl-5 md:h-25 md:pl-10" src={num2}/>
                    </div>
                </div>
                <p className='text-white text-left md:ml-12 md:pr-20 md:mr-10 md:pb-10 ml-12 mb-5 mr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementumconsectetur adipiscing elit. Morbi elementum</p>
                <a href='/' className='flex pb-20'>
                    <div className='flex-none text-orange-700 text-left ml-12 mr-0 font-bold'>VIEW DETAILS</div>
                    <img className='flex-intial w-4 h-4 mt-1 ml-5' src={arrow}/>
                </a>
                
            </div>
            
            
        </div>
        <div className='grid grid-cols-1 gap-5 py-8 px-3 md:grid-cols-2 mt-20 mb-20'>
             {/* Creatives */}
             <div>
                
                <div className='relative'>
                    <h3 className='text-orange-700 text-4xl font-light text-left ml-11 pt-20 pb-5'>Creatives</h3>
                    <div className='absolute inset-0 justify-center '>
                        <img className="md:w-25 pl-5 md:h-25 md:pl-10" src={num3}/>
                    </div>
                </div>
                <p className='text-white text-left md:ml-12 md:pr-20 md:mr-10 md:pb-10 ml-12 mb-5 mr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum et ante ac fringilla. Pellentesque et felis metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementumconsectetur adipiscing elit. Morbi elementum</p>
                <a href='/' className='flex pb-20'>
                    <div className='flex-none text-orange-700 text-left ml-12 mr-0 font-bold'>VIEW DETAILS</div>
                    <img className='flex-intial w-4 h-4 mt-1 ml-5' src={arrow}/>
                </a>
                
            </div>
            {/* image */}
            <div className='hidden md:block xl:ml-20 xl:pl-14 ml-10 pr-5'>
                <img className="lg:pl-10 pl-0" src={img}/>
            </div>
        </div>

        {/* Events */}
        <div>
            <div className='md:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-black text-center font-extrabold md:mb-10 mb-5 pb-2 md:pt-20 pt-10 mt-10'>EVENTS</div>
        </div>
        <div className='justify-center pb-10'>
            <img src={line} className='w-22 h-22 mx-auto'/>
        </div>
        <div className='pb-10'>
            <div className='text-white text-center md:text-xl'>Know more about the upcoming <a href='/'><span className='text-orange-700'>Events</span></a></div>
        </div>
        <Carousel responsive={responsive} 
        className='md:flex bg-neutral-800 bg-opacity-40 pt-20 justify-center pb-20'
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        customTransition="all 10s linear"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={100}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={4000}>
            <motion.img 
            transition={{loop: Infinity}}
            animate={{
                rotate: [0, 0, 5,5, 0],
            }}
            src={codekaze} className='md:w-50 md:h-50 '/>
            <motion.img 
            transition={{loop: Infinity}}
            animate={{
                rotate: [0, 0, 5,5, 0],
            }}src={codekaze} className='md:w-50 md:h-50 ' />
            <motion.img 
            transition={{loop: Infinity}}
            animate={{
                rotate: [0, 0, 5,5, 0],
            }}src={codekaze} className='md:w-50 md:h-50 '/>
       
        </Carousel>
        

        <div className='justify-center md:mt-10 pt-20 pb-20 md:mb-10 px-20 '>
            <img src={ninja2} className="mx-auto"/>
        </div>
        </>
    )
}

export default Landing;
