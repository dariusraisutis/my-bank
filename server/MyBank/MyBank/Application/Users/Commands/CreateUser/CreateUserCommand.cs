using MediatR;
using MyBank.Application.Common.Interfaces;
using MyBank.Models;

namespace MyBank.Application.Users.Commands.CreateUser
{
    public record CreateUserCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }

    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, int>
    {
        private readonly IApplicationDbContext _context;
        public CreateUserCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var entity = new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserName = request.UserName,
                Password = request.Password
            };

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }
    }
}
