using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movieminder.api.Commands;
using movieminder.api.Models;
using movieminder.api.Repositories;

namespace movieminder.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class UserController : FirebaseEnabledController
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
        [HttpGet("{id:int}")]
        public User GetUser(int id)
        {
            return _repo.GetUser(id);
        }

        // GET api/user/user@domain.com
        [HttpGet("{email}")]
        public User GetUserByEmail(string email)
        {
            return _repo.GetUserByEmail(email);
        }

        // GET api/user/uid/abc123def456ghi789jkl012mno3
        [HttpGet("uid/{firebaseUid}")]
        public ActionResult<User> GetUserByUid(string firebaseUid)
        {
            var userRepo = new UserRepository();
            return userRepo.GetUserByUid(firebaseUid);
        }

        // POST api/user
        [HttpPost]
        public IActionResult CreateUser(UserAdd newUserCommand)
        {
            newUserCommand.FirebaseUid = FirebaseUserId();

            var repo = new UserRepository();
            var userCreated = repo.Add(newUserCommand);

            if (userCreated == null)
            {
                return NotFound("could not create user");
            }
            return Created($"movieminder/user/{userCreated}", userCreated);
        }

        // DELETE api/user/3
        [HttpDelete("{id}")]
        public bool DeleteUser(int id)
        {
            return _repo.DeleteUser(id);
        }
    }
}