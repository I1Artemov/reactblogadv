using System.Collections.Generic;
using System.Linq;
using ReactBlog.Business.Models;
using ReactBlog.DAL.Interfaces;

namespace ReactBlog.DAL.Helpers
{
    public class CommentHelper
    {
        private readonly IGenericRepository<BlogComment> _blogCommentRepo;

        public CommentHelper(IGenericRepository<BlogComment> blogCommentRepo)
        {
            _blogCommentRepo = blogCommentRepo;
        }

        public List<BlogComment> GetCommentsForPost(int postId)
        {
            List<BlogComment> comments = _blogCommentRepo
                .GetAll(true)
                .Where(x => x.PostId == postId)
                .ToList();

            return comments;
        }
    }
}
