import React from 'react';
import Contact from '../../models/Contact';
import { IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import './styles.css';
import { getColorFromRGBA } from 'office-ui-fabric-react';

type propsType = {
    contact: Contact;
    deleteCommand: (contact: Contact) => void;
    editCommand: (contact: Contact) => void;
};

const baseButtonStyle: IButtonStyles = {
    rootHovered: [
        {
            background: getColorFromRGBA({
                r: 255,
                b: 255,
                g: 255,
                a: 20
            }).str
        }
    ]
};

const deleteButtonStyle: IButtonStyles = {
    icon: [
        {
            color: '#ff0000'
        }
    ], ...baseButtonStyle
};

const editButtonStyle: IButtonStyles = {
    icon: [
        {
            color: '#4444dd'
        }
    ], ...baseButtonStyle
};

const ContactCard: React.FC<propsType> = ({ contact, deleteCommand, editCommand }) => {
    return (
        <div className="contact-card">
            <header className="contact-header">
                <strong className="name">{contact.name}</strong>
                <div>
                    <IconButton
                        iconProps={{ iconName: 'Edit' }}
                        styles={editButtonStyle}
                        onClick={e => editCommand(contact)}
                    />
                    <IconButton
                        iconProps={{ iconName: 'Delete' }}
                        styles={deleteButtonStyle}
                        onClick={e => deleteCommand(contact)}
                    />
                </div>
            </header>
            <p>{`Email: ${contact.email ?? '?'}`}</p>
            <p>{`Telefone: ${contact.phone ?? '?'}`}</p>
        </div>
    );
};

export default ContactCard;
