import React from 'react'
import ProfileImage from '../images/NetflixAvatar.png';
import '../style/profile.css';
import Logo from '../images/NetFlixLogo.png'
import { useNavigate } from 'react-router-dom';


function ProfileSelector() {
    const navigate = useNavigate(); 
    const goToHome = () => {
        navigate('/home');
    }
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
            <div className="eachProfile" onClick={goToHome}>
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