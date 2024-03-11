namespace ExpensesTracker.Models{
     public class ApiResponse
        {
            public int Page { get; set; }
            public List<MovieSearchRequest>? Results { get; set; }
        }
}