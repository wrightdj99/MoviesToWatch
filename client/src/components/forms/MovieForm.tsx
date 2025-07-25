import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface MovieFormProps {
    initialData?: {
        id: string;
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    };
    onSubmit: (data: {
        id: string;
        title: string;
        genre: string;
        releaseDate: string;
        director: string;
    }) => void;
    submitLabel?: string;
}

export default function MovieForm({ initialData, onSubmit, submitLabel }: MovieFormProps) {
    
    const [formData, setFormData] = useState(() => ({
            id: initialData?.id || "",
            title: initialData?.title || "",
            genre: initialData?.genre || "",
            releaseDate: initialData?.releaseDate ? dayjs(initialData.releaseDate) : null,
            director: initialData?.director || "",
        
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            releaseDate: formData.releaseDate?.isValid?.()
                ? formData.releaseDate.format("YYYY-MM-DD")
                : ""
        });
    };
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
                <input type="hidden" name="id" value={formData.id}/>
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
                        value={
                           formData.releaseDate
                        }
                        onChange={(newValue) => {
                            setFormData((prev) => ({
                                ...prev,
                                releaseDate: newValue,
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