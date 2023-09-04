import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { Box, MenuItem, MenuList } from '@mui/material';
import { theme } from 'src/styles/theme';
import { StyledIconButton } from 'src/styles/styled';
import { Link } from 'react-router-dom';

const drawerWidth = 250;

export const ResponsiveDrawer = () => {
  const categories = ['Films', 'About'];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box>
      <Box
        component="img"
        sx={{
          width: '70%',
          display: { xs: 'none', sm: 'flex' },
          margin: '20px auto'
        }}
        alt="The Star Wars logo."
        src="https://res.cloudinary.com/dlvhpqrkd/image/upload/v1693769506/StarWars/logo.png"
      />
      <MenuList>
        {categories.map((text) => (
          <MenuItem
            key={text}
            component={Link}
            to={text === 'Films' ? '/' : text}
            onClick={handleDrawerToggle}
            sx={{
              height: 64,
              width: '100%',
              display: 'block',
              textAlign: 'center',
              paddingTop: 2
            }}>
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1, display: { sm: 'none' } }}>
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </StyledIconButton>
          <Box
            component="img"
            sx={{
              height: 40,
              display: 'flex',
              margin: 'auto'
            }}
            alt="The Star Wars logo."
            src="https://res.cloudinary.com/dlvhpqrkd/image/upload/v1693769506/StarWars/logo.png"
          />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          [theme.breakpoints.values.sm]: {
            width: drawerWidth,
            flexShrink: 0
          }
        }}>
        <Drawer
          sx={{ display: { lg: 'none', xl: 'none', xs: 'block' } }}
          variant="temporary"
          PaperProps={{
            sx: {
              width: {
                xs: '100%',
                sm: '100%'
              },
              marginTop: '56px'
            }
          }}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}>
          {/* <IconButton
            onClick={handleDrawerToggle}
            sx={{ marginRight: 'auto', marginLeft: 0, marginTop: 20 }}>
            <CloseIcon />
          </IconButton> */}
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            display: { xs: 'none', sm: 'block', md: 'block' },
            [theme.breakpoints.values.sm]: {
              width: '500px',
              flexShrink: 0
            }
          }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              marginTop: 0
            }
          }}
          variant="permanent">
          <div />
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
