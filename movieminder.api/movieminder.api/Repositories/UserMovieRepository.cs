﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.DataModels;
using Dapper;

namespace movieminder.api.Repositories
{
    public class UserMovieRepository
    {
        string _connectionString = "Server=localhost; Database=MovieMinder; Trusted_Connection=True;";

        public IEnumerable<UserMovie> GetAllUserMovies()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "Select * from [UserMovie]";
                var allUserMovies = db.Query<UserMovie>(sql);
                return allUserMovies;
            }
        }

        public UserMovie GetUserMovie(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from [UserMovie] where [id] = @id";
                var parameters = new { id };
                var userMovie = db.QueryFirstOrDefault<UserMovie>(sql, parameters);
                return userMovie;
            }
        }

        public IEnumerable<UserMovieWithMovieData> GetAllUserMoviesWithMovieDataByUser(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT um.*, m.Title, m.ReleaseDate, m.LeftTheaters, m.RetireDate, m.PosterURL
                            FROM UserMovie as um
                            JOIN Movie as m
                            ON um.MovieId = m.Id
                            WHERE um.UserId = @id";
                var parameters = new { id };
                var userMovie = db.Query<UserMovieWithMovieData>(sql, parameters);
                return userMovie;
            }
        }

    }
}
