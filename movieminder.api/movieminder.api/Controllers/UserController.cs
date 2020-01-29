using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.DataModels;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly UserRepository _repo = new UserRepository();
        // GET api/user
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            var repo = new UserRepository();
            var users = _repo.GetAllUsers();
            return users;
        }

        // GET api/user/4
        [HttpGet("{id}")]
        public User GetUser(int id)
        {
            return _repo.GetUser(id);
        }
    }
}