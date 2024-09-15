using Microsoft.AspNetCore.Mvc;
using ExpensesTracker.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
namespace Backend.Controllers{
    [Authorize] 
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [Route("api/[controller]/createUser")]
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            if(user == null)
            {
                return BadRequest(
                    "User is null. Please provide user data"
                );
            }   
            var users = _context.Users
                .Add(user);
                
            await _context.SaveChangesAsync();
            var userDto = new UserDto(user.Id, user.Name, user.Email);
            return CreatedAtAction("user", new { id = user.Id }, userDto);
        }
        
    }
}