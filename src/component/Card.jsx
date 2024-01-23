import React, { useState } from 'react';
import "./Card.css";
import illustrationMobile from "../assets/assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/assets/images/illustration-sign-up-desktop.svg";
import list from "../assets/assets/images/icon-list.svg"



const Card = ({show, setShow, email, setEmail}) => {

    
    const [error, setError] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(email === ""){
            setError("valid email required")
            setShow(false)
        }

        else if(!pattern.test(email)){
            setError("valid email required")
            setShow(false)
        }
        else if(pattern.test(email) && email !== ""){
            setShow(true);
        }
    }
  return (
    <div className={`${show && "dislay-none"} card`}>
        <div className="mobileImage">
                   <img src={illustrationMobile} alt="icon" />
        </div>
        
        <div className="form-description">
            <div className="text">
                 <h1>Stay updated!</h1>
                 <p>Join 60,000+ product managers receiving monthly updates on:</p>
                 <div className='listImage'>
                    <div className='listItem'>
                        <div className='itemImage'>
                            <img src={list} alt="icon" />
                        </div>
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className='listItem'>
                        <div className='itemImage'>
                            <img src={list} alt="icon" />
                        </div>
                        <p>Measuring to ensure updates are success</p>
                    </div>
                    <div className='listItem'>
                        <div className='itemImage'>
                            <img src={list} alt="icon" />
                        </div>
                        <p>And much more</p>
                    </div>
                 </div>
            </div>
            <form onSubmit={handleSubmit} action="html">
              <div className="input">
              <label htmlFor="email"><span>Email address</span><span>{error && error}</span></label>
              <input type="email" name='email' placeholder='email@company.com' value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} />
              </div>
              <button type='submit'>Subscribe to monthly newsletter</button>
            </form>
        </div>
        <div className="image">
        <img src={illustrationDesktop} alt="icon" />
        </div>
       
    </div>
  )
}

export default Card