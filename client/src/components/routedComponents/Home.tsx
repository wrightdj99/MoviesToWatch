import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import StyledList, { type StyledListItem } from "../global/StyledList";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import axios from "axios";
import { deleteMovie } from "../../api/deleteMovie";
import { useNavigate } from "react-router-dom";



type HomeProps = {
    showToast: (message: string, severity?: "success" | "error") => void;
}

export default function Home({ showToast }: HomeProps) {

    const [movies, setMovies] = useState<Movie[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get<Movie[]>("/api/movies/")
            .then(
                res => {
                    setMovies(res.data);
                }
            );
        return () => {}
    }, []);

    function deleteHandler(id: string) {
        deleteMovie(id) 
            .then(() => {
                showToast("Deleted Movie!", "success");
            })
            .catch((err) => {
                alert(err);
            });
        setMovies((prev) => prev.filter((m) => m.id != id));
    }

    const items: StyledListItem[] = movies.map((movie) => {
        const year = new Date(movie.releaseDate).getFullYear();
        const actionIcon = (
            <div>
                <IconButton onClick={() => navigate(`/edit/${movie.id}`)}>
                    <Edit/>
                </IconButton>
                <IconButton onClick={() => deleteHandler(movie.id)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        );
        return {
            id: movie.id,
            primary: movie.title,
            secondary: `${movie.genre} - Directeddd by ${movie.director} - Released in ${year}`,
            actionIcon,
        }
    });

    return (
    <Card sx={{ minWidth: 275, padding: 4, margin: 4 }}>
        <CardContent>
            <Typography 
                variant="h3" 
                component="div"
                sx={{ 
                    flexGrow: 1,
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: 3,
                    fontWeight: 600,
                    textAlign:"center"
                }}>
                Your Current Movies
            </Typography>
            <StyledList items={items}/>
        </CardContent>
    </Card>
    );
}