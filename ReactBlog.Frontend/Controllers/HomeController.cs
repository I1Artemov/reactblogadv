using Microsoft.AspNetCore.Mvc;

namespace ReactBlog.Frontend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}