using Microsoft.AspNetCore.Mvc;

namespace movieminder.api.Controllers
{
    public abstract class FirebaseEnabledController : ControllerBase
    {
        protected string FirebaseUserId()
        {
            return User.FindFirst(x => x.Type == "user_id").Value;
        }
    }
}
