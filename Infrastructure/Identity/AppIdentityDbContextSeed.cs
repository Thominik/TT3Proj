using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity;

public class AppIdentityDbContextSeed
{
    public static async Task SeedUserAsync(UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new AppUser
            {
                DisplayName = "Dominik",
                Email = "dominik@makita.com",
                UserName = "dominik@makita.com",
                Address = new Address
                {
                    FirstName = "Dominik",
                    LastName = "Bednarz",
                    Street = "Iwonicka 12",
                    City = "Rzeszów",
                    State = "podkarpackie",
                    ZipCode = "35-505"
                }
            };

            await userManager.CreateAsync(user, "Pa$$w0rd");
        }
    }
}