using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ReactBlog.DAL.Contexts
{
    public static class ModelBuilderExtensions
    {
        /// <summary>
        /// Расширение, которое нужно, чтобы сработало отключение автогенерации "множественного числа"
        /// при определении названия таблицы в БД по названию модели (класса) 
        /// </summary>
        public static void RemovePluralizingTableNameConvention(this ModelBuilder modelBuilder)
        {
            foreach (IMutableEntityType entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }
        }
    }
}