using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Security.Cryptography;

namespace SumOfTwoNumbersWeb.Data
{
    public class Manager
    {
        private readonly Context context;

        public Manager(Context context)
        {
            this.context = context;
        }
        public int GetCount()
        {
            //return context.Triples.Count();

            return context.Triples
                .FromSql($"SELECT * FROM TRIPLES")
                .Count();
        }
        public void Create(Triple triple)
        {
            //context.Triples.Add(triple);
            //context.SaveChanges();

            context.Database.OpenConnection();

            context.Database.ExecuteSql($"SET IDENTITY_INSERT dbo.TRIPLES ON");
            context.Database
                .ExecuteSql($"INSERT INTO TRIPLES (Id, A, B, C) VALUES ({triple.Id}, {triple.A}, {triple.B}, {triple.C});");
            context.Database.ExecuteSql($"SET IDENTITY_INSERT dbo.TRIPLES OFF");

            context.Database.CloseConnection();
        }

        public void Delete(int id)
        {
            //context.Triples.Remove(context.Triples.First(t => t.Id == id));
            //context.SaveChanges();

            context.Database.OpenConnection();

            context.Database
                .ExecuteSql($"DELETE FROM TRIPLES WHERE Id = {id}");

            context.Database.CloseConnection();
        }
    }
}
