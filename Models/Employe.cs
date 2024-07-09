using Microsoft.AspNetCore.Identity;

namespace Models
{
    public class Employe : IdentityUser
    {
        
        public string Name { get; set; }
        public string Position { get; set; }

        public DateTime HireDate { get; set; }
        
    }
}