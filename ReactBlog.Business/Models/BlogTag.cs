namespace ReactBlog.Business.Models
{
    public class BlogTag : BlogTagBase
    {
        public virtual BlogPost Post { get; set; }
    }
}