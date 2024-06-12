

namespace ExpensesTracker.Models
{
     public class SearchCriteria
    {
    public string[] genres { get; set; }
    public int releaseYear { get; set; }
    public int movieRatingBelow { get; set; }
    public int movieRatingAbove { get; set; }
    public int movieLengthBelow { get; set; }
    public int movieLengthAbove { get; set; }
    public string[] cast { get; set; }
    }
}