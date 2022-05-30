import "./App.css";
import { nanoid } from "nanoid";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  clientId = nanoid();
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = (data) => {

    let exist = false;
    this.state.contacts.forEach((contact) => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        exist = true;
      }
    });
    if (!exist) {
      this.setState({
        contacts: [ ...this.state.contacts, data]}
      )
    } else alert(`${data.name} is already i contacts`);
  };

  onChangeInputFind = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

deleteContact = (contactId)=>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.name !== contactId)
  }))
}


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          // contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.onChangeInputFind} />
        {this.state.contacts.lenght !== 0 && (
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onClick={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
