import React, { FC, useState } from 'react';
import { CustomDrawer } from './CustomDrawer';
// styles
import { AppBar, Toolbar, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerDesktopWrapper, ResponsiveDrawerWrapper, StyledIconButton } from 'src/styles/styled';
//constans
import { drawerWidth, logo } from 'src/constants';

export const ResponsiveDrawer: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

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
          <Box component="img" sx={ResponsiveDrawerWrapper} alt="The Star Wars logo." src={logo} />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
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
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}>
          <CustomDrawer onClick={handleDrawerToggle} />
        </Drawer>
        <Drawer
          sx={DrawerDesktopWrapper}
          PaperProps={{
            sx: {
              width: drawerWidth,
              marginTop: 0
            }
          }}
          variant="permanent">
          <CustomDrawer onClick={handleDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
  );
};
