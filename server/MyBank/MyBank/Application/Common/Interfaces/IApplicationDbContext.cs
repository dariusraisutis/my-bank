using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MyBank.Models;

namespace MyBank.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<User> Users { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
