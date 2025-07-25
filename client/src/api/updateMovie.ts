import axios from "axios";
import type { MovieInput } from "./createMovie";

const BASE_URL = "https://localhost:5001/api/movies/"

export async function updateMovie(id: string, movie: MovieInput) {
    console.log(id);
    console.log(movie);
    await axios.put(`${BASE_URL}`, movie);
}