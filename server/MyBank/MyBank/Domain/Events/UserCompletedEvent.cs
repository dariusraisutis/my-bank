using MyBank.Domain.Common;
using MyBank.Domain.Entities;

namespace MyBank.Domain.Events
{
    public class UserCompletedEvent : BaseEvent
    {
        public UserCompletedEvent(User user)
        { 
            User = user;
        }

        public User User { get; set; }
    }
}
