using System.Linq;
using ReactBlog.Business.Models;
using ReactBlog.Business.ViewModels;
using ReactBlog.DAL.Interfaces;

namespace ReactBlog.DAL.Helpers
{
    public class PostHelper
    {
        private readonly IGenericRepository<BlogPost> _blogPostRepo;

        public PostHelper(IGenericRepository<BlogPost> blogPostRepo)
        {
            _blogPostRepo = blogPostRepo;
        }

        public ModelsPagedListViewModel<BlogPostBase> GetPagedByTag(int page, int pageSize, string tag = null)
        {
            ModelsPagedListViewModel<BlogPostBase> result = new ModelsPagedListViewModel<BlogPostBase>();
            result.PagingInfo = new PagingInfo{CurrentPage = page, ItemsPerPage = pageSize};

            IQueryable<BlogPost> allPosts = _blogPostRepo.GetAll(true);

            // Фильтрация по тегу
            if (!string.IsNullOrEmpty(tag))
            {
                allPosts = allPosts
                    .Where(p => p.BlogTags.Any(t => t.Name == tag));
            }

            result.PagingInfo.TotalItems = allPosts.Count();

            // Делаем из результата список плоских объектов
            result.ModelsList = allPosts
                .Skip(page * pageSize)
                .Take(pageSize)
                .Select(x => x.GetAsBase())
                .ToList();

            return result;
        }
    }
}