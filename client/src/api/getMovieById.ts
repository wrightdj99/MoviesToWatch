import axios from "axios"

const BASE_URL = "/api/movies/"

export async function getMovieById(id: string) {
    const res = await axios.get(`${BASE_URL}${id}`);
    return res.data;
}