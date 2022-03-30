import React from 'react';
import styles from "./LoadingAnimation.module.css";
import CircularProgress from '@mui/material/CircularProgress';

const LoadingAnimation = () => {
  return (
    <div className={styles["loader"]}>
        <CircularProgress size={100} thickness={5} />
    </div>
  )
}

export default LoadingAnimation