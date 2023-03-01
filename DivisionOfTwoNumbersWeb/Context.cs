using Microsoft.EntityFrameworkCore;

namespace SumOfTwoNumbersWeb.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) 
            : base(options)
        {
        }

        public DbSet<Triple> Triples { get; set; }
    }
}
