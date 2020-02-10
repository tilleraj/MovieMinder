using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.Models;
using movieminder.api.Repositories;
using movieminder.api.Commands;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {

        private readonly MovieRepository _repo = new MovieRepository();
        
        // GET api/movie
        [HttpGet]
        public IEnumerable<Movie> GetMovies()
        {
            var repo = new MovieRepository();
            var movies = _repo.GetAllMovies();
            return movies;
        }

        // GET api/movie/4
        [HttpGet("{id:int}")]
        public Movie GetMovie(int id)
        {
            return _repo.GetMovie(id);
        }

        // GET api/movie/The Hunger Games
        [HttpGet("{title}")]
        public Movie GetMovieByTitle(string title)
        {
            return _repo.GetMovieByTitle(title);
        }

        // POST api/movie/
        [HttpPost]
        public Movie AddMovie(AddMovieCommand movieToAdd)
        {
            return _repo.AddMovie(movieToAdd);
        }

        //PUT api/movie/4
        [HttpPut("{movieId}")]
        public bool UpdateMovie(Movie movieToUpdate, int movieId)
        {
            movieToUpdate.Id = movieId;
            return _repo.UpdateMovie(movieToUpdate);
        }
    }
}