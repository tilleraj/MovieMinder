using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using movieminder.api.DataModels;
using Dapper;
using movieminder.api.Commands;

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

        public User GetUser(int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "select * from [User] where [id] = @id";
                var parameters = new { id };
                var user = db.QueryFirstOrDefault<User>(sql, parameters);
                return user;
            }
        }

        public User GetUserByUid(string firebaseUid)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select * from [User]
                            where FirebaseUid = @firebaseUid";
                var user = db.QueryFirstOrDefault<User>(sql, new { firebaseUid });
                return user;
            }
        }

        public int Add(UserAdd newUser)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [User]([FirebaseUid], [Username], [Email], [Zip])
                            VALUES (
                              @FirebaseUid,
                              @Username,
                              @Email,
                              @Zip
                            )";
                return db.Execute(sql, newUser);
            }
        }
    }
}
