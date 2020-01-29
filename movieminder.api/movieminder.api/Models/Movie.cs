using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.DataModels
{
    public class Movie
    {
        public int Id { get; set; }
        public DateTime ReleaseDate { get; set; }
        public bool LeftTheaters { get; set; }
        public DateTime RetireDate { get; set; }
        public string PosterURL { get; set; }
    }
}
