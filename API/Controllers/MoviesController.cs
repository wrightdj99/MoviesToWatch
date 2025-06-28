using System;
using System.Diagnostics;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class MoviesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Movie>>> GetMovies()
    {
        return await context.Movies.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Movie>> GetMovieDetail(string id)
    {
        var movie = await context.Movies.FindAsync(id);

        if (movie == null) return NotFound();

        return movie;
    }
}
