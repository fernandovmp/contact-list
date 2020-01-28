import React from 'react';
import Contact from '../../models/Contact';
import './styles.css'

type propsType = {
    contact: Contact;
};

const ContactCard: React.FC<propsType> = ({ contact }) => {
    return (
      <div className="contact-card" >
        <strong className="name" >{contact.name}</strong>
        <p>{`Email: ${contact.email ?? '?'}`}</p>
        <p>{`Telefone: ${contact.phone ?? '?'}`}</p>
      </div>
    );
};

export default ContactCard;
