<<<<<<< HEAD
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.DataModels;
=======
﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
>>>>>>> oops
using movieminder.api.Models;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieScheduleController : ControllerBase
    {

<<<<<<< HEAD
        private readonly MovieScheduleRepository _repo = new MovieScheduleRepository();
=======
        private readonly MovieScheduleRepository _repo;

        public MovieScheduleController(MovieScheduleRepository repo)
        {
            _repo = repo;
        }

>>>>>>> oops
        // GET api/movieschedule
        [HttpGet]
        public IEnumerable<MovieSchedule> GetMovieSchedules()
        {
<<<<<<< HEAD
            var repo = new MovieScheduleRepository();
=======
>>>>>>> oops
            var movieSchedules = _repo.GetAllMovieSchedules();
            return movieSchedules;
        }

    }
}