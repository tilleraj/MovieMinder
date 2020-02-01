using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.Models;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieScheduleController : ControllerBase
    {

        private readonly MovieScheduleRepository _repo;

        public MovieScheduleController(MovieScheduleRepository repo)
        {
            _repo = repo;
        }

        // GET api/movieschedule
        [HttpGet]
        public IEnumerable<MovieSchedule> GetMovieSchedules()
        {
            var movieSchedules = _repo.GetAllMovieSchedules();
            return movieSchedules;
        }

    }
}