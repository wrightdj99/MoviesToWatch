using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Movies.Queries;

public class GetMovieDetails
{
    public class Query : IRequest<Movie>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Movie>
    {
        public async Task<Movie> Handle(Query request, CancellationToken cancellationToken)
        {
            var movie = await context.Movies.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Movie not found");
            return movie;
        }
    }
}
