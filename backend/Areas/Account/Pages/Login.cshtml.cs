using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dashboards.Areas.Login.Pages
{
  public class LoginModel : PageModel
  {

    [ViewData]
    public string Title { get; set; } = "Login Page";

    public void OnGet()
    {
    }
  }
}
