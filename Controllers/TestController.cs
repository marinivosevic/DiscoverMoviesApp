using RestSharp;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using ExpensesTracker.Models;
using ExpensesTracker.Services;
namespace ExpensesTracker.Controllers
{
    [ApiController]

    public class TestController : ControllerBase
    {

        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IActionResult> GetOneMovieTest()
        {
        var movieService = new MovieService();  
         
        var genre = await movieService.DiscoverMovies(new string[]{"action"} ,new string[]{"Dwayne Johnson"} ,80,120,6,8, 2021);
        
        return Ok(genre); 
           
        }

        [Route("api/postRoute")]
        [HttpGet]

        public async Task<IActionResult> GetMovieFromForm([FromQuery]string[] genres, [FromQuery]string[] cast, [FromQuery]int minRuntime, [FromQuery]int maxRuntime, [FromQuery]int minRating, [FromQuery]int maxRating, [FromQuery]int year)
        {
            var movieService = new MovieService();  
            Console.WriteLine(genres);
            var discoveredMovie = await movieService.DiscoverMovies(new string[]{"action"} ,new string[]{"Dwayne Johnson"} ,80,120,6,8, 2021);
            
            return Ok(discoveredMovie); 
        }



    }
}
