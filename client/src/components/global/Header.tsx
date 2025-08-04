import { AppBar, Drawer, List } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import { useState } from "react";
import DrawerNavItem from "./DrawerNavItem";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    console.log(newOpen);
    setOpen(newOpen);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <List>
          <DrawerNavItem label="Home" icon={<HomeIcon/>} to="/"/>
          <DrawerNavItem label="Add Movie" icon={<MovieIcon/>} to="/add"/>
          <DrawerNavItem label="IMDb reference" icon={<MovieIcon/>} href="https://www.imdb.com"/>
        </List>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" 
              sx={{ 
                  background: "linear-gradient(to right, #1e3c72,rgb(42, 99, 152),rgb(42, 139, 152))", 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)" 
              }}>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer(open ? false : true)}
                      sx={{ 
                          mr: 2,
                          backgroundColor: "rgba(255,255,255,0.1)",
                          '&:hover': {
                          backgroundColor: "rgba(255,255,255,0.2)"
                          },
                          borderRadius: "12px"
                      }}
                  >
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                      {DrawerList}
                  </Drawer>
                  <MenuIcon />
                  </IconButton>
                  <Typography 
                      variant="h5" 
                      component="div" 
                      sx={{ 
                          flexGrow: 1,
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: 1.5,
                          fontWeight: 600
                      }}
                  >
                  Movies To Watch RIGHT NOW!!!
                  </Typography>
              </Toolbar>
          </AppBar>
      </Box>
    </div>
  )
}