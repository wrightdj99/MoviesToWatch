using System;
using System.Diagnostics;
using Application.Movies.Commands;
using Application.Movies.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class MoviesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Movie>>> GetMovies()
    {
        return await Mediator.Send(new GetMovieList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Movie>> GetMovieDetail(string id)
    {
        return await Mediator.Send(new GetMovieDetails.Query { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateMovie(Movie movie)
    {
        return await Mediator.Send(new CreateMovie.Command { Movie = movie });
    }

    [HttpPut]
    public async Task<ActionResult> EditMovie(Movie movie)
    {
        await Mediator.Send(new EditMovie.Command { Movie = movie });

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteMovie(string id)
    {
        await Mediator.Send(new DeleteMovie.Command { Id = id });
        return Ok();
    }
}
