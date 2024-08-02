using Backend.Models;
using Microsoft.EntityFrameworkCore;


namespace ExpensesTracker.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Review> Reviews { get; set; } = default!;

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }

       
    }
}
