using System;
using ReactBlog.Business.Interfaces;

namespace ReactBlog.Business.Models
{
    public class IdInfo : IObjectWithId
    {
        public int Id { get; set; }
        public DateTime CreationDateTime { get; set; }
    }
}