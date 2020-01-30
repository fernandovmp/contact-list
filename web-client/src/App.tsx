import React, { useEffect, useState } from 'react';
import Contact from './models/Contact';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import List from './components/List';
import { IApiService } from './services/ApiService';
import { initializeIcons } from 'office-ui-fabric-react';
import './App.css';

type propsType = {
    apiService: IApiService;
};

initializeIcons();

const App: React.FC<propsType> = ({ apiService }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect((): void => {
        const fetchContacts = async (): Promise<void> => {
            const responseContacts: Contact[] = await apiService.getAllContacts();
            setContacts(responseContacts);
        };
        fetchContacts();
    }, [apiService]);

    const addContact = async (contact: Contact): Promise<void> => {
        const responseContact = await apiService.createContact(contact);
        setContacts([...contacts, responseContact]);
    };

    const deleteContact = async (contact: Contact): Promise<void> => {
        await apiService.deleteContact(contact);
        setContacts(contacts.filter(c => c.id !== contact.id));
    };

    return (
        <div className="App">
            <ContactForm onSubmit={addContact} />
            <main>
                <List
                    source={contacts}
                    itemTemplate={(contact: Contact) => (
                        <ContactCard
                            contact={contact}
                            deleteCommand={deleteContact}
                        />
                    )}
                    keyExpression={contact => contact.id}
                />
            </main>
        </div>
    );
};

export default App;
