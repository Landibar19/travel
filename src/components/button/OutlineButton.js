import { KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const OutlineButton = ({sx={}, arrow, children, fit, ...props}) => {
  return (
    <Button variant='outlined'
    sx={{
        left:'25px',
        borderRadius:'4px',
        color:'white',
        borderColor:'white',
        width: fit && 'fit-content',
        ...sx
    }}
    {...props }
    >
      {children}
      {arrow && <KeyboardArrowRight fontSize='small'/>}
    </Button>
  )
}

export default OutlineButton
