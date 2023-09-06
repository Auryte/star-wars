import React, { FC } from 'react';
import { Link } from 'react-router-dom';
//styles
import { Box, MenuItem, MenuList } from '@mui/material';
import { CustomDrawerMenu, CustomDrawerWrapper } from 'src/styles/styled';
//constats
import { categories, logo } from 'src/constants';

type DraverType = {
  onClick: () => void;
};

export const CustomDrawer: FC<DraverType> = ({ onClick }) => (
  <Box>
    <Box component="img" sx={CustomDrawerWrapper} alt="The Star Wars logo." src={logo} />
    <MenuList>
      {categories.map((text) => (
        <MenuItem
          key={text}
          component={Link}
          to={text === 'Films' ? '/' : text}
          onClick={onClick}
          sx={CustomDrawerMenu}>
          {text}
        </MenuItem>
      ))}
    </MenuList>
  </Box>
);
