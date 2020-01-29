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
    public class UserMovieController : ControllerBase
    {

        private readonly UserMovieRepository _repo = new UserMovieRepository();
        // GET api/usermovie
        [HttpGet]
        public IEnumerable<UserMovie> GetUserMovies()
        {
            var repo = new UserMovieRepository();
            var userMovies = _repo.GetAllUserMovies();
            return userMovies;
        }

        // GET api/usermovie/4
        [HttpGet("{id}")]
        public UserMovie GetUserMovie(int id)
        {
            return _repo.GetUserMovie(id);
        }

        // GET api/usermovie/user/4
        [HttpGet("user/{userId:int}")]
        public IEnumerable<UserMovieWithMovieData> GetAllUserMoviesWithMovieDataByUser(int userId)
        {
            var repo = new UserMovieRepository();
            var userMovies = _repo.GetAllUserMoviesWithMovieDataByUser(userId);
            return userMovies;
        }
    }
}