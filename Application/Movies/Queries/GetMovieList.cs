using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Movies.Queries;

public class GetMovieList
{
    public class Query : IRequest<List<Movie>>
    {

    }
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Movie>>
    {
        public async Task<List<Movie>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Movies.ToListAsync(cancellationToken);
        }
    }
}
