using Microsoft.AspNetCore.Mvc;
using MyBank.Application.Users.Commands.CreateUser;

namespace MyBank.Controllers
{
    public class UserController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<int>> Create (CreateUserCommand command) =>
            await Mediator.Send(command);
    }
}
