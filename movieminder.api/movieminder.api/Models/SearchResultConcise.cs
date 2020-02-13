using System.Collections.Generic;

namespace movieminder.api.Models
{
    public class SearchResultConcise
    {
        public string tmsId { get; set; }
        public string title { get; set; }
        public string releaseDate { get; set; }
        public string imageUrl { get; set; }
    }
}