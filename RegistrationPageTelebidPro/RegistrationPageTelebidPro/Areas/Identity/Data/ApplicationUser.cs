using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;

namespace RegistrationPageTelebidPro.Areas.Identity.Data;

// Add profile data for application users by adding properties to the IdentityUser class
public class ApplicationUser : IdentityUser
{
    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }
}

