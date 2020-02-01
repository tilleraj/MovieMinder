using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.DataModels;
using movieminder.api.Repositories;

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
        [HttpGet("{id}")]
        public Movie GetMovie(int id)
        {
            return _repo.GetMovie(id);
        }
    }
}