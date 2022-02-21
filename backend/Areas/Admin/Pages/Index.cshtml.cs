using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dashboards.Areas.Admin.Pages
{
  public class IndexModel : PageModel
  {
    [ViewData]
    public string Title { get; set; } = "Admin Page Here";

    public void OnGet()
    {
    }
  }
}
