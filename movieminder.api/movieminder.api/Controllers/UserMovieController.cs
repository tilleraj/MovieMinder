﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.Commands;
using movieminder.api.Models;
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
        [HttpGet("{id:int}")]
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

        // GET api/usermovie/move/3/shame
        [HttpPut("move/{id}/{destinationList}")]
        public bool moveLists(int id, string destinationList)
        {
            var movieToMove = _repo.GetUserMovie(id);
            switch (destinationList)
            {
                case "seen":
                    movieToMove.WatchList = false;
                    movieToMove.SeenList = true;
                    movieToMove.ShameList = false;
                    break;
                case "shame":
                    movieToMove.WatchList = false;
                    movieToMove.SeenList = false;
                    movieToMove.ShameList = true;
                    break;
                default:
                    movieToMove.WatchList = true;
                    movieToMove.SeenList = false;
                    movieToMove.ShameList = false;
                    break;
            }
            return _repo.UpdateUserMovie(movieToMove);
        }

        // POST api/usermovie/
        [HttpPost]
        public bool AddUserMovie(AddUserMovieCommand userMovieToAdd)
        {
            return _repo.AddUserMovie(userMovieToAdd);
        }

        // DELETE api/usermovie/7
        [HttpDelete("{id}")]
        public bool DeleteUserMovie(int id)
        {
            return _repo.DeleteUserMovie(id);
        }
    }
}