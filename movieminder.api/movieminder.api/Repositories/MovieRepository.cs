using Microsoft.Extensions.Configuration;
using RestSharp;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.Models;
using Dapper;
using movieminder.api.Commands;
using Microsoft.AspNetCore.Mvc;

namespace movieminder.api.Repositories
{
    public class MovieRepository : ControllerBase
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

        public Movie GetMovieByTitle(string title)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from movie where [title] = @title";
                var parameters = new { title };
                var movie = db.QueryFirstOrDefault<Movie>(sql, parameters);
                return movie;
            }
        }

        public Movie AddMovie(AddMovieCommand movie)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT [Movie]
                            ([Title]
                            ,[ReleaseDate]
                            ,[PosterURL])
                            OUTPUT
                            inserted.*
                            VALUES
                            (
                            @Title
                            ,@ReleaseDate
                            ,@PosterURL)";
                return db.QueryFirst<Movie>(sql, movie);
            }
        }

        public bool UpdateMovie(Movie updateMovie)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE [dbo].[Movie]
                           SET [Title] = @Title
                              ,[ReleaseDate] = @ReleaseDate
                              ,[PosterURL] = @PosterURL
                         WHERE [Id] = @Id";
                return db.Execute(sql, updateMovie) == 1;
            }
        }
    }
}