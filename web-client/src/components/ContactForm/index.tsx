import React, { useState } from "react";
import Contact from "../../models/Contact";
import "./styles.css";

type propsType = {
    onSubmit?: (contact: Contact) => void;
};

const ContactForm: React.FC<propsType> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const contact = new Contact("", name, email, phone);
        if(onSubmit != null) {
            onSubmit(contact);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Nome:
                <input value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Email:
                <input value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Phone:
                <input value={phone} onChange={e => setPhone(e.target.value)}/>
            </label>
            <button type="submit">CADASTRAR</button>
        </form>
    );
};

export default ContactForm;
