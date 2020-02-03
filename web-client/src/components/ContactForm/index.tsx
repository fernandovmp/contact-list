import React, { useState, useEffect } from 'react';
import Contact from '../../models/Contact';
import './styles.css';

type propsType = {
    contact?: Contact;
    onSubmit?: (contact: Contact) => void;
    submitButtonText: string;
};

const ContactForm: React.FC<propsType> = ({
    contact,
    onSubmit,
    submitButtonText
}) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    useEffect(() => {
        setName(contact?.name ?? '');
        setEmail(contact?.email ?? '');
        setPhone(contact?.phone ?? '');
    }, [contact]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const _contact = new Contact(contact?.id ?? '', name, email, phone);
        if (onSubmit != null) {
            onSubmit(_contact);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Nome:
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Telefone:
                <input value={phone} onChange={e => setPhone(e.target.value)} />
            </label>
            <button type="submit">{submitButtonText}</button>
        </form>
    );
};

export default ContactForm;
