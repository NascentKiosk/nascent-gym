import React from 'react'
import { Header } from '../header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import {motion} from 'framer-motion'


export const Hero = () => {
  const transition = {type: 'string', duration : 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header />
        {/* the add  */}
            <div className='the-best-ad'>
              <motion.div
              initial={{left: mobile? '178px' : '238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition, type:'tween'}}
              ></motion.div>
              <div></div>
              <span>The best fitness club Norrköping</span>
            </div>
          {/* Hero Heading */}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Join </span>
                <span className='divide'>the</span>
              </div>
              <div>
                <span className='divide'>Re</span>
                <span className='new-text'>bell</span>
                <span className='divide'>ution</span>
              </div>
              <div className = 'sub-text'><span>We help you shape and build your ideal body</span></div>
            </div>
            {/* figures */}
            <div className='figures'>
              <div>
                <span>+10</span>
                <span>expert coaches</span>
              </div>
              <div>
                <span>+510</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+10</span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-button">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className='right-h'>
          <button className="button">Join Now</button>

          <motion.div 
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>112 bpm</span>
          </motion.div>
          {/* Hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
          {/* calories */}
          <motion.div 
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
           className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span><span>200 kcal</span>
            </div>
            
          </motion.div>
        </div>
    </div>
  )
}
