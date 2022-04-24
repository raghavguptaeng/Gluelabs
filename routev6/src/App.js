import { useEffect,useState } from 'react';
import { Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
function App(props) {
  const [contacts, setContacts] = useState(()=>{
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem('contacts'));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[])

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    console.log(contact);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
