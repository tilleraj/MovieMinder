using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movieminder.api.DataModels
{
    public class User
    {
        public int Id { get; set; }
        public string FireBaseUid { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Zip { get; set; }
    }
}
