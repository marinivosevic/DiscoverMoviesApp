using System.Collections.Generic;
using ExpensesTracker.Models;
using ExpensesTracker.Models.InputModels;
using ExpensesTracker.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace ExpensesTracker.Controllers
{
    [ApiController]
    public class TestController : ControllerBase
    {
     

        [Route("api/similarMovies")]
        [HttpGet]
        public async Task<IActionResult> GetSimilarMovies()
        {
            SimilarMovieRequest data;
            using (var reader = new StreamReader(Request.Body))
            {
                var body = await reader.ReadToEndAsync();
                using var jsonReader = new JsonTextReader(new StringReader(body));
                data = new JsonSerializer().Deserialize<SimilarMovieRequest>(jsonReader);
            }
            var movieService = new MovieService();

            var genre = await movieService.GetSimilarMoviesOrShow("Kingsman", "movie");

            return Ok(genre);
        }

        [Route("api/[controller]/postRoute")]
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
                Console.WriteLine(
                    $"{string.Join(", ", data.genres)}, {string.Join(", ", data.cast)}, {data.movieLengthBelow}, {data.movieLengthAbove}, {data.movieRatingAbove}, {data.movieRatingBelow}, {data.releaseYear}"
                );
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
