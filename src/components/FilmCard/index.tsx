import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getFilmImg } from 'src/utils/getImages';
import { colors } from '@mui/material';

type FilmCardtypes = {
  title: string;
  episode: string;
  date: string;
};

export const FilmCard: FC<FilmCardtypes> = ({ title, episode, date }) => {
  {
    console.log('title.tol', title.toLowerCase());
    console.log('object', getFilmImg(title.toLowerCase()));
  }
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'left',
    //     padding: '5px 0',
    //     width: '90%',
    //     margin: '0 auto'
    //   }}>
    <Card sx={{ width: 400, height: 250, display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{
          height: 240,
          marginTop: '5px',
          width: 'fit-content',
          scrollbarWidth: 'thin'
          // '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
          //   height: '5px'
          // },
          // '*::-webkit-scrollbar-track': {
          //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
          //   borderRadius: '20px',
          //   backgroundColor: 'red',
          //   color: 'red'
          // },
          // '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
          //   borderRadius: '20px',
          //   boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
          //   backgroundColor: 'grey',
          //   color: 'red'
          // }
        }}
        image={getFilmImg(title.toLowerCase())}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Episode: {episode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release date: {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show people</Button>
      </CardActions>
    </Card>
  );
};
// .dailyCardsBox::-webkit-scrollbar {
//   height: 7px;
// }

// .dailyCardsBox::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
//   background-color: #f5f5f569;
// }

// .dailyCardsBox::-webkit-scrollbar-thumb {
//   border-radius: 10px;
//   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   background-color: $hovergrey;
// }
