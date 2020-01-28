import React, { useState } from "react";
import Contact from "./models/Contact";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const App: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const addContact = (contact: Contact): void => {
        setContacts([...contacts, contact]);
    };

    return (
        <div className="App">
            <ContactForm onSubmit={addContact} />
            <main>
              <ContactList contacts={contacts} />
            </main>
        </div>
    );
};

export default App;
