using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Movies.Any())
        {
            return;
        }
        var movies = new List<Movie>
        {
            new() {
                Title = "Toy Story",
                ReleaseDate = new DateTime(1995, 11, 22),
                Genre = "Comedy",
                Director = "John Lasseter"
            },
            new() {
                Title = "Tusk",
                ReleaseDate = new DateTime(2014, 9, 19),
                Genre = "Horror",
                Director = "Kevin Smith"
            },
            new() {
                Title = "Ray",
                ReleaseDate = new DateTime(2004, 10, 29),
                Genre = "Drama",
                Director = "Taylor Hackford"
            },
        };

        context.Movies.AddRange(movies);

        await context.SaveChangesAsync();
    }
}
