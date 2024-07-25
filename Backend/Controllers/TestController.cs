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
                var movieService = new MovieService();
                var discoveredMovie = await movieService.DiscoverMovies(
                    data.Genres ?? [],
                    data.Cast ?? [],
                    data.MovieLengthBelow,
                    data.MovieLengthAbove,
                    data.MovieRatingBelow,
                    data.MovieRatingAbove,
                    data.ReleaseYear
                );

                return Ok(discoveredMovie);
            }

            return BadRequest("Invalid data");
        }

        [Route("api/[controller]/movie/{id}")]
        [HttpGet]
        public async Task<IActionResult> GetMovieById(int id)
        {
            var movieService = new MovieService();
            var movie = await movieService.GetMovieById(id);

            return Ok(movie);
        }

        [Route("api/[controller]/movie/{id}/credits")]
        [HttpGet]
        public async Task<IActionResult> GetMovieCredits(int id)
        {
            var movieService = new MovieService();
            var credits = await movieService.GetCreditsById(id);

            return Ok(credits);
        }
    }
}
