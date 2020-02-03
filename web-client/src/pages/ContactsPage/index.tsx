import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Contact from '../../models/Contact';
import ContactForm from '../../components/ContactForm';
import List from '../../components/List';
import ContactCard from '../../components/ContactCard';
import { IApiService } from '../../services/ApiService';
import './styles.css'

type propsType = {
    apiService: IApiService;
};

const ContactPage: React.FC<propsType> = ({ apiService }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const history = useHistory();

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

    const editContact = (contact: Contact): void => {
        history.push(`/edit/${contact.id}`);
    };

    return (
        <div className="contacts-page">
            <ContactForm onSubmit={addContact} />
            <main>
                <List
                    source={contacts}
                    itemTemplate={(contact: Contact) => (
                        <ContactCard
                            contact={contact}
                            deleteCommand={deleteContact}
                            editCommand={editContact}
                        />
                    )}
                    keyExpression={contact => contact.id}
                />
            </main>
        </div>
    );
};

export default ContactPage;
