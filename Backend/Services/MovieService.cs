using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;
using ExpensesTracker.Models;
using ExpensesTracker.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace ExpensesTracker.Services
{
    public class MovieService : IMovieService
    {
        public async Task<IEnumerable<Movie>?> SearchMoviesOrTvShow()
        {
            var client = new RestClient("https://api.themoviedb.org/3/search/movie");
            var request = new RestRequest("");
            request.AddParameter("query", "Deadpool");
            request.AddParameter("include_adult", "false");
            request.AddParameter("language", "en-US");
            request.AddParameter("page", "1");
            request.AddHeader("accept", "application/json");
            request.AddHeader(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w"
            );

            var response = await client.GetAsync(request);

            if (response.IsSuccessful)
            {
                var content = response.Content;
                var apiResponse = JsonConvert.DeserializeObject<ApiResponse>(content);

                return apiResponse?.results;
            }

            return null;
        }

        public Task<Movie> GetMovieDetails(int movieId)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Movie>?> GetSimilarMoviesOrShow(string movieId, string type)
        {
            string mediaTypeUrl =
                type == "movie"
                    ? "https://api.themoviedb.org/3/search/movie"
                    : "https://api.themoviedb.org/3/search/tv";
            string similarMediaTypeUrl =
                type == "movie"
                    ? "https://api.themoviedb.org/3/movie/"
                    : "https://api.themoviedb.org/3/tv/";

            try
            {
                var searchQueryParams = new Dictionary<string, string>
                {
                    { "include_adult", "false" },
                    { "language", "en-US" },
                    { "page", "1" },
                    { "query", movieId }
                };

                var searchResult = await FetchDataFromApi<ApiResponse>(
                    mediaTypeUrl,
                    searchQueryParams
                );

                if (searchResult?.results != null && searchResult.results.Any())
                {
                    var resultID = searchResult.results[0].id;
                    string similarMoviesUrl = $"{similarMediaTypeUrl}{resultID}/similar";
                    var similarMoviesQueryParams = new Dictionary<string, string>
                    {
                        { "language", "en-US" },
                        { "page", "1" }
                    };

                    var similarMoviesResult = await FetchDataFromApi<ApiResponse>(
                        similarMoviesUrl,
                        similarMoviesQueryParams
                    );
                    return similarMoviesResult?.results;
                }
                else
                {
                    throw new Exception("No movie found");
                }
            }
            catch (Exception e)
            {
                throw new Exception("Error: " + e.Message);
            }
        }

        public async Task<IEnumerable<int>> GetGenres(string[] genreName)
        {
            var response = await FetchDataFromApi<GenresResponse>(
                "https://api.themoviedb.org/3/genre/movie/list"
            );

            var genreIds = new List<int>();
            foreach (var genre in response.Genres)
            {
                foreach (var genreNames in genreName)
                {
                    if (genreNames.ToLower() == genre.Name.ToLower())
                    {
                        genreIds.Add(genre.Id);
                    }
                }
            }
            return genreIds;
        }

        public async Task<IEnumerable<int>> GetCastId(string[] castNames)
        {
            if (castNames.Length > 0)
            {
                var castIDs = new List<int>();
                foreach (var castName in castNames)
                {
                    var queryParams = new Dictionary<string, string> { { "query", castName } };
                    var response = await FetchDataFromApi<ActorResponse>(
                        "https://api.themoviedb.org/3/search/person",
                        queryParams
                    );
                    castIDs.Add(response.results[0].id);
                }

                return castIDs;
            }

            return new List<int>();
        }

        public async Task<IEnumerable<Movie>?> DiscoverMovies(
            string[] genreName,
            string[] castNames,
            int? movieLengthBelow,
            int? movieLengthAbove,
            float? movieRatingBelow,
            float? movieRatingAbove,
            int? releaseYear
        )
        {
            var castIDs = await GetCastId(castNames);
            var genreIDs = await GetGenres(genreName);
            var queryParams = new Dictionary<string, string>
            {
                { "language", "en-US" },
                { "page", "1" }
            };

            if (genreIDs.Any())
            {
                queryParams.Add("with_genres", string.Join(",", genreIDs));
            }

            if (castIDs.Any())
            {
                queryParams.Add("with_cast", string.Join(",", castIDs));
            }

            if (movieLengthBelow.HasValue)
            {
                queryParams.Add("with_runtime.lte", movieLengthBelow.Value.ToString());
            }

            if (movieLengthAbove.HasValue)
            {
                queryParams.Add("with_runtime.gte", movieLengthAbove.Value.ToString());
            }

            if (movieRatingBelow.HasValue)
            {
                queryParams.Add("vote_average.lte", movieRatingBelow.Value.ToString());
            }

            if (movieRatingAbove.HasValue)
            {
                queryParams.Add("vote_average.gte", movieRatingAbove.Value.ToString());
            }

            if (releaseYear != 0)
            {
                queryParams.Add("year", releaseYear.Value.ToString());
            }

            try
            {
                var response = await FetchDataFromApiForDiscoverEndpoint(
                    "https://api.themoviedb.org/3/discover/movie",
                    queryParams
                );

                return response.ToList();
            }
            catch (Exception e)
            {
                throw new Exception("Error: " + e.Message);
            }
        }

        public async Task<T> FetchDataFromApi<T>(
            string url,
            Dictionary<string, string> queryParams = null
        )
        {
            var options = new RestClientOptions(url);
            var client = new RestClient(options);
            var request = new RestRequest("");
            request.AddHeader("accept", "application/json");
            request.AddHeader(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w"
            );

            if (queryParams != null)
            {
                foreach (var param in queryParams)
                {
                    request.AddParameter(param.Key, param.Value);
                }
            }

            var response = await client.GetAsync(request);

            try
            {
                if (response.IsSuccessful && response.Content != null)
                {
                    var sgbsdfogb = JsonConvert.DeserializeObject<T>(response.Content);

                    return JsonConvert.DeserializeObject<T>(response.Content);
                }
                else
                {
                    throw new Exception("API request failed or content is null");
                }
            }
            catch (JsonSerializationException ex)
            {
                throw new Exception("Deserialization error: " + ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("General error: " + ex.Message);
                throw;
            }
        }

        public async Task<MovieDetails> GetMovieById(int id)
        {
            var queryParams = new Dictionary<string, string> { { "language", "en-US" } };
            var response = await FetchDataFromApi<MovieDetails>(
                $"https://api.themoviedb.org/3/movie/{id}",
                queryParams
            );

            return response;
        }

        public async Task<Credits> GetCreditsById(int id){
            var queryParams = new Dictionary<string, string> { { "language", "en-US" } };
            var response = await FetchDataFromApi<Credits>(
                $"https://api.themoviedb.org/3/movie/{id}/credits",
                queryParams
            );

            return response;
        }

        public async Task<List<Movie>> FetchDataFromApiForDiscoverEndpoint(
            string url,
            Dictionary<string, string> queryParams = null
        )
        {
            var options = new RestClientOptions(url);
            var client = new RestClient(options);
            var request = new RestRequest("");
            request.AddHeader("accept", "application/json");
            request.AddHeader(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjcyNzNjYWNiMzZiZWI0NmU1YzMxNjJmNmUwNDY0MyIsInN1YiI6IjYzZmZiZGMyOWYxYmU3MDA3Y2E2YmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C53rNh4eQFNwLBjoRy0Yilk6e_NwDaAmOivcyTI4p-w"
            );

            if (queryParams != null)
            {
                foreach (var param in queryParams)
                {
                    request.AddParameter(param.Key, param.Value);
                }
            }

            var response = await client.GetAsync(request);
            Console.WriteLine(response.Content);
            try
            {
                if (response.IsSuccessful && response.Content != null)
                {
                    var apiResponse = JsonConvert.DeserializeObject<ApiResponse>(response.Content);
                    return apiResponse?.results ?? new List<Movie>();
                }
                else
                {
                    throw new Exception("API request failed or content is null");
                }
            }
            catch (JsonSerializationException ex)
            {
                throw new Exception("Deserialization error: " + ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("General error: " + ex.Message);
                throw;
            }
        }
    }
}
