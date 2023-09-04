import React, { FC } from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  className?: string;
}
export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={`${styles.loaderContainer} ${className}`}>
    <div className={styles.ldsEllipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
