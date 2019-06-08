using System.Collections.Generic;
using ReactBlog.Business.Models;

namespace ReactBlog.Business.ViewModels
{
    public class ModelsPagedListViewModel<T>
    {
        public IEnumerable<T> ModelsList { get; set; }
        public PagingInfo PagingInfo { get; set; }
    }
}