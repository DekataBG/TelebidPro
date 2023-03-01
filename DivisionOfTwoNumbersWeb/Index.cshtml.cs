using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SumOfTwoNumbersWeb.Data;

namespace SumOfTwoNumbersWeb.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly Context context;

        public IndexModel(ILogger<IndexModel> logger, Context context)
        {
            _logger = logger;
            this.context = context;
        }

        [BindProperty]
        public int A { get; set; }

        [BindProperty]
        public int B { get; set; }
        
        [BindProperty]
        public int C { get; set; }

        public void OnGet()
        {
        }

        public void OnPost()
        {
            var manager = new Manager(context);

            try
            {
                C = A / B;

                var triple = new Triple();
                triple.Id = manager.GetCount() + 1;
                triple.A = A;
                triple.B = B;
                triple.C = C;

                manager.Create(triple);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}