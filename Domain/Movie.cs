using System;

namespace Domain;

public class Movie
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }
    public DateTime ReleaseDate { get; set; }
    public string? Genre { get; set; }
    public string? Director { get; set; }
}
