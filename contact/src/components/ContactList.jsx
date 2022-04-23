import React from 'react'
import ContactListElement from './ContactListElement'
function ContactList({contacts}) {
  return (
    <React.Fragment>
        {contacts.map((contact) =><ContactListElement {...contact}/>)};
        
   </React.Fragment>
  )
}

export default ContactList