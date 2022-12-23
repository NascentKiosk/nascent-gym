import React from 'react'
import './Plans.css'
import{plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
export const Plans = () => {
  return (
    <div className="plans-container">
        
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='middle'>ready to start</span>
            <span className='stroke-text'>your journey</span>
            <span className='middle'>now with us</span>
        </div>
        {/* plans */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>Kr. {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    {/* see more */}
                    <div>
                        <span>see more benefits -></span>
                    </div>
                    <div>
                        <button className="btn">Join Now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}
