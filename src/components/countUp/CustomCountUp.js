import React from 'react';
import CountUp from 'react-countup';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material';

const useStyles = makeStyles({
  countContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(255, 192, 0)',
  },
  countText: {
    fontSize: '2.5vw',
  },
});

const CustomCountUp = ({ 
    start ='', 
    end= '',
    duration, 
    prefix, 
    suffix
 }) => {
  const classes = useStyles();

  return (
    <div className={classes.countContainer}>
      <Stack variant="h4" className={classes.countText}>
        <CountUp 
        start={start} 
        end={end}
        duration={duration} 
        prefix={prefix}
        suffix={suffix}
        >
        </CountUp>
      </Stack>
    </div>
  );
};

export default CustomCountUp;
