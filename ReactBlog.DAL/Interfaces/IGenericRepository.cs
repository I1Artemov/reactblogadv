using System.Linq;

namespace ReactBlog.DAL.Interfaces
{
    public interface IGenericRepository<T>
    {
        IQueryable<T> GetAll(bool disableTracking);

        T Get(int id, bool disableTracking);

        void Update(T entity);

        void Delete(T entity);

        void Save();
    }
}