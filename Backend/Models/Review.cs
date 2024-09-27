using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
     [Table("Reviews")]
    public class Review
    {
        
       
        public int Id { get; set; } // Ensure this is `Id`, not `ID`
        
        public string Title { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public int UserId { get; set; }
        public int MovieId { get; set; }
    }
}
