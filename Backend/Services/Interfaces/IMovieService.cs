using ExpensesTracker.Models;

namespace ExpensesTracker.Services.Interfaces
{
    public interface IMovieService
    {
        Task<IEnumerable<Movie>> SearchMoviesOrTvShow();
        Task<Movie> GetMovieDetails(int movieId);

        Task<IEnumerable<Movie>> GetSimilarMoviesOrShow(string movieId, string type);

        Task<IEnumerable<int>> GetGenres(string[] genreName);
        Task<IEnumerable<int>> GetCastId(string[] castNames);

        

    }
}
