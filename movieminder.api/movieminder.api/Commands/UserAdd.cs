using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.Commands
{
    public class UserAdd
    {
        public int Id { get; set; }
        public string FirebaseUid { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Zip { get; set; }
    }
}