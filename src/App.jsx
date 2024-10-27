import { nanoid } from "nanoid/non-secure";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import dataFromServer from "./dataFromServer.json";

function App() {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    const dataFromLS = localStorage.getItem("contact");
    if (dataFromLS) {
      return JSON.parse(dataFromLS);
    }
    return dataFromServer;
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };
  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((item) => item.id !== contactId));
  };

  const changeFilter = (evt) => {
    const inputValue = evt.target.value;
    setFilter(inputValue);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} changeFilter={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
