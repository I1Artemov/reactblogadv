using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ReactBlog.Business.Interfaces;
using ReactBlog.DAL.Contexts;
using ReactBlog.DAL.Interfaces;

namespace ReactBlog.DAL.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T>, IDisposable
        where T : class, IObjectWithId
    {
        protected bool disposed = false;
        private readonly ReactBlogContext _context;
        private DbSet<T> _entries;

        public GenericRepository(ReactBlogContext context)
        {
            _context = context;
            _entries = _context.Set<T>();
        }

        public IQueryable<T> GetAll(bool disableTracking)
        {
            IQueryable<T> result = _entries;

            if (disableTracking)
                return result.AsNoTracking();
            return result;
        }

        public T Get(int id, bool disableTracking)
        {
            return GetAll(disableTracking)
                .FirstOrDefault(x => x.Id == id);
        }

        public void Update(T entity)
        {
            _entries.Update(entity);
        }

        public void Delete(T entity)
        {
            _entries.Remove(entity);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        // IDisposable

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}