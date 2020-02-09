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

        // GET api/schedule/2020-02-10/concise
        [HttpGet("{startDate}/concise")]
        public IEnumerable<MovieScheduleConcise> GetConciseMovieSchedules(string startDate)
        {
            var conciseMovieSchedules = _repo.GetAllConciseMovieSchedules(startDate);
            return conciseMovieSchedules;
        }

        // GET api/schedule/2020-02-10/MV007920380000
        [HttpGet("{startDate}/{tmsId}")]
        public IEnumerable<MovieSchedule> GetMovieScheduleByTmsId(string startDate, string tmsId)
        {
            return _repo.GetMovieScheduleByTmsId(startDate, tmsId);
        }

    }
}