import axios from "axios";

const BASE_URL = "/api/movies/"

export async function deleteMovie(movieId: string): Promise<void> {
    try {
        await axios.delete(`${BASE_URL}/${movieId}`);
        console.log("Deleted movie");
    } catch (error) {
        console.error("Failed to delete movie");
        throw error;
    }
}