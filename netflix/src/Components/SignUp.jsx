import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../images/NetFlixLogo.png'
import tv from '../images/signUpAssets/tv.png'
import devices from '../images/signUpAssets/devices.png'
import kids from '../images/signUpAssets/kids.png'
import '../style/register.css'

function SignUp() {
  const navigate = useNavigate();
  const email = useRef('');
  const goBackToLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }
  const sections = [
    {
      key:1,
      title:'Enjoy on your TV.',
      description:'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      image:tv
    },
    {
      key:2,
      title:'Watch everywhere.',
      description:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and watch them anywhere, with no additional fees.',
      image:devices
    },
    {
      key:3,
      title:'Unlimited HD.',
      description:'With the power of Netflix, you can now enjoy HD content without limits.',
      image:kids
    }
  ]
  return (
    <div>
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
              <img src="signUpAssets/tv.png" alt="" />
              {
                sections.map((section) => {
                  console.log(section);
                  return(
                    <div className="sections" key={section.key}>  
                        <h1>{section.title}</h1>
                        <h3>{section.description}</h3>
                        <img src={section.image} alt={section.title} />
                    </div> 
                  )
                })
              }
      </div>
    </div>
  )
}

export default SignUp;