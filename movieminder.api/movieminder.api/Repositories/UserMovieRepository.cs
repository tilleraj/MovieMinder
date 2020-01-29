using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.DataModels;
using Dapper;

namespace movieminder.api.Repositories
{
    public class UserRepository
    {
        string _connectionString = "Server=localhost; Database=MovieMinder; Trusted_Connection=True;";

        public IEnumerable<User> GetAllUsers()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "Select * from [User]";
                var allUsers = db.Query<User>(sql);
                return allUsers;
            }
        }
    }
}
