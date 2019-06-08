namespace ReactBlog.Business.Models
{
    public class BlogUser : IdInfo
    {
        public string Login { get; set; }

        public string Password { get; set; }

        public bool IsAdmin { get; set; }
    }
}