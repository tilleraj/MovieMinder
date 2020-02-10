using System;
namespace movieminder.api.Commands
{
    public class AddUserMovieCommand
    {
        public int UserId { get; set; }
        public int MovieId { get; set; }
    }
}