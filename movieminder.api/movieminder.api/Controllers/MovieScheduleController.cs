using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.DataModels;
using movieminder.api.Models;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieScheduleController : ControllerBase
    {

        private readonly MovieScheduleRepository _repo = new MovieScheduleRepository();
        // GET api/movieschedule
        [HttpGet]
        public IEnumerable<MovieSchedule> GetMovieSchedules()
        {
            var repo = new MovieScheduleRepository();
            var movieSchedules = _repo.GetAllMovieSchedules();
            return movieSchedules;
        }

    }
}