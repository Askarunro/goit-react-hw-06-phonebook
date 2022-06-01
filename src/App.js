import "./App.css";
// import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.items);
console.log(contacts)
  // useEffect(() => {
  //   if (localStorage.getItem("contacts") !== null) {
  //     const cont = localStorage.getItem("contacts");
  //     const parsedContacts = JSON.parse(cont);
  //     setContacts([...parsedContacts]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      
    </div>
  );
}

export default App;
