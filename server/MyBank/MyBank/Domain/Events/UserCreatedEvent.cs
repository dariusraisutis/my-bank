using MyBank.Domain.Common;
using MyBank.Domain.Entities;

namespace MyBank.Domain.Events
{
    public class UserCreatedEvent : BaseEvent
    {
        public UserCreatedEvent(User user)
        {
            User = user;
        }

        public User User { get; set; }
    }
}
