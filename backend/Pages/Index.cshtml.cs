using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dashboards.Pages
{
  [Authorize]
  public class IndexModel : PageModel
  {
    private readonly ILogger<IndexModel> _logger;

    [ViewData]
    public string Title { get; set; } = "Dashboard Page";

    public IndexModel(ILogger<IndexModel> logger)
    {
      _logger = logger;
    }

    public void OnGet()
    {

    }
  }
}
