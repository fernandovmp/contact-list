using System.Collections.Generic;
using System.Threading.Tasks;
using ContactList.WebApi.Models;
using ContactList.WebApi.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.WebApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class ContactsController : ControllerBase
    {

        private readonly IContactRepository _contactRepository;

        public ContactsController(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> ListAllContacts()
        {

            List<Contact> allContacts = await _contactRepository.GetAllAsync();
            return Ok(allContacts);
        }

        [HttpGet("{id}", Name = nameof(GetContact))]
        public async Task<ActionResult<Contact>> GetContact(string id)
        {
            Contact contact = await _contactRepository.GetContactAsync(id);
            if(contact is null) return NotFound();
            return Ok(contact);
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> CreateContact(Contact contact)
        {
            await _contactRepository.CreateAsync(contact);
            return CreatedAtRoute(nameof(GetContact), new { id = contact.Id }, contact);
        }
    }
}
