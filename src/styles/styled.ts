import styled from '@emotion/styled';

import { theme } from './theme';
import { CardMedia, IconButton } from '@mui/material';
import { TableRow } from '@mui/material';

export const StyledIconButton = styled(IconButton)(() => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  },
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: `${theme.palette.divider}`
  }
}));
