using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.Models;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/schedule")]
    [ApiController]
    public class MovieScheduleController : ControllerBase
    {

        private readonly MovieScheduleRepository _repo;

        public MovieScheduleController(MovieScheduleRepository repo)
        {
            _repo = repo;
        }

        // GET api/schedule
        [HttpGet]
        public IEnumerable<MovieSchedule> GetMovieSchedules()
        {
            var movieSchedules = _repo.GetAllMovieSchedules();
            return movieSchedules;
        }

        // GET api/schedule/concise
        [HttpGet("concise")]
        public IEnumerable<MovieScheduleConcise> GetConciseMovieSchedules()
        {
            var conciseMovieSchedules = _repo.GetAllConciseMovieSchedules();
            return conciseMovieSchedules;
        }

        // GET api/schedule/MV007920380000
        [HttpGet("{tmsId}")]
        public IEnumerable<MovieSchedule> GetMovieScheduleByTmsId(string tmsId)
        {
            return _repo.GetMovieScheduleByTmsId(tmsId);
        }

    }
}