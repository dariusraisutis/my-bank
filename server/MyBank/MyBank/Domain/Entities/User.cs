using MyBank.Domain.Common;
using MyBank.Domain.Events;

namespace MyBank.Domain.Entities
{
    public class User : BaseAuditableEntity
    {
        public int UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserName { get; set; }

        private bool _done;
        public bool Done
        { 
            get => _done;
            set
            {
                if (value == true && _done == false)
                {
                    AddDomainEvent(new UserCompletedEvent(this));
                }

                _done = value;
            }
        }
    }
}
