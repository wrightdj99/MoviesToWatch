import axios from "axios";
import type { MovieInput } from "./createMovie";

const BASE_URL = "/api/movies/"

export async function updateMovie(movie: MovieInput) {
    await axios.put(`${BASE_URL}`, movie);
}