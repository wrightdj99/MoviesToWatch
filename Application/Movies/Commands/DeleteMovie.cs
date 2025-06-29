using Domain;
using MediatR;
using Persistence;

namespace Application.Movies.Commands;

public class DeleteMovie
{
    public class Command : IRequest<string>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            var movie = await context.Movies
            .FindAsync([request.Id], cancellationToken) ?? throw new Exception("Cannot find movie");
            context.Remove(movie);
            await context.SaveChangesAsync(cancellationToken);
            return request.Id;
        }
    }
}
