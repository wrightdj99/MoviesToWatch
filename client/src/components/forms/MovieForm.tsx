import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

interface MovieFormProps {
    initialData?: {
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    };
    onSubmit: (data: {
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    }) => void;
    submitLabel?: string;
}

export default function MovieForm({ initialData, onSubmit }: MovieFormProps) {
    
    const [formData, setFormData] = useState(
        initialData || {
            title: "",
            genre: "",
            releaseDate: null as Dayjs | null,
            director: "",
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <TextField
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Director"
                    name="director"
                    value={formData.director}
                    onChange={handleChange}
                    required
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Release Date"
                        name="releaseDate"
                        defaultValue={formData.releaseDate}
                        onChange={(newValue) => {
                            setFormData((prev) => ({
                                ...prev,
                                releaseDate: newValue ? newValue.format("YYYY-MM-DD") : "",
                            }));
                        }}
                        slotProps={{ textField: {required: true}}}
                    />
                </LocalizationProvider>
                <Button type="submit" variant="contained">
                    {submitLabel || "Save Movie"}
                </Button>
            </Stack>
        </Box>
    );
}