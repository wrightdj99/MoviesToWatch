import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieForm from "../forms/MovieForm";
import { getMovieById } from "../../api/getMovieById";
import { updateMovie } from "../../api/updateMovie";

type EditMovieProps = {
    showToast: (message: string, severity?: "success" | "error") => void;
};

export default function EditMovie({ showToast }: EditMovieProps) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<any | null>(null);

    useEffect(() => {
        if (id) {
            getMovieById(id).then(setMovie).catch(() => alert("Failed to load movie"));
        }
    }, [id]);

    const handleSubmit = async (data: any) => {
        try {
            await updateMovie(data);
            showToast("Movie Updated!", "success");
            navigate("/")
        } catch {
            alert("Failed to update movie")
        }
    }

    return movie ? (
        <div style={{ maxWidth: 600, margin: "80px auto 0" }}>
            <MovieForm
                initialData={movie}
                onSubmit={
                    handleSubmit
                }
                submitLabel="Update Movie"
            />
        </div>
    ) : (
        <p>Loading...</p>
    );
}