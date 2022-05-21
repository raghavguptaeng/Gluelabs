import React from 'react'
import ProfileImage from '../images/NetflixAvatar.png';
import '../style/profile.css';
import Logo from '../images/NetFlixLogo.png'

function ProfileSelector() {
  return (
    <div className='back'>
        <div className="Logo">
                <img src={Logo} alt='logo' />
            </div>
        <div className="profile-text">
            <h1>
                Who's watching?
            </h1>
        </div>
        <div className='profile-selector'>
            <div className="eachProfile">
                <img src={ProfileImage} alt="" />
                <h1>Raghav</h1>
            </div>
            <div className="eachProfile">
                <img src={ProfileImage} alt="" />
                <h1>Raghav</h1>
            </div>
            <div className="eachProfile">
                <img src={ProfileImage} alt="" />
                <h1>Raghav</h1>
            </div>
            <div className="eachProfile">
                <img src={ProfileImage} alt="" />
                <h1>Raghav</h1>
            </div>
        </div>
    </div>
  )
}

export default ProfileSelector;