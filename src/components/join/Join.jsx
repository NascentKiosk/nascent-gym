import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

export const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ulk4cks', 'template_l0axk6i', form.current, 'YSy3KquKF_kScnpsaP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span className='middle'>level up</span>
            </div>
            <div>
                <span className='middle'>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter you Email Address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
