using RestSharp;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using ExpensesTracker.Models;
using MovieSearchRequest = ExpensesTracker.Models.MovieSearchRequest;
using System.Web;
namespace ExpensesTracker.Controllers
{
    [ApiController]

    public class TestController : ControllerBase
    {

        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IActionResult> GetOneMovieTest()
        {
            var client = new RestClient("https://api.themoviedb.org/3/search/movie");
            var request = new RestRequest("");
            request.AddParameter("query", "Deadpool");
            request.AddParameter("include_adult", "false");
            request.AddParameter("language", "en-US");
            request.AddParameter("page", "1");
            request.AddHeader("accept", "application/json");
            request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w");

            var response = await client.GetAsync(request);

            return Ok(response.Content);
        }

        [Route("api/postRoute")]
        [HttpGet]

        public async Task<IActionResult> GetMovieFromForm([FromBody] MovieSearchRequest searchRequest)
        {


            try
            {
                var options = new RestClientOptions("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1");
                var client = new RestClient(options);
                var request = new RestRequest("");
                request.AddHeader("accept", "application/json");
                request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w");
                request.AddParameter("query", searchRequest.MovieName);
                var response = await client.GetAsync(request);

                if (response.IsSuccessful)
                {
                    var responseData = response.Content != null ? JsonConvert.DeserializeObject<ApiResponse>(response.Content) : null;

                    if (responseData?.Results != null)
                    {
                        var resultID = responseData.Results[0].Id;
                        var similarMovies = await GetSimilarMovies(resultID);

                        var parsedData = JsonConvert.DeserializeObject<MovieData>(similarMovies.ToString());

                        return Ok(similarMovies);
                    }

                    return NotFound("No movie found");
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Failed to get movie data");
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }



        }
        [HttpGet]
        private async Task<IActionResult> GetSimilarMovies(int MovieId)
        {

            var options = new RestClientOptions("https://api.themoviedb.org/3/movie/293660/similar?language=en-US&page=1");
            var client = new RestClient(options);
            var request = new RestRequest("");
            request.AddHeader("accept", "application/json");
            request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w");
            request.AddParameter("query", MovieId);
            var response = await client.GetAsync(request);

            return Ok(response.Content);
        }

        public class MovieData
        {
            public MovieContainer Value { get; set; }
        }

        public class MovieContainer
        {
            public int Page { get; set; }
            public Movie[] Results { get; set; }
        }

        public class Movie
        {
            // Define properties according to your JSON structure
            public bool Adult { get; set; }
            public string BackdropPath { get; set; }
            public int[] GenreIds { get; set; }
            public int Id { get; set; }
            public string OriginalLanguage { get; set; }
            public string OriginalTitle { get; set; }
            public string Overview { get; set; }
            public double Popularity { get; set; }
            public string PosterPath { get; set; }
            public string ReleaseDate { get; set; }
            public string Title { get; set; }
            public bool Video { get; set; }
            public double VoteAverage { get; set; }
            public int VoteCount { get; set; }
        }
    }
}

