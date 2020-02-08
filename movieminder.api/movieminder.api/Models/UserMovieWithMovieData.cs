using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.Models
{
    public class UserMovieWithMovieData
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MovieId { get; set; }
        public bool WatchList { get; set; }
        public bool SeenList { get; set; }
        public bool ShameList { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public bool LeftTheaters { get; set; }
        public DateTime RetireDate { get; set; }
        public string PosterURL { get; set; }
    }
}
