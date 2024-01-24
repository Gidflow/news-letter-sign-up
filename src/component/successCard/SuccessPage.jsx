import React from 'react'
import "./Success.css";
import icon from "../../assets/assets/images/icon-success.svg"


const SuccessPage = ({email, show, setShow}) => {
  return (
    <div className='success'>
        <div className="iconText">
        <div className="successIcon">
            <img src={icon} alt="icon" />
        </div>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{email}</b>. Please
            open it and click the button inside to confirm your subscription </p>
        </div>
       
            <button onClick={()=>setShow(prev=>!prev)}>Dismiss  message</button>
    </div>
  )
}

export default SuccessPage