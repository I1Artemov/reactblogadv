using System;

namespace ReactBlog.Business.Models
{
    public class PagingInfo
    {
        public int CurrentPage { get; set; } // номер текущей страницы
        public int ItemsPerPage { get; set; } // кол-во объектов на странице
        public int TotalItems { get; set; } // всего объектов
        public int TotalPages  // всего страниц
        {
            get { return (int)Math.Ceiling((decimal)TotalItems / ItemsPerPage); }
        }
    }
}