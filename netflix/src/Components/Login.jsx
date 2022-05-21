import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../images/NetFlixLogo.png'
import '../style/login.css'


function Login() {
    const submitRef = React.useRef(null);
    const emailRef = React.useRef('');
    const passwordRef = React.useRef('');
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value);
    }
    const goToSignUp = () => {
        navigate('/register');
    }
    return (
        <div className='LoginMain'>
            <div className="Logo">
                <img src={Logo} alt='logo' />
            </div>
            <div className='Login'>
                <h1>Sign In</h1>
                <form action="/">
                <div className="LoginForm">
                    <div className="inputFields">
                        <input type="text" ref={emailRef} placeholder='Email' name='username'/>
                    </div>
                    <div className="inputFields">
                        <input type="password" ref={passwordRef} placeholder='Password' name="password" id="" />
                    </div>
                    <button className='signIn' onClick={handleSignIn} ref={submitRef}>Sign In</button>
                </div>
                </form>
                <h3>Not a Member Yet ? <span onClick={goToSignUp}>Register Now</span></h3>
            </div>
        </div>
    )
}

export default Login;