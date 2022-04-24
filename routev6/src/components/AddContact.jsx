import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './addContact.css';
function AddContact({addContact}) {
    const navigate = useNavigate();
    const firstName = useRef();
    const lastName = useRef('');
    const email = useRef('');
    const phone = useRef('');
    const filler = (e)=>{
        e.preventDefault();
        addContact({
            fname: firstName.current.value,
            lname: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value});
        navigate.push('/');
    }
    return (
        <React.Fragment>
            <div className="container">
                <h1>Add Contact</h1>
                <form id='detail-form'>
                    <div className="form-ele">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" ref={firstName} id='firstName' placeholder="First Name" />
                    </div>
                    <br />
                    <div className="form-ele">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" ref={lastName} id='lastName' placeholder="Last Name" />
                    </div>
                    <br />
                    <div className="form-ele">
                        <label htmlFor="number">Phone Number</label>
                        <input type="number" ref={phone} id='number'  placeholder="Phone Number" />
                    </div>
                    <br />
                    <div className="form-ele">
                        <label htmlFor="email">Email</label>
                        <input type="text" ref={email} id='email' placeholder="Email" />
                    </div>
                    <br />
                    <div className="form-ele">
                            <button type="submit" onClick={filler}>Add Contact</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AddContact