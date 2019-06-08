namespace ReactBlog.Business.Models
{
    public class BlogPostBase : IdInfo
    {
        public string Header { get; set; }
        public string Body { get; set; }
    }
}