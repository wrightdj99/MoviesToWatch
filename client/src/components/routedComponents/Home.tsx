import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import StyledList, { type StyledListItem } from "../global/StyledList";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { deleteMovie } from "../../api/deleteMovie";
export default function Home() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get<Movie[]>("https://localhost:5001/api/movies/")
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
                console.log("Movie deleted.")
            })
            .catch((err) => {
                alert(err);
            });
        setMovies((prev) => prev.filter((m) => m.id != id));
    }

    const items: StyledListItem[] = movies.map((movie) => {
        const year = new Date(movie.releaseDate).getFullYear();
        const actionIcon = (
            <IconButton onClick={() => deleteHandler(movie.id)}>
                <DeleteIcon/>
            </IconButton>
        );
        return {
            id: movie.id,
            primary: movie.title,
            secondary: `${movie.genre} - Directed by ${movie.director} - Released in ${year}`,
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