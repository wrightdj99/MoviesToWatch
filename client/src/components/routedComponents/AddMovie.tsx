import { useNavigate } from "react-router-dom";
import { createMovie } from "../../api/createMovie";
import MovieForm from "../forms/MovieForm";

type AddMovieProps = {
    showToast: (message: string, severity?: "success" | "error") => void;
};

export default function AddMovie({ showToast }: AddMovieProps) {
    const navigate = useNavigate();

    const handleSubmit = async (data: {
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    }) => {
        try {
            await createMovie(data);
            showToast("Movie has been added!", "success");
            navigate("/");
        } catch {
            alert("Failed to add movie");
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: "0 auto"}}>
            <h2>Add a New Movie</h2>
            <MovieForm 
                onSubmit={handleSubmit}
                submitLabel="Add Movie"
            />
        </div>
    );
}