using System;
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
    }
}
