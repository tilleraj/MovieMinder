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
            _client = new RestClient("http://data.tmsapi.com/v1.1/");
            _config = config;
        }

        public List<MovieSchedule> GetAllMovieSchedules(string startDate, string zip)
        {
            var key = _config.GetSection("gracenoteKey").Value;

            var request = new RestRequest($"movies/showings?startDate={startDate}&zip={zip}&api_key={key}");
            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }

        public List<MovieScheduleConcise> GetAllConciseMovieSchedules(string startDate, string zip)
        {
            var key = _config.GetSection("gracenoteKey").Value;

            var request = new RestRequest($"movies/showings?startDate={startDate}&zip={zip}&api_key={key}");
            var movieSchedules = _client.Get<List<MovieScheduleConcise>>(request);

            return movieSchedules.Data;
        }

        public List<MovieSchedule> GetMovieScheduleByTmsId(string startDate, string zip, string tmsId)
        {
            var key = _config.GetSection("gracenoteKey").Value;
            var request = new RestRequest($"movies/{tmsId}/showings?startDate={startDate}&zip={zip}&api_key={key}");
            var movieSchedules = _client.Get<List<MovieSchedule>>(request);

            return movieSchedules.Data;
        }

        public SearchResultConcise SearchMovieByTitle(string title)
        {
            var key = _config.GetSection("gracenoteKey").Value;
            var request = new RestRequest($"programs/search?q={title}&queryFields=title&entityType=movie&titleLang=en&descriptionLang=en&limit=1&api_key={key}");
            var searchResult = _client.Get<SearchResult>(request);
            var searchResultConcise = new SearchResultConcise();
            if (searchResult.Data.hitCount > 0)
            {
                searchResultConcise.tmsId = searchResult.Data.hits[0].program.tmsId;
                searchResultConcise.title = searchResult.Data.hits[0].program.title;
                searchResultConcise.releaseDate = searchResult.Data.hits[0].program.releaseDate;
                var fullImageUrl = "http://developer.tmsimg.com/" + searchResult.Data.hits[0].program.preferredImage.uri + "?api_key=" + key;
                searchResultConcise.imageUrl = fullImageUrl;
            }

            return searchResultConcise;
        }
    }
}

