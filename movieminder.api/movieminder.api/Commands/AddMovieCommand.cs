using System;
namespace movieminder.api.Commands
{
    public class AddMovieCommand
    {
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string PosterURL { get; set; }
    }
}