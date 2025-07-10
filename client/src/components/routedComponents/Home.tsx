import { Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get<Movie[]>("https://localhost:5001/api/movies/")
            .then(res => setMovies(res.data));
        console.log(movies);
        return () => {}
    }, []);

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
        </CardContent>
    </Card>
    );
}