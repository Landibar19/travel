import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Styles.scss'
import { Stack } from '@mui/material';
import LinkButton from '../button/LinkButton';
import { section1Content } from '../../utility/Section1Content';


const {Picture1} = section1Content

const drawerWidth = 240;
const navItems = [ 
  <LinkButton href='/' >
    <Typography>Home</Typography>
  </LinkButton>,
  <LinkButton href='/travelpackages'>
    <Typography>Product</Typography>
  </LinkButton>,
  <LinkButton href='about'>
   <Typography>About</Typography>
  </LinkButton>,
  <LinkButton href='contact'>
    <Typography>Contact</Typography>
   
  </LinkButton>,
]

const NavBar = (props) =>  {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  

  const drawer = (
  
    <Box onClick={handleDrawerToggle} backgroundColor="Transparent"
    sx={{  textAlign: 'center', height:'500px'}}>
      <Typography variant="h6" sx={{ my: 2 }} color='black'>
        MENU
      </Typography>
      <Divider />
     <List>
        {navItems.map((items, id)=>(
          <ListItem key={id} disablePadding>
            <ListItemButton 
            sx={{ textAlign: 'center', 
                fontWeight:'bold'
                }}>
              <ListItemText primary={items}/>
            </ListItemButton>
          </ListItem>
          ))
       }
      </List>

    </Box>
     
  );

  const container = window!== undefined ? () => window().document.body: undefined

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar  sx={{
        backgroundColor:'rgb(38,166,166)',
        height:{xs: '25px', sm:'40px'}, 
        display:'flex',
        justifyContent:'center',
        width: '100%'
        }}
      >
        <Toolbar sx={{display: 'flex', textAlign: 'right'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
         
          
          <Box 
          sx={{ flex:3,  
            display: { xs: 'none', sm: 'flex' }, 
            justifyContent:'center', textAlign:'center'}} 
            component='div'>
            {
            navItems.map((item, idx)=>(
              <Button  key={idx}>
              {item}
            </Button>
            ))}
            
          </Box>
          <Stack sx={{display: {xs: 'none', sm: 'flex'}, flexFlow:'row',}} >
            <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, 
              textAlign:'left', 
              ml:'20px'}}
              fontSize={{xs:12}}
          >
            Travel Agency
          </Typography>
          <img src={Picture1}  
          alt='' 
          style={{
            width:'25px', 
            height: '25px', 
            paddingLeft: "4px",
            marginTop:'5px',
          }} 
          />
          </Stack>
        </Toolbar>
      </AppBar>
    
        <Drawer
        anchor='left'
        PaperProps={{
          sx: {
            backgroundColor:"Menu",
          }}}
         container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
         
        >
          {drawer}
        </Drawer>
      
     
    </Box>
  );
}


export default NavBar;
