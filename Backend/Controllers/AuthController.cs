using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        public static User user = new User();

        [HttpPost("Register")]
        public IActionResult Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest("User is null. Please provide user data");
            }
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);

            user.Password = passwordHash;
            user.Email = user.Email.ToLower();
            user.Name = user.Name.ToLower();
            return Ok(user);
        }
       /*  [HttpPost("Login")]
         public IActionResult Login(UserDto loginUser)
        {
            if (loginUser == null) //Chech later if user is in db
            {
                return BadRequest("User is null. Please provide user data");
            }

            if(!BCrypt.Net.BCrypt.Verify(loginUser.Password, user.Password))
            {
                return BadRequest("Invalid password");
            }
            return Ok(user);
        } */
    }

    
}
