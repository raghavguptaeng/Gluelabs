import React from 'react'
import { Link } from 'react-router-dom'
import ContactListElement from './ContactListElement'
import './ContactListMain.css';

function ContactList({contacts}) {
  return (
    <React.Fragment>
        <h1>Contact List</h1>
        <Link to='/add'>
            <button>Add Contact</button>
        </Link>
        {contacts.map((contact) =><ContactListElement key={contact.email} {...contact}/>)};
   </React.Fragment>
  )
}

export default ContactList