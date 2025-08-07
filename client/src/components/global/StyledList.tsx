import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";
import type React from "react";

export interface StyledListItem {
    id: string;
    primary: React.ReactNode;
    secondary?: React.ReactNode;
    actionIcon?: React.ReactNode;
}

interface Props {
    items: StyledListItem[];
}

export default function StyledList({ items }: Props) {
    return (
        <List sx={{ width: "100%" }}>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        justifyContent: "space-between",
                        gap: 1,
                        mb: 2,
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 1,
                        bgcolor: "#fafafa"
                    }}
                >
                    <ListItemText
                        primary={
                            <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                            >
                                {item.primary}
                            </Typography>
                        }
                        secondary={
                            <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
                            >
                                {item.secondary}
                            </Typography>
                        }
                    />
                    {item.actionIcon && (
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                mt: { xs: 1, sm: 0 },
                                alignSelf: { xs: "flex-end", sm: "center" }
                            }}
                        >
                            {item.actionIcon}
                        </Box>
                    )}
                </ListItem>
            ))}
        </List>
    );
}
