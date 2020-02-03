import React, { useEffect, useState } from 'react';
import {
    IconButton,
    getColorFromRGBA,
    IButtonStyles
} from 'office-ui-fabric-react';
import { useHistory, useParams } from 'react-router-dom';
import { IApiService } from '../../services/ApiService';
import ContactForm from '../../components/ContactForm';
import Contact from '../../models/Contact';
import './styles.css';

type propsType = {
    apiService: IApiService;
};

const backButtonStyle: IButtonStyles = {
    root: [
        {
            width: 40,
            height: 40
        }
    ],
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

const EditPage: React.FC<propsType> = ({ apiService }) => {
    const history = useHistory();
    const { id } = useParams();
    const [contactToEdit, setContactToEdit] = useState<Contact>();

    useEffect(() => {
        const fetchContact = async (): Promise<void> => {
            if (id) {
                const responseContact: Contact = await apiService.getContact(
                    id
                );
                setContactToEdit(responseContact);
            }
        };
        fetchContact();
    }, [apiService, id]);

    const onBackButtonClick = (): void => {
        if (history.length === 0) {
            history.push('/');
            return;
        }
        history.goBack();
    };

    const updateContact = async (contact: Contact): Promise<void> => {
        await apiService.updateContact(contact);
        onBackButtonClick();
    };

    return (
        <>
            <header id="edit-page-header">
                <IconButton
                    iconProps={{ iconName: 'Back' }}
                    styles={backButtonStyle}
                    onClick={e => onBackButtonClick()}
                />
            </header>
            <div className="edit-page">
                <ContactForm
                    contact={contactToEdit}
                    onSubmit={updateContact}
                    submitButtonText="ENVIAR"
                />
            </div>
        </>
    );
};

export default EditPage;
