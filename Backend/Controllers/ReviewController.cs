using Backend.Dtos;
using Backend.Models;
using ExpensesTracker.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Authorize]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ReviewController(AppDbContext context)
        {
            _context = context;
        }

        [Route("api/[controller]/createReview")]
        [HttpPost]
        public async Task<IActionResult> CreateReview([FromBody] Review review)
        {
            if (review == null)
            {
                return BadRequest("Review is null. Please provide review data");
            }
            if (review.Rating < 0 || review.Rating > 10) // Example validation
            {
                return BadRequest("Invalid rating. Please provide a rating between 0 and 10.");
            }

            // Optional: Check if UserId and MovieId exist
            var userExists = await _context.Users.AnyAsync(u => u.Id == review.UserId);
            

            if (!userExists)
            {
                return BadRequest("Invalid UserId or MovieId.");
            }

            var reviews = _context.Reviews.Add(review);

            await _context.SaveChangesAsync();
            var reviewDto = new ReviewDto(review.Id, review.Title, review.Content, review.Rating);
            return CreatedAtAction("Review", new { id = review.Id }, reviewDto);
        }
    }
}
