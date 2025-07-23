import { List, ListItem, ListItemText } from "@mui/material";
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
        <List>
            {items.map((item) => (
                <ListItem key={item.id} secondaryAction={item.actionIcon}>
                    <ListItemText primary={item.primary} secondary={item.secondary}/>
                </ListItem>
            ))}
        </List>
    );
}