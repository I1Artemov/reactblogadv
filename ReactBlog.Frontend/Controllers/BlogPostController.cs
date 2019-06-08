using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactBlog.Business.Models;
using ReactBlog.Business.ViewModels;
using ReactBlog.DAL.Helpers;
using ReactBlog.DAL.Interfaces;

namespace ReactBlog.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        private readonly IGenericRepository<BlogPost> _blogPostRepo;
        private readonly IGenericRepository<BlogComment> _blogCommentRepo;

        private readonly PostHelper _postHelper;
        private readonly CommentHelper _commentHelper;

        public BlogPostController(IGenericRepository<BlogPost> blogPostRepo, IGenericRepository<BlogComment> blogCommentRepo)
        {
            _blogPostRepo = blogPostRepo;
            _blogCommentRepo = blogCommentRepo;

            _postHelper = new PostHelper(blogPostRepo);
            _commentHelper = new CommentHelper(blogCommentRepo);
        }

        [Route("page")]
        [HttpGet]
        public ModelsPagedListViewModel<BlogPostBase> GetPosts(int page, string tag)
        {
            var resultVM = _postHelper.GetPagedByTag(page, 5, tag);

            return resultVM;
        }

        [Route("GetPostComments")]
        [HttpGet]
        public List<BlogComment> GetPostComments(int postId)
        {
            List<BlogComment> comments = _commentHelper.GetCommentsForPost(postId);

            return comments;
        }
    }
}