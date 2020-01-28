import React from "react";
import ContactCard from "../ContactCard";
import Contact from "../../models/Contact";
import './styles.css';

type propsType = {
    contacts: Contact[];
};

const ContactList: React.FC<propsType> = ({ contacts }) => {
    if (contacts.length === 0) return <p>Lista Vazia</p>;

    return (
        <ul className="contact-list">
            {contacts.map(contact => (
                <li key={contact.id}>
                    <ContactCard contact={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
