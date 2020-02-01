<<<<<<< HEAD
﻿using movieminder.api.Models;
=======
﻿using Microsoft.Extensions.Configuration;
using movieminder.api.Models;
>>>>>>> oops
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.Repositories
{
    public class MovieScheduleRepository
    {
<<<<<<< HEAD
        private RestClient _client;

        public MovieScheduleRepository()
        {
            _client = new RestClient("http://data.tmsapi.com/v1.1/movies/");

=======
        private readonly IConfiguration _config;
        private RestClient _client;

        public MovieScheduleRepository(IConfiguration config)
        {
            _client = new RestClient("http://data.tmsapi.com/v1.1/movies/");
            _config = config;
>>>>>>> oops
        }

        public List<MovieSchedule> GetAllMovieSchedules()
        {
<<<<<<< HEAD
            var request = new RestRequest("showings?startDate=2020-02-01&zip=37205&api_key=3cbn8c8akp4j34afwe8ztvnx");

=======
            var key = _config.GetSection("gracenoteKey").Value;

            var request = new RestRequest($"showings?startDate=2020-02-01&zip=37205&api_key={key}");
>>>>>>> oops
            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }
    }
}
