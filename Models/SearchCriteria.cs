

namespace ExpensesTracker.Models
{
     public class SearchCriteria
    {
     public string[] Genres { get; set; } = Array.Empty<string>();
    public string[] Cast { get; set; } = Array.Empty<string>();
    public int MovieLengthBelow { get; set; }
    public int MovieLengthAbove { get; set; }
    public int MovieRatingBelow { get; set; }
    public int MovieRatingAbove { get; set; }
    public int ReleaseYear { get; set; }
    }
}