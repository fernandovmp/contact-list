using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ContactList.WebApi.Models
{
    public class Contact
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
