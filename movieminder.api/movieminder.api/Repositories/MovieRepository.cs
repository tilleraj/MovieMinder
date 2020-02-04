using Microsoft.Extensions.Configuration;
using RestSharp;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.DataModels;
using Dapper;

namespace movieminder.api.Repositories
{
    public class MovieRepository
    {
        string _connectionString = "Server=localhost; Database=MovieMinder; Trusted_Connection=True;";

        //private readonly IConfiguration _config;
        //private RestClient _client;

        //public MovieRepository(IConfiguration config)
        //{
        //    _client = new RestClient("http://data.tmsapi.com/v1.1/");
        //    _config = config;
        //}

        public IEnumerable<Movie> GetAllMovies()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "Select * from [Movie]";
                var allMovies = db.Query<Movie>(sql);
                return allMovies;
            }
        }

        public Movie GetMovie(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from movie where [id] = @id";
                var parameters = new { id };
                var movie = db.QueryFirstOrDefault<Movie>(sql, parameters);
                return movie;
            }
        }
    }
}
