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

        // GET api/schedule/2020-02-10/37205/
        [HttpGet("{startDate}/{zip}")]
        public IEnumerable<MovieSchedule> GetMovieSchedules(string startDate, string zip)
        {
            var movieSchedules = _repo.GetAllMovieSchedules(startDate, zip);
            return movieSchedules;
        }

        // GET api/schedule/2020-02-10/37205/concise
        [HttpGet("{startDate}/{zip}/concise")]
        public IEnumerable<MovieScheduleConcise> GetConciseMovieSchedules(string startDate, string zip)
        {
            var conciseMovieSchedules = _repo.GetAllConciseMovieSchedules(startDate, zip);
            return conciseMovieSchedules;
        }

        // GET api/schedule/2020-02-10/MV007920380000
        [HttpGet("{startDate}/{zip}/{tmsId}")]
        public IEnumerable<MovieSchedule> GetMovieScheduleByTmsId(string startDate, string zip, string tmsId)
        {
            return _repo.GetMovieScheduleByTmsId(startDate, zip, tmsId);
        }

        // GET api/schedule/image/The Hunger Games
        [HttpGet("search/{title}")]
        public SearchResult SearchMovieByTitle(string title)
        {
            return _repo.SearchMovieByTitle(title);
        }

    }
}

