import React from 'react'
import './contactList.css';
function ContactListElement({fname,lname,phone,email}) {
  return (
    <div className="lst">
            <h2>{fname+" "+lname}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
    </div>
  )
}

export default ContactListElement;