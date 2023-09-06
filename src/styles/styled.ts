import styled from '@emotion/styled';

// import { theme } from './theme';
import { CardMedia, IconButton } from '@mui/material';
import { TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import theme from 'src/components/CustomThemeProvider/themes/normal';

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

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height: 48
  }
}));

export const StyledTableRowAlternative = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

export const CustomDrawerMenu = {
  height: 64,
  width: '100%',
  display: 'block',
  textAlign: 'center',
  paddingTop: 2
};

export const CustomDrawerWrapper = {
  width: '70%',
  display: { xs: 'none', sm: 'flex' },
  margin: '20px auto'
};

export const DrawerDesktopWrapper = {
  display: { xs: 'none', sm: 'block' },
  width: { sm: '500px' },
  flexShrink: { sm: 0 }
};

export const ResponsiveDrawerWrapper = {
  height: 40,
  display: 'flex',
  margin: 'auto'
};

export const AboutPageWrapper = {
  marginTop: '50px',
  marginLeft: { xs: 0, sm: 35 },
  position: 'relative',
  marginRight: { xs: 0, sm: 3.5 },
  marginBottom: '50px'
};

export const AboutImageWrapper = {
  height: 'fit-content',
  width: '100%'
};

export const AboutPageTextWrapper = {
  backgroundColor: 'rgba(320, 320, 320, .80)',
  position: 'absolute',
  top: '50%',
  width: '80%',
  zIndex: '1050',
  padding: 3,
  marginLeft: '10%'
};
export const ErrorPageWrapper = {
  marginTop: '50px',
  marginLeft: { xs: 0, sm: 35 },
  position: 'relative',
  marginRight: { xs: 0, sm: 3.5 }
};

export const FilmCardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 2,
  justifyContent: 'space-between',
  width: '100%'
};
export const MainPageWrapper = {
  marginTop: { xs: 8, sm: 6 },
  marginLeft: { xs: 2, sm: 35 },
  marginRight: { xs: 2, md: 3 }
};
export const mainPageInnerWrapper = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
};
export const CardContainerWrapper = {
  gap: '20px',
  justifyContent: 'left',
  alignItems: 'center',
  width: { xs: '100%', md: 'calc(100vw - 310px)' },
  height: '310px',
  overflowX: 'scroll'
};
