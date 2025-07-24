import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type React from "react";
import { Link as RouterLink } from "react-router-dom";

interface DrawerNavItemProps {
    label: string;
    icon: React.ReactNode;
    to?: string; //We use this for internal links, React-routed links.
    href?: string; //We use this for external links, like if we want to take a user to IMDb.
    onClick?: () => void; //For the function we want to handle this item with for clicking.
}

export default function DrawerNavItem({
    label,
    icon,
    to,
    href,
    onClick,
}: DrawerNavItemProps) {
    const buttonProps: any = {
        onClick
    };

    if (to) {
        buttonProps.component = RouterLink;
        buttonProps.to = to;
    } else if (href) {
        buttonProps.component = "a";
        buttonProps.href = href;
        buttonProps.traget = "_blank";
        buttonProps.rel = "noopener noreferrer";
    }

    return (
        <ListItem disablePadding>
            <ListItemButton {...buttonProps}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label}/>
            </ListItemButton>
        </ListItem>
    );
}