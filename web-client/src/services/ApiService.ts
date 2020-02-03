import Contact from '../models/Contact';

export interface IApiService {
    getAllContacts: () => Promise<Contact[]>;
    getContact: (id: string) => Promise<Contact>;
    createContact: (contact: Contact) => Promise<Contact>;
    updateContact: (contact: Contact) => Promise<Contact>;
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

    async getContact(id: string): Promise<Contact> {
        const response = await fetch(`${this.baseUrl}/api/contacts/${id}`);
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

    async updateContact(contact: Contact): Promise<Contact> {
        const response = await fetch(`${this.baseUrl}/api/contacts/${contact.id}`, {
            method: 'PUT',
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
            method: 'DELETE'
        });
    }
}
