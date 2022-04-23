import { useEffect,useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
  },[contacts])

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    console.log(contact);
  }

  return (
    <div className="App">
      <AddContact addContactHandler={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
