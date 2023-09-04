import React, { FC } from 'react';
import { Skeleton, Card } from '@mui/material';

// Styles

type CardSkeleton = {
  count: number;
};

export const CardSkeleton: FC<CardSkeleton> = ({ count }) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <Card key={i} sx={{ height: 200 }}>
        <Skeleton variant="rectangular" width={300} height={200} />
      </Card>
    ))}
  </>
);
