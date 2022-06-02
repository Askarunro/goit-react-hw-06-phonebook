import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useSelector } from "react-redux";

function App() {

  const contacts = useSelector((state) => state.items);

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
