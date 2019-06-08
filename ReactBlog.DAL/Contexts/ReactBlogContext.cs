using Microsoft.EntityFrameworkCore;
using ReactBlog.Business.Models;

namespace ReactBlog.DAL.Contexts
{
    public class ReactBlogContext : DbContext
    {
        public ReactBlogContext(DbContextOptions<ReactBlogContext> options) : base(options) { }

        public DbSet<BlogPost> Posts { get; set; }
        public DbSet<BlogComment> Comments { get; set; }
        public DbSet<BlogTag> Tags { get; set; }
        public DbSet<BlogUser> Users { get; set; }

        /// <summary>
        /// Настройка связывания моделей и баз данных
        /// </summary>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Исправляет ошибку с неопределенностью первичных ключей Identity
            base.OnModelCreating(modelBuilder);

            // Чтобы EF не пытался найти таблицы по множественному числу сущности
            modelBuilder.RemovePluralizingTableNameConvention();
        }
    }
}