import axios from "axios";

export interface MovieInput {
    title: string;
    genre: string;
    releaseDate: string;
    director: string;
}

export async function createMovie(movie: MovieInput): Promise<void> {
    try {
        await axios.post("https://localhost:5001/api/movies", movie);
    } catch(error) {
        console.error("Failed to add movie", error);
        throw error;
    }
}