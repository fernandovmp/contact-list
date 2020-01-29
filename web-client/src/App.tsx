import React, { useEffect, useState } from "react";
import Contact from "./models/Contact";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { IApiService } from './services/ApiService';
import "./App.css";

type propsType = {
    apiService: IApiService;
}

const App: React.FC<propsType> = ({ apiService }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() : void => {
        const fetchContacts = async () : Promise<void> => {
            const responseContacts: Contact[] = await apiService.getAllContacts();
            setContacts(responseContacts);
        };
        fetchContacts();
    }, [apiService]);

    const addContact = async (contact: Contact): Promise<void> => {
        await apiService.createContact(contact);
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
