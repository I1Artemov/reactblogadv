namespace ReactBlog.Business.Models
{
    public class BlogComment : BlogCommentBase
    {
        public virtual BlogUser Author { get; set; }

        public virtual BlogPost Post { get; set; }
    }
}