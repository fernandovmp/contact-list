import Contact from '../models/Contact';

export interface IApiService {
    getAllContacts: ()  => Promise<Contact[]>;
    createContact: (contact: Contact) => Promise<void>;
}

export class ApiService implements IApiService {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getAllContacts() : Promise<Contact[]> {

        const response = await fetch(`${this.baseUrl}/api/contacts`);
        return response.json();

    }
    async createContact(contact: Contact) : Promise<void> {
        const t = JSON.stringify(contact);
        console.log(t);
        await fetch(`${this.baseUrl}/api/contacts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: t
        });
    }
}
