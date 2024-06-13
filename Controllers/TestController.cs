using System.Collections.Generic;
using ExpensesTracker.Models;
using ExpensesTracker.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

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

            var genre = await movieService.DiscoverMovies(
                new string[] { "action" },
                new string[] { "Dwayne Johnson" },
                120,
                80,
                2,
                6,
                2021
            );

            return Ok(genre);
        }

       [Route("api/postRoute")]
[HttpPost]
public async Task<IActionResult> GetMovieFromForm()
{
    SearchCriteria data = null;
    using (var reader = new StreamReader(Request.Body))
    {
        var body = await reader.ReadToEndAsync();
        using var jsonReader = new JsonTextReader(new StringReader(body));
        data = new JsonSerializer().Deserialize<SearchCriteria>(jsonReader);
    }

    if (data != null)
    {
        Console.WriteLine($"{string.Join(", ", data.genres)}, {string.Join(", ", data.cast)}, {data.movieLengthBelow}, {data.movieLengthAbove}, {data.movieRatingAbove}, {data.movieRatingBelow}, {data.releaseYear}");
    }
    else
    {
        return BadRequest("Invalid data");
    }

    var movieService = new MovieService();

    var discoveredMovie = await movieService.DiscoverMovies(
        data.genres,
        data.cast,
        data.movieLengthBelow,
        data.movieLengthAbove,
        data.movieRatingAbove,
        data.movieRatingBelow,
        data.releaseYear
    );

    return Ok(discoveredMovie);
}
    }
}
