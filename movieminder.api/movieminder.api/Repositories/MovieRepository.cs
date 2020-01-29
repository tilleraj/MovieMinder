using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.DataModels;
using Dapper;

namespace movieminder.api.Repositories
{
    public class MovieRepository
    {
        string _connectionString = "Server=localhost; Database=MovieMinder; Trusted_Connection=True;";

        public IEnumerable<Movie> GetAllMovies()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "Select * from [Movie]";
                var allMovies = db.Query<Movie>(sql);
                return allMovies;
            }
        }
    }
}
