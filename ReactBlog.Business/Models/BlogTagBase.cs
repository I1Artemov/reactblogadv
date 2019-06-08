using System.ComponentModel.DataAnnotations.Schema;

namespace ReactBlog.Business.Models
{
    public class BlogTagBase : IdInfo
    {
        [ForeignKey("Post")]
        public int PostId { get; set; }

        public string Name { get; set; }
    }
}