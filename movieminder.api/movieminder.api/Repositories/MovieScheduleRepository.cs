using Microsoft.Extensions.Configuration;
using movieminder.api.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.Repositories
{
    public class MovieScheduleRepository
    {
        private readonly IConfiguration _config;
        private RestClient _client;

        public MovieScheduleRepository(IConfiguration config)
        {
            _client = new RestClient("http://data.tmsapi.com/v1.1/movies/");
            _config = config;
        }

        public List<MovieSchedule> GetAllMovieSchedules()
        {
            var key = _config.GetSection("gracenoteKey").Value;

            var request = new RestRequest($"showings?startDate=2020-02-04&zip=37205&api_key={key}");
            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }

        public List<MovieScheduleConcise> GetAllConciseMovieSchedules(string startDate, string zip)
        {
            var key = _config.GetSection("gracenoteKey").Value;

            var request = new RestRequest($"showings?startDate={startDate}&zip={zip}&api_key={key}");
            var movieSchedules = _client.Get<List<MovieScheduleConcise>>(request);

            return movieSchedules.Data;
        }

        public List<MovieSchedule> GetMovieScheduleByTmsId(string startDate, string zip, string tmsId)
        {
            var key = _config.GetSection("gracenoteKey").Value;
            var request = new RestRequest($"/{tmsId}/showings?startDate={startDate}&zip={zip}&api_key={key}");
            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }
    }
}
