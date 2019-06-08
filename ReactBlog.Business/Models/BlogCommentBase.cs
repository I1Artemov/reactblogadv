using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Business.Models
{
    public class BlogCommentBase : IdInfo
    {
        [ForeignKey("Author")]
        public int AuthorId { get; set; }

        [ForeignKey("Post")]
        public int PostId { get; set; }

        public string Body { get; set; }
    }
}