/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function LinkButton( {children,sx = {}, ...props}) {
  return (
      <Link

      color={{xs:'black',
      "&:hover": { color: "grey" }, sm:'white'}}
      sx={{
        textTransform:'initial',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 0,
        },
      }}
      {...props}
      underline="none">
      {children}
      </Link>

  );
}