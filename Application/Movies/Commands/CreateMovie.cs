using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Movies.Commands;

public class CreateMovie
{
    public class Command : IRequest<string>
    {
        public required Movie Movie { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Movies.Add(request.Movie);

            await context.SaveChangesAsync(cancellationToken);

            return request.Movie.Id;
        }
    }
}
