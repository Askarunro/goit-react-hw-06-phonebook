import "./App.css";
// import { nanoid } from "nanoid";
import { useState, useEffect, useReducer } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("contacts") !== null) {
      const cont = localStorage.getItem("contacts");
      const parsedContacts = JSON.parse(cont);
      setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    let exist = false;
    contacts.forEach((contact) => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        exist = true;
      }
    });
    if (!exist) {
      setContacts([...contacts, data]);
    } else alert(`${data.name} is already i contacts`);
  };

  const onChangeInputFind = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.name !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={onChangeInputFind} />
      {contacts.lenght !== 0 && (
        <ContactList
          contacts={contacts}
          filter={filter}
          onClick={deleteContact}
        />
      )}
    </div>
  );
}

export default App;
