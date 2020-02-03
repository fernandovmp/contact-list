using System.Collections.Generic;
using System.Threading.Tasks;
using ContactList.WebApi.Models;

namespace ContactList.WebApi.Repositories
{
    public interface IContactRepository
    {
        Task<List<Contact>> GetAllAsync();
        Task<Contact> GetContactAsync(string id);
        Task<Contact> CreateAsync(Contact contact);
        Task<Contact> ReplaceAsync(string id, Contact contact);
        Task DeleteContactAsync(string id);
    }
}
