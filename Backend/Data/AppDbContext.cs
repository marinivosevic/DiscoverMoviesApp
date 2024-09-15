using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace ExpensesTracker.Data
{
    public class AppDbContext : IdentityDbContext
    {
        public DbSet<User> Users { get; set; } = default!;
        public DbSet<Review> Reviews { get; set; } = default!; 

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }

       
    }
}
