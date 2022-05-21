import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../images/NetFlixLogo.png'
import '../style/register.css'

function SignUp() {
  const navigate = useNavigate();
  const email = useRef('');
  const goBackToLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='RegisterMain'>
            <div className="Logo">
                <img src={Logo} alt='logo' />
                <button onClick={goBackToLogin}>Sign In</button>
            </div>
            <div className="body-card">
              <div className="text">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
              </div>
              <div className="getInfo">
                <input type="email" name="" placeholder='Enter Email' id="" />
                <button>Get Started</button>
              </div>
            </div>
    </div>
  )
}

export default SignUp;