import Contact from '../models/Contact';

export interface IApiService {
    getAllContacts: () => Promise<Contact[]>;
    createContact: (contact: Contact) => Promise<Contact>;
    deleteContact: (contact: Contact) => Promise<void>;
}

export class ApiService implements IApiService {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getAllContacts(): Promise<Contact[]> {
        const response = await fetch(`${this.baseUrl}/api/contacts`);
        return response.json();
    }
    async createContact(contact: Contact): Promise<Contact> {
        const response = await fetch(`${this.baseUrl}/api/contacts`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        return response.json();
    }
    async deleteContact(contact: Contact): Promise<void> {
        await fetch(`${this.baseUrl}/api/contacts/${contact.id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}
