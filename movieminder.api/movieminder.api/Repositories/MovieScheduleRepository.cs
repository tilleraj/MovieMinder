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
        private RestClient _client;

        public MovieScheduleRepository()
        {
            _client = new RestClient("http://data.tmsapi.com/v1.1/movies/");

        }

        public List<MovieSchedule> GetAllMovieSchedules()
        {
            var request = new RestRequest("showings?startDate=2020-02-01&zip=37205&api_key=3cbn8c8akp4j34afwe8ztvnx");

            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }
    }
}
