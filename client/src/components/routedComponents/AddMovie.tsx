import { useNavigate } from "react-router-dom";
import { createMovie } from "../../api/createMovie";
import MovieForm from "../forms/MovieForm";


export default function AddMovie() {
    const navigate = useNavigate();

    const handleSubmit = async (data: {
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    }) => {
        try {
            await createMovie(data);
            navigate("/");
        } catch {
            alert("Failed to add movie");
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "0 auto"}}>
            <h2>Add a New Movie</h2>
            <MovieForm onSubmit={handleSubmit}/>
        </div>
    );
}