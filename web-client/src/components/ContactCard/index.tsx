import React from 'react';
import Contact from '../../models/Contact';
import { IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import './styles.css';

type propsType = {
    contact: Contact;
    deleteCommand: (contact: Contact) => void;
};

const fabricButtonStyles: IButtonStyles = {
    icon: [
        {
            color: '#ff0000'
        }
    ]
};

const ContactCard: React.FC<propsType> = ({ contact, deleteCommand }) => {
    return (
        <div className="contact-card">
            <header className="contact-header">
                <strong className="name">{contact.name}</strong>
                <IconButton
                    iconProps={{ iconName: 'Delete' }}
                    styles={fabricButtonStyles}
                    onClick={e => deleteCommand(contact)}
                />
            </header>
            <p>{`Email: ${contact.email ?? '?'}`}</p>
            <p>{`Telefone: ${contact.phone ?? '?'}`}</p>
        </div>
    );
};

export default ContactCard;
