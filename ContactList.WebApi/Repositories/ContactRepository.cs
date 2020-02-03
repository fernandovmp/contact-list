using System.Collections.Generic;
using System.Threading.Tasks;
using ContactList.WebApi.Models;
using MongoDB.Driver;

namespace ContactList.WebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly IMongoCollection<Contact> _contacts;
        public ContactRepository(IContactsDatabaseSettings databaseSettings)
        {
            var client = new MongoClient(databaseSettings.ConnectionString);
            IMongoDatabase database = client.GetDatabase(databaseSettings.DatabaseName);
            _contacts = database.GetCollection<Contact>(databaseSettings.ContactsCollectionName);
        }
        public async Task<List<Contact>> GetAllAsync()
        {
            IAsyncCursor<Contact> findResult = await _contacts.FindAsync(contact => true);
            return findResult.ToList();
        }

        public async Task<Contact> GetContactAsync(string id)
        {
            IAsyncCursor<Contact> findResult = await _contacts.FindAsync(contact => contact.Id == id);
            return await findResult.FirstOrDefaultAsync();
        }

        public async Task<Contact> CreateAsync(Contact contact)
        {
            await _contacts.InsertOneAsync(contact);
            return contact;
        }

        public async Task<Contact> ReplaceAsync(string id, Contact contact)
        {
            await _contacts.ReplaceOneAsync(c => c.Id == id, contact);
            return contact;
        }

        public async Task DeleteContactAsync(string id) =>
            await _contacts.DeleteOneAsync(contact => contact.Id == id);

    }
}
