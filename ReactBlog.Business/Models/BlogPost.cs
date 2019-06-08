using System.Collections.Generic;

namespace ReactBlog.Business.Models
{
    public class BlogPost : BlogPostBase
    {
        public virtual ICollection<BlogTag> BlogTags { get; set; }

        public BlogPost()
        {
            BlogTags = new List<BlogTag>();
        }

        public BlogPostBase GetAsBase()
        {
            return new BlogPostBase
            {
                Id = this.Id,
                CreationDateTime = this.CreationDateTime,
                Header = this.Header,
                Body = this.Body
            };
        }
    }
}