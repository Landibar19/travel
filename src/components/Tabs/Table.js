import { Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
    const packages = useSelector((state)=> state.travelPackages.packages)

    const [value, setValue] = useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    };

  return (
    <Container>
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{maxWidth:480}}>
            <Typography>
                Description
            </Typography>
            <Tabs 
            value={value} 
            onChange={handleChange} 
            variant='scrollable'
            scrollButtons='auto'
            TabIndicatorProps={{style: {backgroundColor:'white'}}}
            TabScrollButtonProps={{style: {color:'white'}}}
            >
              {packages.map(({name}) => (
                <Tab label={<span style={{color:'white'}}>{name}</span>}  
                key={name} />
              ))}
            </Tabs>
            <Typography  variant='body2' color='white'>
              {packages.description}
            </Typography>
          </Stack>
        </Grid>
    </Container>
  )
}

export default Table
