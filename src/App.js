import "./App.css";
// import { nanoid } from "nanoid";
// import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useSelector} from "react-redux";
// import { add } from "..//src/redux/slice/items";



function App() {
  // const dispatch = useDispatch();

  const contacts = useSelector((state) => state.items);

  // useEffect(() => {
  //   if (localStorage.getItem("contacts").length!==-1) {
  //     const cont = localStorage.getItem("contacts");
  //     const parsedContacts = JSON.parse(cont);
  //     console.log(parsedContacts)
  //     return dispatch(add(parsedContacts))
  //   }
  //   return
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  //   console.log('hi')
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
