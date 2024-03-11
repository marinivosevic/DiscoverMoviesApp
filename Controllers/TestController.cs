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

        public async Task<IActionResult> GetMovieFromForm([FromQuery]MovieSearchRequest key1)
        {

            
            try
            {
                var options = new RestClientOptions("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1");
                var client = new RestClient(options);
                var request = new RestRequest("");
                request.AddHeader("accept", "application/json");
                request.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w");
                request.AddParameter("query", key1.MovieName);
                var response = await client.GetAsync(request);

                if (response.IsSuccessful)
                {
                    var responseData = response.Content != null ? JsonConvert.DeserializeObject<ApiResponse>(response.Content) : null;

                    if (responseData?.Results != null)
                    {
                        var resultID = responseData.Results[0].Id;
                        var optionsSimilarMovies = new RestClientOptions("https://api.themoviedb.org/3/movie/293660/similar?language=en-US&page=1");
                        var clientSimilarMovies = new RestClient(optionsSimilarMovies);
                        var requestSimilarMovies = new RestRequest("");
                        requestSimilarMovies.AddHeader("accept", "application/json");
                        requestSimilarMovies.AddHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w");
                        requestSimilarMovies.AddParameter("query", resultID);
                        var responseSimilarMovies = await clientSimilarMovies.GetAsync(requestSimilarMovies);



                        return Ok(responseSimilarMovies.Content);
                    }
                    else
                    {
                        return NotFound("No movie found");
                    }


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


    }
}

